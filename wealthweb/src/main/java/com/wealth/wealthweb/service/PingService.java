package com.wealth.wealthweb.service;

import com.wealth.wealthweb.common.LogUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration

@Service
public class PingService {

    @Autowired
    UserService userService;

    @Autowired
    FinancialPlanService financialPlanService;

    public Object pingUser () {
        LogUtil.log(("PingService  pingUser Started " ));
        return userService.pingUser();
    }

    public Object pingFinancialPlan () {
        LogUtil.log(("PingService  pingFinancialPlan Started " ));
        return financialPlanService.pingFinancialPlan();
    }
}