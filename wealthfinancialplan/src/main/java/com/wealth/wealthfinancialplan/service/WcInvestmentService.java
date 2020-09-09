package com.wealth.wealthfinancialplan.service;

import com.wealth.wealthfinancialplan.common.LogUtil;
import com.wealth.wealthfinancialplan.entity.WcInvestment;
import com.wealth.wealthfinancialplan.jpa.WcInvestmentRepository;
import com.wealth.wealthfinancialplan.watson.WatsonFinancialPlanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WcInvestmentService {

    @Autowired
    WcInvestmentRepository repository;

    @Autowired
    WatsonFinancialPlanner watsonFinancialPlanner;

    public List<WcInvestment> findAll() {
        List<WcInvestment> list = new ArrayList();
        repository.findAll().forEach(listItem -> list.add(listItem));
        return list;
    }

    public WcInvestment create(WcInvestment entity) {
        watsonFinancialPlanner.populateFP(entity, entity.getInvestmentAmount());

        entity = repository.save(entity);
        LogUtil.log("WcInvestmentService : Investment created : " + entity.getId());
        return entity;
    }

    public WcInvestment update(WcInvestment entity) {
        LogUtil.log("WcInvestmentService : update : " + entity.getId());

        repository.save(entity);
        entity = find(entity.getId());
        return entity;
    }

    public WcInvestment find(Integer id) {
        return repository.findById(id).get();
    }

    public List<WcInvestment> findByWcGoalId(Integer wcGoalId) {
        return repository.findByWcGoalId(wcGoalId);
    }

    public WcInvestment delete(int id) {
        LogUtil.log("WcInvestmentService : delete : " + id);

        WcInvestment entity = find(id);
        if(entity != null){
            repository.delete(entity);
        }
        return entity;
    }

    public void deleteByGoalId(int wcGoalId) {
        LogUtil.log("WcInvestmentService : deleteByGoalId : " + wcGoalId);
        repository.findByWcGoalId(wcGoalId).forEach(listItem -> repository.delete(listItem));
    }

}
