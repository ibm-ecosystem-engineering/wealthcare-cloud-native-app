package com.wealth.wealthfinancialplan.jpa;

import com.wealth.wealthfinancialplan.entity.WcGoal;
import com.wealth.wealthfinancialplan.entity.WcInvestment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface WcGoalRepository extends CrudRepository<WcGoal, Integer> {

    List<WcGoal> findByWcCustomerId(int wcCustomerId);

}

