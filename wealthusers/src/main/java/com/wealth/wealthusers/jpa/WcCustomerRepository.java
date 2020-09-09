package com.wealth.wealthusers.jpa;

import com.wealth.wealthusers.entity.WcCustomer;
import com.wealth.wealthusers.entity.WcUsers;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WcCustomerRepository extends CrudRepository<WcCustomer, Integer> {

    public WcCustomer findOneByWcUserId(Integer wcUserId);

}

