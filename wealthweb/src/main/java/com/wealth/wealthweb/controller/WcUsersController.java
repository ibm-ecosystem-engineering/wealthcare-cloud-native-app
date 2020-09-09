package com.wealth.wealthweb.controller;

import com.wealth.wealthweb.common.ControllerUtil;
import com.wealth.wealthweb.service.WcUsersService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user/api/users")
public class WcUsersController {

    public static final Logger logger = LoggerFactory.getLogger(WcUsersController.class);

    @Autowired
    WcUsersService service;

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

    @PostMapping
    private ResponseEntity<?>  create(@RequestBody Object entity) {
        Object createResult = service.create(entity);
        return ControllerUtil.getResponseEntityForCreate(createResult);
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

    @CrossOrigin
    @GetMapping("/delay/{time}")
    private Object findAllWithDelay(@PathVariable("time") long time) {
        return service.findAllWithDelay(time);
    }


}
