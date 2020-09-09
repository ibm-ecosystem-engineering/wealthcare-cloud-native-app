package com.wealth.wealthnotification.controller;

import com.wealth.wealthnotification.common.LogUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/sample")
public class SampleController {

    @PostMapping
    @ResponseBody
    private String test(@RequestHeader String requestHeader, @RequestBody String entity) {

        LogUtil.log("Sample requestHeader: " + requestHeader);
        LogUtil.log("Sample entity: " + entity);

        return requestHeader + entity;
    }

}
