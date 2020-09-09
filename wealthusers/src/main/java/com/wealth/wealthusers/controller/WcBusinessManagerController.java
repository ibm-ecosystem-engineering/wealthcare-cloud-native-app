package com.wealth.wealthusers.controller;

import com.wealth.wealthusers.common.LoadUtil;
import com.wealth.wealthusers.entity.WcBusinessManager;
import com.wealth.wealthusers.service.WcBusinessManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/businessmanager")
public class WcBusinessManagerController {

    @Autowired
    WcBusinessManagerService service;

    @CrossOrigin
    @GetMapping
    private List<WcBusinessManager> findAll() {
        LoadUtil.processLoad();
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private WcBusinessManager findOne (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.find(id);
    }

    @CrossOrigin
    @PostMapping
    private WcBusinessManager create(@RequestBody WcBusinessManager entity) {
        LoadUtil.processLoad();
        return service.create(entity);
    }

    @CrossOrigin
    @PutMapping
    private WcBusinessManager update(@RequestBody WcBusinessManager entity) {
        LoadUtil.processLoad();
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private WcBusinessManager delete (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.delete(id);
    }
}
