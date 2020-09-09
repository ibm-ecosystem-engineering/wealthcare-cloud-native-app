package com.wealth.wealthweb.service;

import com.wealth.wealthweb.model.GoalInfo;
import com.wealth.wealthweb.model.WcGoal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WcGoalService {

    public static final Logger logger = LoggerFactory.getLogger(WcGoalService.class);

    @Value("${prop.api.server.url.financialplan}")
    private String url_financialplan;

    @Autowired
    RestUtilService restUtilService;

    public List<WcGoal> findAll() {
        String url = url_financialplan + "/financialplan/api/goal";
        return (List<WcGoal>) restUtilService.callGetList(url, WcGoal.class);
    }

    public Object findInfoListByCustomerId(Integer wcCustomerId) {
        String url = url_financialplan + "/financialplan/api/goal/findInfoByCustomerId";
        return restUtilService.callGetList111(url, wcCustomerId, Object.class);
    }

    public GoalInfo findInfo(Integer id) {
        String url = url_financialplan + "/financialplan/api/goal/findInfo";
        return (GoalInfo) restUtilService.callGet(url, id, GoalInfo.class);
    }

    public Object create(GoalInfo entity) {
        String url = url_financialplan + "/financialplan/api/goal";
        return (Object) restUtilService.callPost(url, entity, GoalInfo.class);
    }

    public Object update(GoalInfo entity) {
        String url = url_financialplan + "/financialplan/api/goal";
        return restUtilService.callPost(url, entity, GoalInfo.class);
    }

    public WcGoal find(Integer id) {
        String url = url_financialplan + "/financialplan/api/goal";
        return (WcGoal) restUtilService.callGet(url, id, WcGoal.class);
    }

    public Object delete(int id) {
        String url = url_financialplan + "/financialplan/api/goal";
        return  restUtilService.callDelete(url, id);
    }

}
