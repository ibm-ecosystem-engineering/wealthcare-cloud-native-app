package com.wealth.wealthusers.jpa;

import com.wealth.wealthusers.entity.WcBusinessManager;
import com.wealth.wealthusers.entity.WcWealthManager;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WcBusinessManagerRepository extends CrudRepository<WcBusinessManager, Integer> {

    public WcBusinessManager findOneByWcUserId(Integer wcUserId);

}

