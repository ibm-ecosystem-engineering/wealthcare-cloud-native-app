package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.model.WcInvestment;
import com.wealth.wealthweb.service.WcInvestmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/financialplan/api/investment")
public class WcInvestmentController {

    @Autowired
    WcInvestmentService service;

    @CrossOrigin
    @GetMapping
    private Object findAll() {
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("findByGoalId/{id}")
    @ResponseBody
    private Object findByWcGoalId (@PathVariable("id") int id) {
        return service.findByWcGoalId(id);
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private Object findOne (@PathVariable("id") int id) {
        return service.find(id);
    }

    @CrossOrigin
    @PostMapping
    private Object create(@RequestBody Object entity) {
        Object result = service.create((WcInvestment)entity);
        return result;
    }

    @CrossOrigin
    @PutMapping
    private Object update(@RequestBody Object entity) {
        return service.update((WcInvestment)entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private Object delete (@PathVariable("id") int id) {
        return service.delete(id);
    }
}
