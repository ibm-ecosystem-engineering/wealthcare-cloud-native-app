package com.wealth.wealthweb.service;

import com.wealth.wealthweb.common.LogUtil;
import com.wealth.wealthweb.util.HttpClientUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
@Service
public class UserService {

    @Value("${prop.api.server.url.user}")
    private String url_user;

    public Object pingUser() {
        LogUtil.log("UserService  pingUser Started ");

        String url = url_user + "/user/api/customer";

        LogUtil.log("UserService  pingUser Started : url " + url);

        Object result = callUser (url);

        LogUtil.log("UserService  getCommissionRate Completed : " + result);

        return result;
    }


    public Object callUser(String url) {
        LogUtil.log("UserService : callUser started");

        Object result = 0;
        try {
            LogUtil.log("UserService : callUser url  1: " + url);

            result = HttpClientUtil.doGet(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("UserService : callUser completed result : " + result);

        return result;
    }
}
