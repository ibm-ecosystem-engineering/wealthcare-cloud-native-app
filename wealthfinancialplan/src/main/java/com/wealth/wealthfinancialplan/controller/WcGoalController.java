package com.wealth.wealthfinancialplan.controller;

import com.wealth.wealthfinancialplan.common.ControllerUtil;
import com.wealth.wealthfinancialplan.common.LoadUtil;
import com.wealth.wealthfinancialplan.entity.WcGoal;
import com.wealth.wealthfinancialplan.model.GoalInfo;
import com.wealth.wealthfinancialplan.service.WcGoalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/goal")
public class WcGoalController {

    public static final Logger logger = LoggerFactory.getLogger(WcGoalController.class);

    @Autowired
    WcGoalService service;

    @CrossOrigin
    @GetMapping
    private List<WcGoal> findAll() {
        List<WcGoal> list = service.findAll();
        LoadUtil.processLoad();
        return list;
    }

    @CrossOrigin
    @GetMapping("findInfoByCustomerId/{id}")
    @ResponseBody
    private List<Object> findInfoListByCustomerId (@PathVariable("id") int id) {
        List<Object> list = service.findInfoListByCustomerId(id);
        LoadUtil.processLoad();
        return list;
    }

    @CrossOrigin
    @GetMapping("findInfo/{id}")
    @ResponseBody
    private GoalInfo findInfo (@PathVariable("id") int id) {
        GoalInfo goalInfo = service.findInfo(id);
        LoadUtil.processLoad();
        return goalInfo;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private WcGoal findOne (@PathVariable("id") int id) {
        WcGoal wcGoal = service.find(id);
        LoadUtil.processLoad();
        return wcGoal;
    }

    @PostMapping
    private ResponseEntity<?>  create(@RequestBody WcGoal entity) {
        Object createResult = service.create(entity);
        ResponseEntity<?> result = ControllerUtil.getResponseEntityForCreate(createResult);
//        LoadUtil.processLoad();
        return result;
    }

    @CrossOrigin
    @PutMapping
    private WcGoal update(@RequestBody WcGoal entity) {
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private WcGoal delete (@PathVariable("id") int id) {
        return service.delete(id);
    }
}
