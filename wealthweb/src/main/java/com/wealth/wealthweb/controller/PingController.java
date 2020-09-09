package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.common.LoadUtil;
import com.wealth.wealthweb.common.LogUtil;
import com.wealth.wealthweb.service.LoadService;
import com.wealth.wealthweb.service.PingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@Configuration
@CrossOrigin
@RestController
public class PingController {

    @Autowired
    PingService pingService;

    @Autowired
    LoadService service;

    @CrossOrigin
    @GetMapping("pingUser")
    @ResponseBody
    private Object pingUser () {
        LogUtil.log(("PingController  pingUser Started "));
        return pingService.pingUser();
    }

    @CrossOrigin
    @GetMapping("pingFinancialPlan")
    @ResponseBody
    private Object pingFinancialPlan () {
        LogUtil.log(("PingController  pingFinancialPlan Started "));
        return pingService.pingFinancialPlan();
    }

    @GetMapping("/ping")
    private String ping () {
        LogUtil.log("LoadController ping ... ");
        return "true";
    }

    @GetMapping("/pingForMemoryAndSleep")
    private String pingForMemoryAndSleep () {
        LogUtil.log("LoadController pingForMemoryAndSleep ... ");
        LoadUtil.processLoad();
        return "true";
    }
}