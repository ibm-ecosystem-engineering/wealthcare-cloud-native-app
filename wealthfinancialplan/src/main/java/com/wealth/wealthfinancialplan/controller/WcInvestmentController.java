package com.wealth.wealthfinancialplan.controller;

import com.wealth.wealthfinancialplan.common.ControllerUtil;
import com.wealth.wealthfinancialplan.common.LoadUtil;
import com.wealth.wealthfinancialplan.entity.WcInvestment;
import com.wealth.wealthfinancialplan.service.WcInvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/investment")
public class WcInvestmentController {

    @Autowired
    WcInvestmentService service;

    @CrossOrigin
    @GetMapping
    private List<WcInvestment> findAll() {
        List<WcInvestment> list = service.findAll();
        LoadUtil.processLoad();
        return list;
    }

    @CrossOrigin
    @GetMapping("findByGoalId/{id}")
    @ResponseBody
    private List<WcInvestment> findByWcGoalId (@PathVariable("id") int id) {
        List<WcInvestment> list = service.findByWcGoalId(id);
        LoadUtil.processLoad();
        return list;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private WcInvestment findOne (@PathVariable("id") int id) {
        WcInvestment wcInvestment=  service.find(id);
        LoadUtil.processLoad();
        return wcInvestment;
    }

    @CrossOrigin
    @PostMapping
    private ResponseEntity<?> create(@RequestBody WcInvestment entity) {
        Object result = service.create(entity);
        ResponseEntity<?> responseEntity =  ControllerUtil.getResponseEntityForCreate(result);
        LoadUtil.processLoad();
        return responseEntity;
    }

    @CrossOrigin
    @PutMapping
    private WcInvestment update(@RequestBody WcInvestment entity) {
        WcInvestment wcInvestment=  service.update(entity);
        LoadUtil.processLoad();
        return wcInvestment;
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private WcInvestment delete (@PathVariable("id") int id) {
        WcInvestment wcInvestment=  service.delete(id);
        LoadUtil.processLoad();
        return wcInvestment;
    }

}
