package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.common.LogUtil;
import com.wealth.wealthweb.service.LoadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
public class LoadController {

    @Autowired
    LoadService service;

    @GetMapping("/startMemory/{sizeInMB}")
    @ResponseBody
    private Boolean startMemory (@PathVariable("sizeInMB") int sizeInMB) {
        LogUtil.log("LoadController startMemory ... " + sizeInMB);
        service.startMemory(sizeInMB);
        return true;
    }

    @GetMapping("/stopMemory")
    private Boolean stopMemory () {
        LogUtil.log("LoadController stopMemory ... ");
        service.stopMemory();
        return true;
    }

    @GetMapping("/consumeMemory/{sizeInMB}")
    @ResponseBody
    private Boolean consumeMemory (@PathVariable("sizeInMB") int sizeInMB) {
        LogUtil.log("LoadController consumeMemory ... " + sizeInMB);
        service.consumeMemory(sizeInMB);
        return true;
    }

    @GetMapping("/memorySize")
    @ResponseBody
    private Integer memorySize () {
        LogUtil.log("LoadController memorySize ... " );
        return service.getMemorySize();
    }

    @GetMapping("clearMemory")
    @ResponseBody
    private Integer clearMemory () {
        LogUtil.log("LoadController clearMemory ... " );
        return service.clearMemory();
    }

    @GetMapping("startSleep/{startMilliSeconds}/{incrementMilliSeconds}/{incrementRequestCount}")
    @ResponseBody
    private Boolean startSleep (@PathVariable("startMilliSeconds") long startMilliSeconds, @PathVariable("incrementMilliSeconds") long incrementMilliSeconds, @PathVariable("incrementRequestCount") long requestCount) {
        LogUtil.log("LoadController startSleep startMilliSeconds ... " + startMilliSeconds);
        LogUtil.log("LoadController startSleep incrementMilliSeconds ... " + incrementMilliSeconds);
        LogUtil.log("LoadController startSleep incrementRequestCount ... " + requestCount);
        service.startSleep(startMilliSeconds, incrementMilliSeconds, requestCount);
        return true;
    }

    @GetMapping("stopSleep")
    @ResponseBody
    private Boolean stopSleep () {
        LogUtil.log("LoadController stopSleep ... " );
        service.stopSleep();
        return true;
    }

    @GetMapping("/totalRequestCount")
    @ResponseBody
    private Long totalRequestCount () {
        LogUtil.log("LoadController totalRequestCoun ... " );
        return service.getTotalRequestCount();
    }

    @GetMapping("/sleepMilliSeconds")
    @ResponseBody
    private Long sleepMilliSeconds () {
        LogUtil.log("LoadController sleepMilliSeconds ... " );
        return service.getSleepMilliSeconds();
    }
}

