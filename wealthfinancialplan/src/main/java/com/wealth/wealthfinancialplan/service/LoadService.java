package com.wealth.wealthfinancialplan.service;

import com.wealth.wealthfinancialplan.common.LoadUtil;
import com.wealth.wealthfinancialplan.common.LogUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Configuration

@Service
public class LoadService {

    public static final Logger logger = LoggerFactory.getLogger(LoadService.class);

    public void startMemory(int sizeInMB) {
        LogUtil.log("LoadService : startMemory");
        LoadUtil.startMemory(sizeInMB);
    }
    public void stopMemory() {
        LogUtil.log("LoadService : stopMemory");
        LoadUtil.stopMemory();
    }
    public void consumeMemory(int sizeInMB) {
        LogUtil.log("LoadService : consumeMemory");
        LoadUtil.consumeMemory(sizeInMB);
    }

    public int getMemorySize() {
        LogUtil.log("LoadService : getMemorySize ");
        return LoadUtil.getMemorySize();
    }
    public int clearMemory() {
        LogUtil.log("LoadService : clearMemory ");
        return LoadUtil.clearMemory();
    }

    public static void startSleep(long startMilliSeconds, long incrementMilliSeconds, long requestCount) {
        LogUtil.log("LoadService : startSleep : " + startMilliSeconds + " : " + incrementMilliSeconds + " : " + requestCount);
        LoadUtil.startSleep(startMilliSeconds, incrementMilliSeconds, requestCount);
    }

    public static void stopSleep() {
        LogUtil.log("LoadService : stopSleep ");
        LoadUtil.stopSleep();
    }

    public long getTotalRequestCount() {
        LogUtil.log("LoadService : getTotalRequestCount ");
        return LoadUtil.getTotalRequestCount();
    }

    public long getSleepMilliSeconds() {
        LogUtil.log("LoadService : getSleepMilliSeconds ");
        return LoadUtil.getSleepMilliSeconds();
    }

}
