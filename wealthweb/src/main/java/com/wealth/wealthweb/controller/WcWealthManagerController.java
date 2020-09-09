package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.service.WcWealthManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user/api/wealthmanager")
public class WcWealthManagerController {

    @Autowired
    WcWealthManagerService service;

    @CrossOrigin
    @GetMapping
    private Object findAll() {
        return service.findAll();
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
        return service.create(entity);
    }

    @CrossOrigin
    @PutMapping
    private Object update(@RequestBody Object entity) {
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private Object delete (@PathVariable("id") int id) {
        return service.delete(id);
    }
}
