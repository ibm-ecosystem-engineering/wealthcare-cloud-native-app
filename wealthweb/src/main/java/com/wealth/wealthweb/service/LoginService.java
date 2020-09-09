package com.wealth.wealthweb.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    public static final Logger logger = LoggerFactory.getLogger(LoginService.class);

    @Value("${prop.api.server.url.user}")
    private String url_user;

    @Autowired
    RestUtilService restUtilService;

    public Object processLogin(Object entity) {
        String url = url_user + "/user/public/login";
        return restUtilService.callPost(url, entity);
    }

}
