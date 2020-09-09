package com.wealth.wealthusers.controller;

import com.wealth.wealthusers.common.ControllerUtil;
import com.wealth.wealthusers.common.LoadUtil;
import com.wealth.wealthusers.entity.WcWealthManager;
import com.wealth.wealthusers.service.WcWealthManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/wealthmanager")
public class WcWealthManagerController {

    @Autowired
    WcWealthManagerService service;

    @CrossOrigin
    @GetMapping
    private List<WcWealthManager> findAll() {
        LoadUtil.processLoad();
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private WcWealthManager findOne (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.find(id);
    }

    @CrossOrigin
    @PostMapping
    private ResponseEntity<?> create(@RequestBody WcWealthManager entity) {
        LoadUtil.processLoad();
        Object result = service.create(entity);
        return ControllerUtil.getResponseEntityForCreate(result);
    }

    @CrossOrigin
    @PutMapping
    private WcWealthManager update(@RequestBody WcWealthManager entity) {
        LoadUtil.processLoad();
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private WcWealthManager delete (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.delete(id);
    }
}
