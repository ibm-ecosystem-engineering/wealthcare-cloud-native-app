package com.wealth.wealthusers.controller;

import com.wealth.wealthusers.common.ControllerUtil;
import com.wealth.wealthusers.common.LoadUtil;
import com.wealth.wealthusers.entity.WcCustomer;
import com.wealth.wealthusers.service.WcCustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/customer")
public class WcCustomerController {

    @Autowired
    WcCustomerService service;

    @CrossOrigin
    @GetMapping
    private List<WcCustomer> findAll() {
        LoadUtil.processLoad();
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private WcCustomer findOne (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.find(id);
    }

    @CrossOrigin
    @PostMapping
    private ResponseEntity<?> create(@RequestBody WcCustomer entity) {
        LoadUtil.processLoad();
        Object result = service.create(entity);
        return ControllerUtil.getResponseEntityForCreate(result);
    }

    @CrossOrigin
    @PutMapping
    private WcCustomer update(@RequestBody WcCustomer entity) {
        LoadUtil.processLoad();
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private WcCustomer delete (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.delete(id);
    }

}
