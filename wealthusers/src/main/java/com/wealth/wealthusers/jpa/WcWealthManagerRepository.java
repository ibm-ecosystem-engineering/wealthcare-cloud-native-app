package com.wealth.wealthusers.jpa;

import com.wealth.wealthusers.entity.WcCustomer;
import com.wealth.wealthusers.entity.WcWealthManager;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WcWealthManagerRepository extends CrudRepository<WcWealthManager, Integer> {

    public WcWealthManager findOneByWcUserId(Integer wcUserId);


}

