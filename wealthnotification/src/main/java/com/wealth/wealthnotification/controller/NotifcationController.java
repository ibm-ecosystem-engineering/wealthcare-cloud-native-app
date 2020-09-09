package com.wealth.wealthnotification.controller;

import com.wealth.wealthnotification.common.LogUtil;
import com.wealth.wealthnotification.mq.MqProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotifcationController {

    @Autowired
    MqProcessor service;

    @GetMapping("/stopMQ")
    private String pauseMQ () {
        LogUtil.log("NotifcationController pauseMQ ... ");
        return service.pauseJmsListener();
    }

    @GetMapping("/restartMQ")
    private String restartMQ () {
        LogUtil.log("LoadController restartMQ ... ");
        return service.restartJmsListener();
    }


}
