package com.wealth.wealthusers.service;

import com.wealth.wealthusers.entity.WcWealthManager;
import com.wealth.wealthusers.jpa.WcBusinessManagerRepository;
import com.wealth.wealthusers.entity.WcBusinessManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WcBusinessManagerService {

    @Autowired
    WcBusinessManagerRepository repository;

    public List<WcBusinessManager> findAll() {
        List<WcBusinessManager> list = new ArrayList();
        repository.findAll().forEach(listItem -> list.add(listItem));
        return list;
    }

    public WcBusinessManager create(WcBusinessManager wcBusinessManager) {
        System.out.println("WcBusinessManagerService : create :" + wcBusinessManager.getFirstName());

        return repository.save(wcBusinessManager);
    }

    public WcBusinessManager update(WcBusinessManager wcBusinessManager) {
        System.out.println("WcBusinessManagerService : update :" + wcBusinessManager.getId());

        repository.save(wcBusinessManager);
        wcBusinessManager = find(wcBusinessManager.getId());
        return wcBusinessManager;
    }

    public WcBusinessManager find(Integer id) {
        return repository.findById(id).get();
    }

    public WcBusinessManager delete(int id) {
        System.out.println("WcBusinessManagerService : delete :" + id);

        WcBusinessManager wcBusinessManager = find(id);
        if(wcBusinessManager != null){
            repository.delete(wcBusinessManager);
        }
        return wcBusinessManager;
    }

    public WcBusinessManager findOneByWcUserId(Integer id) {
        return repository.findOneByWcUserId(id);
    }


}
