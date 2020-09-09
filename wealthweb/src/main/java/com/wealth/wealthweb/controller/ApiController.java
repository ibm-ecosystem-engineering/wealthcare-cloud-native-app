package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.common.LogUtil;
import com.wealth.wealthweb.model.ApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import java.net.InetAddress;

@Configuration
@CrossOrigin
@RestController
@RequestMapping({"/api"})

public class ApiController {

    @Value("${prop.api.server.url.user}")
    private String urlUser;

    @Value("${prop.api.server.url.financialplan}")
    private String urlFinancialplan;

    @GetMapping("/apiServiceURL")
    @ResponseBody
    private ApiResponse getApiServiceURL() {
        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setUrl1(urlUser);
        apiResponse.setUrl2(urlFinancialplan);
        apiResponse.setValue1(getHostName());

        LogUtil.log("ApiController apiServiceURL user ---> " + apiResponse.getUrl1());
        LogUtil.log("ApiController apiServiceURL user ---> " + apiResponse.getUrl1());
        LogUtil.log("ApiController apiServiceURL hostpath ---> " + apiResponse.getValue1());
        LogUtil.log("ApiController apiServiceURL hostpathDetails ---> " + apiResponse.getValue2());

        return apiResponse;
    }

    public static String getHostName() {
        InetAddress ip;
        String hostname = "";
        try {
            ip = InetAddress.getLocalHost();
            hostname = ip + "";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hostname;
    }

}
