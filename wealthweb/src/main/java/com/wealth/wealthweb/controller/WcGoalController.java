package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.common.ControllerUtil;
import com.wealth.wealthweb.model.GoalInfo;
import com.wealth.wealthweb.model.WcGoal;
import com.wealth.wealthweb.service.WcGoalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/financialplan/api/goal")
public class WcGoalController {

    public static final Logger logger = LoggerFactory.getLogger(WcGoalController.class);

    @Autowired
    WcGoalService service;

    @CrossOrigin
    @GetMapping
    private Object findAll() {
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("findInfoByCustomerId/{id}")
    @ResponseBody
    private Object findInfoListByCustomerId (@PathVariable("id") int id) {
        return service.findInfoListByCustomerId(id);
    }

    @CrossOrigin
    @GetMapping("findInfo/{id}")
    @ResponseBody
    private Object findInfo (@PathVariable("id") int id) {
        return service.findInfo(id);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private Object findOne (@PathVariable("id") int id) {
        return service.find(id);
    }

    @PostMapping
    private Object  create(@RequestBody GoalInfo entity) {
        Object result = service.create(entity);
        return result;
    }

    @CrossOrigin
    @PutMapping
    private Object update(@RequestBody GoalInfo entity) {
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private Object delete (@PathVariable("id") int id) {
        return service.delete(id);
    }
}
