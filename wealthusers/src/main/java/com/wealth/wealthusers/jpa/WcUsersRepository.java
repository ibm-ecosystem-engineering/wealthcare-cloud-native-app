package com.wealth.wealthusers.jpa;

import com.wealth.wealthusers.entity.WcUsers;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface WcUsersRepository extends CrudRepository<WcUsers, Integer> {

    public WcUsers findOneByEmailId(String emailId);

    public WcUsers findOneByUserName(String userName);


}

