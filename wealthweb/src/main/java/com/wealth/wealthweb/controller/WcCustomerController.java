package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.service.WcCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user/api/customer")
public class WcCustomerController {

    @Autowired
    WcCustomerService service;

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
        Object result = service.create(entity);
        return result;
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
