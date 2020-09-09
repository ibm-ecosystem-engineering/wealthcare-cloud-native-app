package com.wealth.wealthweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class WcWealthManagerService {

    @Value("${prop.api.server.url.user}")
    private String url_user;

    @Autowired
    RestUtilService restUtilService;

    public Object findAll() {
        String url = url_user + "/user/api/wealthmanager";
        return restUtilService.callGet(url);
    }

    public Object create(Object entity) {
        String url = url_user + "/user/api/wealthmanager";
        return restUtilService.callPost(url, entity);
    }

    public Object update(Object entity) {
        String url = url_user + "/user/api/wealthmanager";
        return restUtilService.callPost(url, entity);
    }

    public Object find(Integer id) {
        String url = url_user + "/user/api/wealthmanager";
        return restUtilService.callGetWithId(url, id);
    }

    public Object delete(int id) {
        String url = url_user + "/user/api/wealthmanager";
        return  restUtilService.callDelete(url, id);
    }

    public Object findOneByWcUserId(int id) {
        String url = url_user + "/user/api/wealthmanager";
        return restUtilService.callGetWithId(url, id);
    }

}
