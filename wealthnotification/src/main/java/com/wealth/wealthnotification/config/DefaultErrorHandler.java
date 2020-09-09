package com.wealth.wealthnotification.config;

import com.wealth.wealthnotification.common.LogUtil;
import org.springframework.util.ErrorHandler;

public class DefaultErrorHandler implements ErrorHandler {

    @Override
    public void handleError(Throwable t) {
        LogUtil.log("DefaultErrorHandler : Error Occurred : " + t.getMessage());
        LogUtil.log("DefaultErrorHandler : Error Occurred : " + t.getCause().getMessage());
    }
}