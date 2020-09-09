package com.wealth.wealthusers.controller;

import com.wealth.wealthusers.common.ControllerUtil;
import com.wealth.wealthusers.common.LoadUtil;
import com.wealth.wealthusers.entity.WcUsers;
import com.wealth.wealthusers.service.WcUsersService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class WcUsersController {

    public static final Logger logger = LoggerFactory.getLogger(WcUsersController.class);

    @Autowired
    WcUsersService service;

    @CrossOrigin
    @GetMapping
    private List<WcUsers> findAll() {
        LoadUtil.processLoad();
        return service.findAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseBody
    private WcUsers findOne (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.find(id);
    }

    @PostMapping
    private ResponseEntity<?>  create(@RequestBody WcUsers entity) {
        LoadUtil.processLoad();
        Object createResult = service.create(entity);
        return ControllerUtil.getResponseEntityForCreate(createResult);
    }

    @CrossOrigin
    @PutMapping
    private WcUsers update(@RequestBody WcUsers entity) {
        LoadUtil.processLoad();
        return service.update(entity);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    private WcUsers delete (@PathVariable("id") int id) {
        LoadUtil.processLoad();
        return service.delete(id);
    }

    @CrossOrigin
    @GetMapping("/delay/{time}")
    private List<WcUsers> findAllWithDelay(@PathVariable("time") long time) {
        LoadUtil.processLoad();
        return service.findAllWithDelay(time);
    }


}
