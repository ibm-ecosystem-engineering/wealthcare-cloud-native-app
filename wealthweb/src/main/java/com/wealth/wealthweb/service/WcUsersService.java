package com.wealth.wealthweb.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class WcUsersService {

    public static final Logger logger = LoggerFactory.getLogger(WcUsersService.class);

    @Value("${prop.api.server.url.user}")
    private String url_user;

    @Autowired
    RestUtilService restUtilService;

    public Object findAll() {
        String url = url_user + "/user/api/users";
        return restUtilService.callGet(url);
    }

    public Object findAllWithDelay(Long id) {
        String url = url_user + "/user/api/users/delay";
        return restUtilService.callGetWithId(url, id);
    }


    public Object create(Object entity) {
        String url = url_user + "/user/api/users";
        return restUtilService.callPost(url, entity);
    }

    public Object update(Object entity) {
        String url = url_user + "/user/api/users";
        return restUtilService.callPost(url, entity);
    }

    public Object find(Integer id) {
        String url = url_user + "/user/api/users";
        return restUtilService.callGetWithId(url, id);
    }

    public Object delete(int id) {
        String url = url_user + "/user/api/users";
        return  restUtilService.callDelete(url, id);
    }

}
