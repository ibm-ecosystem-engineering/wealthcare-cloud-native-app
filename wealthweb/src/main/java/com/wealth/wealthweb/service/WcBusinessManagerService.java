package com.wealth.wealthweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class WcBusinessManagerService {

    @Value("${prop.api.server.url.user}")
    private String url_user;

    @Autowired
    RestUtilService restUtilService;

    public Object findAll() {
        String url = url_user + "/user/api/businessmanager";
        return restUtilService.callGet(url);
    }

    public Object create(Object entity) {
        String url = url_user + "/user/api/businessmanager";
        return restUtilService.callPost(url, entity);
    }

    public Object update(Object entity) {
        String url = url_user + "/user/api/businessmanager";
        return restUtilService.callPost(url, entity);
    }

    public Object find(Integer id) {
        String url = url_user + "/user/api/businessmanager";
        return restUtilService.callGetWithId(url, id);
    }

    public Object delete(int id) {
        String url = url_user + "/user/api/businessmanager";
        return  restUtilService.callDelete(url, id);
    }
}
