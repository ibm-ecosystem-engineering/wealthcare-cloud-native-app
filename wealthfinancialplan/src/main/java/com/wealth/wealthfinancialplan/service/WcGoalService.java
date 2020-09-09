package com.wealth.wealthfinancialplan.service;

import com.wealth.wealthfinancialplan.common.ConversionUtil;
import com.wealth.wealthfinancialplan.common.DateUtil;
import com.wealth.wealthfinancialplan.common.LogUtil;
import com.wealth.wealthfinancialplan.common.NumberUtil;
import com.wealth.wealthfinancialplan.entity.WcGoal;
import com.wealth.wealthfinancialplan.entity.WcInvestment;
import com.wealth.wealthfinancialplan.jpa.WcGoalRepository;
import com.wealth.wealthfinancialplan.model.*;
import com.wealth.wealthfinancialplan.mq.MQSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WcGoalService {

    public static final Logger logger = LoggerFactory.getLogger(WcGoalService.class);

    @Autowired
    WcInvestmentService investmentService;

    @Autowired
    MQSender mQSender;

    @Autowired
    WcGoalRepository repository;

    @Autowired
    FinanceQuoteService financeQuoteService;

    public List<WcGoal> findAll() {
        List<WcGoal> list = new ArrayList();
        GoalInfo goalInfo;
        repository.findAll().forEach(listItem -> {
            list.add(listItem);
        });
        return list;
    }

    public List<Object> findInfoListByCustomerId(Integer wcCustomerId) {
        List<GoalInfo> list = new ArrayList();
        GoalTotalData goalTotalData2 = new GoalTotalData();

        repository.findByWcCustomerId(wcCustomerId).forEach(listItem -> {
            List<WcInvestment> investments = investmentService.findByWcGoalId(listItem.getId());

            list.add(createGoalInfo(listItem, investments, goalTotalData2));
        });

        List<GraphDataBar> globalListBar = createGraphDataBar(goalTotalData2);
        List<GraphDataLine> globalListLine = createGraphDataLine(goalTotalData2);

        List<Object> resultList = new ArrayList<>();
        resultList.add(list);
        resultList.add(globalListBar);
        resultList.add(globalListLine);
        LogUtil.log("WcGoalService findInfoListByCustomerId goalTotalData2 1--> "+ ConversionUtil.objectToJsonString(resultList));
        LogUtil.log("WcGoalService findInfoListByCustomerId goalTotalData2 2--> "+ ConversionUtil.objectToJsonString(list));
        LogUtil.log("WcGoalService findInfoListByCustomerId goalTotalData2 3--> "+ ConversionUtil.objectToJsonString(globalListBar));
        LogUtil.log("WcGoalService findInfoListByCustomerId goalTotalData2 4--> "+ ConversionUtil.objectToJsonString(globalListLine));

        return resultList;
    }

    public GoalInfo findInfo(Integer id) {
        WcGoal wcGoal = repository.findById(id).get();

        List<WcInvestment> investments = investmentService.findByWcGoalId(wcGoal.getId());

        System.out.println("findInfo investments.size--> "+ investments.size());

        GoalInfo goalInfo = createGoalInfo(wcGoal, investments, null);
        return goalInfo;
    }

    public Object create(WcGoal entity) {
        LogUtil.log("WcGoalService : create : " + entity.getGoalReference());

        //Set startDate
        entity.setStartDate(new Date());

        //Create Goal
        Object result = null;
        entity = repository.save(entity);
        LogUtil.log("WcGoalService : Goal created : " + entity.getId());

        //Send MQ message
        String msg = "A financial plan with the goal " + entity.getGoalReference() + " : " + entity.getGoalDesc() + " has been created for the customer : " + entity.getWcCustomerId();
        mQSender.sendMessage(entity.getWcCustomerId() + "" , msg);

        return entity;
    }

    public WcGoal update(WcGoal entity) {
        LogUtil.log("WcGoalService : update : " + entity.getId());

        repository.save(entity);
        entity = find(entity.getId());
        return entity;
    }

    public WcGoal find(Integer id) {
        return repository.findById(id).get();
    }

    public WcGoal delete(int id) {
        LogUtil.log("WcGoalService : delete : " + id);

        WcGoal entity = find(id);
        if(entity != null){
            investmentService.deleteByGoalId(id);
            repository.delete(entity);
        }
        return entity;
    }

    public GoalInfo createGoalInfo(WcGoal wcGoal, List<WcInvestment> investments, GoalTotalData goalTotalData2) {
        InvestmentInfo investmentInfo;
        List<InvestmentInfo> list = new ArrayList<>();

        GoalInfo goalInfo = new GoalInfo();
        goalInfo.setInvestments(list);

        goalInfo.setId(wcGoal.getId());
        goalInfo.setWcCustomerId(wcGoal.getWcCustomerId());
        goalInfo.setWcWealthManagerId(wcGoal.getWcWealthManagerId());
        goalInfo.setGoalReference(wcGoal.getGoalReference());
        goalInfo.setGoalDesc(wcGoal.getGoalDesc());

        goalInfo.setTargetAmount(String.valueOf((long)wcGoal.getTargetAmount()));
        goalInfo.setTargetDate(DateUtil.convertMMMYYY(wcGoal.getTargetDate()));

        double totalInvestmentAmount = 0;
        double totalCurrentValue = 0;

        GoalTotalData goalTotalData = new GoalTotalData();

        for (WcInvestment wcInvestment : investments) {
            investmentInfo = createInvestmentInfo(goalInfo, wcInvestment, goalTotalData, goalTotalData2);
            list.add(investmentInfo);

            totalInvestmentAmount += wcInvestment.getInvestmentAmount();
            totalCurrentValue +=  investmentInfo.getCurrentValueTotal();
        }

        populateGoalInfo(goalInfo, totalInvestmentAmount, totalCurrentValue, wcGoal.getTargetAmount(), wcGoal.getStartDate(), wcGoal.getTargetDate());

        goalInfo.setGraphDataBar(createGraphDataBar(goalTotalData));
        goalInfo.setGraphDataLine(createGraphDataLine(goalTotalData));

        return goalInfo;
    }

    public InvestmentInfo createInvestmentInfo(GoalInfo goalInfo, WcInvestment wcInvestment, GoalTotalData goalTotalData, GoalTotalData goalTotalData2) {
        InvestmentInfo investmentInfo = new InvestmentInfo();

        investmentInfo.setId(wcInvestment.getId());
        investmentInfo.setWcGoalId(goalInfo.getId());
        investmentInfo.setInvestmentDate(DateUtil.convertDDMMMYYY(wcInvestment.getInvestmentDate()));
        investmentInfo.setInvestmentAmount(String.valueOf((long)wcInvestment.getInvestmentAmount()));

        investmentInfo.setStockAmount((String.valueOf((long)wcInvestment.getStockAmount())));
        investmentInfo.setMutualFundAmount((String.valueOf((long)wcInvestment.getMutualFundAmount())));
        investmentInfo.setFixedDepositAmount((String.valueOf((long)wcInvestment.getFixedDepositAmount())));

        //Populate Quote current and total values
        financeQuoteService.populateCurrentQuote(wcInvestment, investmentInfo);

        goalTotalData.addValues(wcInvestment.getStockAmount(), wcInvestment.getMutualFundAmount(), wcInvestment.getFixedDepositAmount(),
                investmentInfo.getCurrentValueStockAmount(),  investmentInfo.getCurrentValueMutualFundAmount(), investmentInfo.getCurrentValueFixedDepositAmount());

        if (goalTotalData2 != null) {
            goalTotalData2.addValues(wcInvestment.getStockAmount(), wcInvestment.getMutualFundAmount(), wcInvestment.getFixedDepositAmount(),
                    investmentInfo.getCurrentValueStockAmount(),  investmentInfo.getCurrentValueMutualFundAmount(), investmentInfo.getCurrentValueFixedDepositAmount());
        }

        return investmentInfo;
    }

    public void populateGoalInfo(GoalInfo goalInfo, double totalInvestmentAmount, double totalCurrentValue, double targetAmount, Date startDate, Date targetDate) {

        int totalPercentageDifference = NumberUtil.percentage(targetAmount, totalCurrentValue);

        int totalYears = DateUtil.dateDiffInYears(targetDate, startDate);
        int completedYears = DateUtil.dateDiffInYears(new Date(), startDate);
        String achievementString = "( "+ totalPercentageDifference + " % goal reached in " + completedYears + "/" + totalYears + " years )";

        goalInfo.setCompletionPercentage(NumberUtil.createPercentageCompletionList(totalPercentageDifference));
        goalInfo.setGoalAchievementString(achievementString);
        goalInfo.setTotalInvestmentAmount(String.valueOf((long)totalInvestmentAmount));
        goalInfo.setInvestmentCurrentValue(String.valueOf((long)totalCurrentValue));
        //TODO: To be implemented
        goalInfo.setCurrency("INR");
    }

    public List<GraphDataBar> createGraphDataBar(GoalTotalData goalTotalData) {
        List<GraphDataBar> graphDataList = new ArrayList<>();

        GraphDataBar graphData = new GraphDataBar(goalTotalData.getInitialStock(), goalTotalData.getInitialMutual(),  goalTotalData.getInitialFd(),  "Investment Amount");
        graphDataList.add(graphData);

        graphData = new GraphDataBar(goalTotalData.getCurrStock(), goalTotalData.getCurrMutual(),  goalTotalData.getCurrFd(),  "Current Amount");
        graphDataList.add(graphData);

        return graphDataList;
    }

    public List<GraphDataLine> createGraphDataLine(GoalTotalData goalTotalData) {
        List<GraphDataLine> graphDataList = new ArrayList<>();

        GraphDataLine graphData = new GraphDataLine(goalTotalData.getInitialStock(), goalTotalData.getCurrStock(), "Stock");
        graphDataList.add(graphData);

        graphData = new GraphDataLine(goalTotalData.getInitialMutual(), goalTotalData.getCurrMutual(),   "Mutual Fund");
        graphDataList.add(graphData);

        graphData = new GraphDataLine(goalTotalData.getInitialFd(), goalTotalData.getCurrFd(),   "Fixed Deposit");
        graphDataList.add(graphData);

        return graphDataList;
    }
}
