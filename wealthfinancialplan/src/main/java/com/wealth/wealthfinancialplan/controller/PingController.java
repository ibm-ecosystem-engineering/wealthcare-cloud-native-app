package com.wealth.wealthfinancialplan.controller;

import com.wealth.wealthfinancialplan.common.LoadUtil;
import com.wealth.wealthfinancialplan.common.LogUtil;
import com.wealth.wealthfinancialplan.service.LoadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @Autowired
    LoadService service;

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

