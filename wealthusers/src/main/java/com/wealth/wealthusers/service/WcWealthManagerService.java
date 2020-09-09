package com.wealth.wealthusers.service;

import com.wealth.wealthusers.common.CommonConstants;
import com.wealth.wealthusers.common.DateUtil;
import com.wealth.wealthusers.common.LogUtil;
import com.wealth.wealthusers.entity.WcCustomer;
import com.wealth.wealthusers.entity.WcUsers;
import com.wealth.wealthusers.jpa.WcWealthManagerRepository;
import com.wealth.wealthusers.entity.WcWealthManager;
import com.wealth.wealthusers.model.CustomError;
import com.wealth.wealthusers.mq.MQSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WcWealthManagerService {

    @Autowired
    MQSender mQSender;

    @Autowired
    WcUsersService usersService;

    @Autowired
    WcWealthManagerRepository repository;

    @Autowired
    ImageService imageService;

    public List<WcWealthManager> findAll() {
        List<WcWealthManager> list = new ArrayList();
        repository.findAll().forEach(listItem -> {
                    list.add(listItem);
                    listItem.setStartDateString(DateUtil.convertMMMYYY(listItem.getStartDate()));
                    listItem.setImage(imageService.createImageUrl(listItem.getGender(), listItem.getId(), true));
                }
        );
        return list;
    }

    public Object create(WcWealthManager wcWealthManager) {
        LogUtil.log("WcWealthManagerService : create Started");
        System.out.println("WcWealthManagerService : create :" + wcWealthManager.getEmailId());

        Object result;

        //Create User
        WcUsers wcUsers = new WcUsers(wcWealthManager.getEmailId(), "wc", wcWealthManager.getEmailId(), CommonConstants.ROLE_WEALTH_MANAGER);
        result = usersService.create(wcUsers);

        if (result instanceof CustomError) {
            LogUtil.log("WcWealthManagerService : User not created");
        } else {
            //Copy the userId from the newly created entity
            wcUsers = (WcUsers) result;
            wcWealthManager.setWcUserId(wcUsers.getId());

            //Create Customer
            wcWealthManager = repository.save(wcWealthManager);
            LogUtil.log("WcWealthManagerService : User created : " + wcUsers.getId());
            result = wcWealthManager;

            //Send MQ wcWealthManager
            String msg = "Hi " + wcWealthManager.getFirstName() + " !!!! \n\n" + "Your account is created. Please login with your email id " + wcWealthManager.getEmailId();
            mQSender.sendMessageWealthManager(wcWealthManager.getEmailId() , msg);
        }

        LogUtil.log("WcWealthManagerService : create Completed");

        return result;
    }

    public WcWealthManager update(WcWealthManager wcWealthManager) {
        System.out.println("WcWealthManagerService : update :" + wcWealthManager.getId());

        repository.save(wcWealthManager);
        wcWealthManager = find(wcWealthManager.getId());
        return wcWealthManager;
    }

    public WcWealthManager find(Integer id) {
        return repository.findById(id).get();
    }

    public WcWealthManager delete(int id) {
        System.out.println("WcWealthManagerService : delete :" + id);

        WcWealthManager wcWealthManager = find(id);
        if(wcWealthManager != null){
            usersService.delete(wcWealthManager.getWcUserId());

            repository.delete(wcWealthManager);
        }
        return wcWealthManager;
    }

    public WcWealthManager findOneByWcUserId(Integer id) {
        return repository.findOneByWcUserId(id);
    }

}
