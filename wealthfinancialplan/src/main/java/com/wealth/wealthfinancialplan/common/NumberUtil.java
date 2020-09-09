package com.wealth.wealthfinancialplan.common;

import com.wordnik.swagger.models.auth.In;

import java.util.ArrayList;
import java.util.List;

public class NumberUtil {

    public static int  percentageIncrease(double initialValue, double currentValue) {
        int result = 0;

        double difference = currentValue - initialValue;

        int value = (int) (divide(difference, initialValue) * 100);
        return value;
    }

    public static int  percentage(double value1, double value2) {
        int result = 0;

        int value = (int) (divide(value2, value1) * 100);
        return value;
    }

    public static double  percentage(double value1, double value2, double value3) {
        double value = (divide(value2, value1) * value3);
        return value;
    }

    public static double divide(double n1, double n2) {
        double result = 0;
        try {
            result = n1 / n2;
        } catch (Exception e) {
            e.printStackTrace();;
        }
        return result;
    }

    public static double getCurrentFD(double amount, long diffDays) {
        LogUtil.log("FinanceQuoteService : getCurrentFD : started");
        LogUtil.log("FinanceQuoteService : getCurrentFD : diffDays : " + diffDays);

        if (diffDays <= 0) {
            diffDays = 1;
        }
        double increasePercentage = NumberUtil.percentage(365.0, 0.12, diffDays);
        double result = amount + (amount * increasePercentage);

        LogUtil.log("FinanceQuoteService : getCurrentFD : increasePercentage : " + increasePercentage);
        LogUtil.log("FinanceQuoteService : getCurrentFD : amount : " + amount);
        LogUtil.log("FinanceQuoteService : getCurrentFD : result : " + result);

        return result;
    }

    public static List<Integer> createPercentageCompletionList(int completedPercentage) {
        List<Integer> list = new ArrayList<>();
        list.add(completedPercentage);
        list.add(100-completedPercentage);
        return list;
    }


    public static void main(String[] args) {
//        System.out.println(percentageIncrease(200, 160));
//        System.out.println(percentageIncrease(200, 60));
//        System.out.println(percentageIncrease(20,160));
//        System.out.println(percentageIncrease(0,160));
//        System.out.println(percentageIncrease(100,160));
//        System.out.println(percentage(300,12, 600));
//        System.out.println(percentage(300,12, 1200));
//        System.out.println(percentage(12,12, 100));

        System.out.println(getCurrentFD(150000 ,1588));
        System.out.println(getCurrentFD(100000 ,1588));
        System.out.println(getCurrentFD(1500 ,1527));



    }
}
