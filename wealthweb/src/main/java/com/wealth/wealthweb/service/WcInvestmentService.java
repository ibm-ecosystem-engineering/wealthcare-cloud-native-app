package com.wealth.wealthweb.service;

import com.wealth.wealthweb.model.InvestmentInfo;
import com.wealth.wealthweb.model.WcInvestment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WcInvestmentService {

    @Value("${prop.api.server.url.financialplan}")
    private String url_financialplan;

    @Autowired
    RestUtilService restUtilService;

    public List<WcInvestment> findAll() {
        String url = url_financialplan + "/financialplan/api/investment";
        return (List<WcInvestment>) restUtilService.callGetList(url, WcInvestment.class);
    }

    public WcInvestment create(WcInvestment entity) {
        String url = url_financialplan + "/financialplan/api/investment";
        return (WcInvestment) restUtilService.callPost(url, entity, WcInvestment.class);
    }

    public WcInvestment update(WcInvestment entity) {
        String url = url_financialplan + "/financialplan/api/investment";
        return (WcInvestment) restUtilService.callPost(url, entity, WcInvestment.class);
    }

    public WcInvestment find(Integer id) {
        String url = url_financialplan + "/financialplan/api/investment";
        return (WcInvestment) restUtilService.callGet(url, id, WcInvestment.class);
    }

    public List<WcInvestment> findByWcGoalId(Integer wcGoalId) {
        String url = url_financialplan + "/financialplan/api/investment/findByGoalId";
        return (List<WcInvestment>) restUtilService.callGetList(url, wcGoalId, WcInvestment.class);
    }

    public Object delete(int id) {
        String url = url_financialplan + "/financialplan/api/investment";
        return  restUtilService.callDelete(url, id);
    }
}
