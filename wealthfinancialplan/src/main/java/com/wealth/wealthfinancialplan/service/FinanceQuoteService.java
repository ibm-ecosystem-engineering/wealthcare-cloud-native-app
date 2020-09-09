package com.wealth.wealthfinancialplan.service;

import com.wealth.wealthfinancialplan.common.DateUtil;
import com.wealth.wealthfinancialplan.common.LogUtil;
import com.wealth.wealthfinancialplan.common.NumberUtil;
import com.wealth.wealthfinancialplan.entity.WcInvestment;
import com.wealth.wealthfinancialplan.model.InvestmentInfo;
import com.wealth.wealthfinancialplan.model.QuoteCacheInfo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class FinanceQuoteService {

    @Value("#{T(Integer).parseInt('${stockQuoteRefreshRateInSeconds}')}")
    private int stockQuoteRefreshRateInSeconds;


    @Value("#{T(Integer).parseInt('${mutualQuoteRefreshRateInSeconds}')}")
    private int mutualQuoteRefreshRateInSeconds;

    private Double priceFactor;

    Map<Integer, QuoteCacheInfo> stockQuoteCache = new HashMap();
    Map<Integer, QuoteCacheInfo> mutualQuoteCache = new HashMap();

    public double processAndReturnRandomQuote(int investmentId, double amount, long diffDays, int increaseDescreaseFactor, int quoteRefreshRateInSeconds, Map<Integer, QuoteCacheInfo> quoteCache) {
        LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote : started");

        QuoteCacheInfo quoteCacheInfo = quoteCache.get(investmentId);
        if (quoteCacheInfo == null) {
            LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote 1: ");

            quoteCacheInfo = new QuoteCacheInfo();
            quoteCacheInfo.setCreatedTimeInMilliSeconds(-10000);
            quoteCache.put(investmentId, quoteCacheInfo);
            LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote 2: ");

        }
        LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote 3: ");

        double resultAmount = 0;
        long currentTimeInMilliSeconds = System.currentTimeMillis();
        boolean timeLimitExceeded = DateUtil.isLimitExceeded(currentTimeInMilliSeconds, quoteCacheInfo.getCreatedTimeInMilliSeconds(), quoteRefreshRateInSeconds);
        LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote 4: ");

        if (timeLimitExceeded) {
            resultAmount = randomIncreaseOrDecrease(amount, diffDays, increaseDescreaseFactor);
            quoteCacheInfo.setCreatedTimeInMilliSeconds(currentTimeInMilliSeconds);
            quoteCacheInfo.setQuoteValue(resultAmount);
            LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote 5: ");

        } else {
            resultAmount = quoteCacheInfo.getQuoteValue();
            LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote 6: ");

        }
        LogUtil.log("FinanceQuoteService : processAndReturnRandomQuote resultAmount: " + resultAmount);

        return resultAmount;
    }

    public double randomIncreaseOrDecrease(double amount, long diffDays, int increaseRandomCheck) {
        LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease : started");
        LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease : amount : " + amount);
        LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease : diffDays : " + diffDays);
        LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease : increaseRandomCheck : " + increaseRandomCheck);

        double resultAmount = 0;
        if (diffDays <= 1) {
            resultAmount = amount;
        } else {
            int randomValue = random(100);
            boolean increase = randomValue > increaseRandomCheck;
            if (increase) {
                int maxRandomValue = (int) (diffDays / 365) + 1 ;
                maxRandomValue = maxRandomValue * 100;
                randomValue = random( (int) maxRandomValue);
                resultAmount = amount + (amount * ((double)randomValue/100.0));

                LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease increase: maxRandomValue : " + maxRandomValue);
                LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease increase: randomValue : " + randomValue);

            } else {
                randomValue = random(100);
                resultAmount = amount - (amount * ((double)randomValue/100.0));
                LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease decrease: randomValue : " + randomValue);
            }
        }
        LogUtil.log("FinanceQuoteService : randomIncreaseOrDecrease : resultAmount : " + resultAmount);
        return resultAmount;
    }

    public int random(int range) {
        Random rand = new Random();
        int value = rand.nextInt(range);
        return value;
    }

    public double getCurrentFD(double amount, long diffDays) {
        LogUtil.log("FinanceQuoteService : getCurrentFD : started");
        LogUtil.log("FinanceQuoteService : getCurrentFD : diffDays : " + diffDays);

        if (diffDays <= 0) {
            diffDays = 1;
        }
        double increasePercentage = NumberUtil.percentage(365, 0.12, diffDays);
        double result = amount + (amount * increasePercentage);

        LogUtil.log("FinanceQuoteService : getCurrentFD : increasePercentage : " + increasePercentage);
        LogUtil.log("FinanceQuoteService : getCurrentFD : amount : " + amount);
        LogUtil.log("FinanceQuoteService : getCurrentFD : result : " + result);

        return result;
    }

    public void populateCurrentQuote(WcInvestment wcInvestment, InvestmentInfo investmentInfo) {
        LogUtil.log("FinanceQuoteService : populateCurrentQuote : started");

        int investmentId = wcInvestment.getId();
        double amount = wcInvestment.getStockAmount();
        long diffDays = DateUtil.dateDiffInDays(new Date(), wcInvestment.getInvestmentDate());

        LogUtil.log("FinanceQuoteService : populateCurrentQuote : investmentId : " + investmentId);
        LogUtil.log("FinanceQuoteService : populateCurrentQuote : diffDays : " + diffDays);
        LogUtil.log("FinanceQuoteService : populateCurrentQuote : amount : " + amount);

        double currStockAmount = processAndReturnRandomQuote(investmentId, wcInvestment.getStockAmount(), diffDays, 15,  stockQuoteRefreshRateInSeconds, stockQuoteCache);
        double currMutualFundAmount = processAndReturnRandomQuote(investmentId, wcInvestment.getMutualFundAmount(), diffDays, 5,  mutualQuoteRefreshRateInSeconds, mutualQuoteCache);
        double currFdAmount = getCurrentFD(wcInvestment.getFixedDepositAmount(), diffDays);

        double currTotalAmount = currStockAmount + currMutualFundAmount + currFdAmount;
        int totalPercentageDifference = NumberUtil.percentageIncrease(wcInvestment.getInvestmentAmount(), currTotalAmount);

        String comments;
        String upDown;
        if (totalPercentageDifference > 0) {
            comments = "( " + totalPercentageDifference + " % up )";
            upDown = "Up";
        } else if (totalPercentageDifference == 0) {
            comments = "";
            upDown = "Up";
        } else {
            comments = "( " + (totalPercentageDifference * -1) + " % down )";
            upDown = "Down";
        }

        investmentInfo.setCurrentValueTotalComments(comments);
        investmentInfo.setCurrentValueTotalUpDown(upDown);

        investmentInfo.setCurrentValueStockAmount(currStockAmount);
        investmentInfo.setCurrentValueMutualFundAmount(currMutualFundAmount);
        investmentInfo.setCurrentValueFixedDepositAmount(currFdAmount);
        investmentInfo.setCurrentValueTotal(currTotalAmount);

        investmentInfo.setCurrentValueStockAmountString((String.valueOf((long) currStockAmount)));
        investmentInfo.setCurrentValueMutualFundAmountString((String.valueOf((long) currMutualFundAmount)));
        investmentInfo.setCurrentValueFixedDepositAmountString((String.valueOf((long) currFdAmount)));
        investmentInfo.setCurrentValueTotalString((String.valueOf((long) currTotalAmount)));



        if (currStockAmount >= wcInvestment.getStockAmount()) {
            investmentInfo.setCurrentValueStockAmountUpDown("Up");
        } else {
            investmentInfo.setCurrentValueStockAmountUpDown("Down");
        }
        if (currMutualFundAmount >= wcInvestment.getMutualFundAmount()) {
            investmentInfo.setCurrentValueMutualFundAmountUpDown("Up");
        } else {
            investmentInfo.setCurrentValueMutualFundAmountUpDown("Down");
        }
        if (currFdAmount >= wcInvestment.getFixedDepositAmount()) {
            investmentInfo.setCurrentValueFixedDepositAmountUpDown("Up");
        } else {
            investmentInfo.setCurrentValueFixedDepositAmountUpDown("Down");
        }

        LogUtil.log("FinanceQuoteService : populateCurrentQuote : completed");
    }


}
