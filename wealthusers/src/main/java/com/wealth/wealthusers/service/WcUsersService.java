package com.wealth.wealthusers.service;

import com.wealth.wealthusers.common.CommonConstants;
import com.wealth.wealthusers.common.LogUtil;
import com.wealth.wealthusers.controller.WcUsersController;
import com.wealth.wealthusers.jpa.WcUsersRepository;
import com.wealth.wealthusers.entity.WcUsers;
import com.wealth.wealthusers.model.CustomError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WcUsersService {

    public static final Logger logger = LoggerFactory.getLogger(WcUsersController.class);

    @Autowired
    WcUsersRepository repository;

    public List<WcUsers> findAll() {
        List<WcUsers> list = new ArrayList();
        repository.findAll().forEach(listItem -> list.add(listItem));
        return list;
    }

    public List<WcUsers> findAllWithDelay(long timeout) {
        List<WcUsers> list = new ArrayList();
        repository.findAll().forEach(listItem -> list.add(listItem));

        try
        {
            Thread.sleep(timeout);
        }
        catch(InterruptedException ex)
        {
            Thread.currentThread().interrupt();
        }
        return list;
    }

    public Object create(WcUsers entity) {
        LogUtil.log("WcUsersService : create started : " + entity.getEmailId());

        Object result = null;

        if (findByEmail(entity.getEmailId()) != null) {
            logger.error("WcUsersService : Email Already exist " + entity.getEmailId());
            LogUtil.log("WcUsersService : Email Already exist " + entity.getEmailId());
            result = new CustomError("user with username " + entity.getEmailId() + "already exist ");
        } else {
            if (entity.getRole() == null || entity.getRole().isEmpty()) {
                entity.setRole(CommonConstants.ROLE_CUSTOMER);
            }
            entity = repository.save(entity);
            LogUtil.log("WcUsersService : User created : " + entity.getId());
            result = entity;
        }


        LogUtil.log("WcUsersService : create completed");
        return result;
    }

    public WcUsers update(WcUsers wcUsers) {

        LogUtil.log("WcUsersService : update : " + wcUsers.getId());

        repository.save(wcUsers);
        wcUsers = find(wcUsers.getId());
        return wcUsers;
    }

    public WcUsers update(int id, String emailId) {

        LogUtil.log("WcUsersService : update : " + id);

        WcUsers wcUsers = find(id);
        wcUsers.setEmailId(emailId);
        return update(wcUsers);
    }

    public WcUsers findByEmail(String email) {
        return repository.findOneByEmailId(email);
    }

    public WcUsers findByUserName(String email) {
        return repository.findOneByUserName(email);
    }

    public WcUsers find(Integer id) {
        return repository.findById(id).get();
    }

    public WcUsers delete(int id) {
        WcUsers wcUsers = repository.findById(id).get();

        LogUtil.log("WcUsersService : delete : " + id);
        if(wcUsers != null){
            repository.delete(wcUsers);
        }
        return wcUsers;
    }


    public WcUsers fetchUserByLoginId(String loginId) {
        LogUtil.log("WcUsersService : fetchUserByLoginId started : " + loginId);

        WcUsers entity = findByEmail(loginId);
        if (entity == null) {
            LogUtil.log("WcUsersService : fetchUserByLoginId : login id doesn't match with email ids ");
            entity = findByUserName(loginId);
            if (entity == null) {
                LogUtil.log("WcUsersService : fetchUserByLoginId : login id doesn't match with user name as well");
            } else {
                LogUtil.log("WcUsersService : fetchUserByLoginId : login id match with user name ");
            }
        } else {
            LogUtil.log("WcUsersService : fetchUserByLoginId : login id match with email id ");
        }
        LogUtil.log("WcUsersService : create completed");
        return entity;
    }

}
