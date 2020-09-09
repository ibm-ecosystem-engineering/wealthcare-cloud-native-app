package com.wealth.wealthfinancialplan.jpa;

import com.wealth.wealthfinancialplan.entity.WcInvestment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface WcInvestmentRepository extends CrudRepository<WcInvestment, Integer> {

    List<WcInvestment> findByWcGoalId(int wcGoalId);

}

