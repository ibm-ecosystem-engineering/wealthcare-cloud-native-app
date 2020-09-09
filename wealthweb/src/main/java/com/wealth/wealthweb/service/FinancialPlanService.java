package com.wealth.wealthweb.service;

import com.wealth.wealthweb.common.LogUtil;
import com.wealth.wealthweb.util.HttpClientUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration

@Service
public class FinancialPlanService {

    @Value("${prop.api.server.url.financialplan}")
    private String url_financialplan;

    public Object pingFinancialPlan() {
        LogUtil.log("FinancialPlanService  pingFinancialPlan Started ");

        String url = url_financialplan + "/financialplan/api/goal";

        LogUtil.log("FinancialPlanService  pingFinancialPlan Started : url " + url);

        Object result = callFinancialPlan (url);

        LogUtil.log("FinancialPlanService  pingFinancialPlan Completed : " + result);

        return result;
    }


    public Object callFinancialPlan(String url) {
        LogUtil.log("FinancialPlanService : callFinancialPlan started");

        Object result = 0;
        try {
            LogUtil.log("FinancialPlanService : callFinancialPlan url  1: " + url);

            result = HttpClientUtil.doGet(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("FinancialPlanService : callFinancialPlan completed result : " + result);

        return result;
    }
}