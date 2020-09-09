package com.wealth.wealthnotification.mq;


import com.wealth.wealthnotification.common.LogUtil;

public class MqUtil {

    public static void sendFinancialPlanCreatedMsg(int customerName, String emailId, double amount) {
        LogUtil.log("Financial Plan created for the user " + customerName  + " : "  + emailId + " for the amount " + amount);
    }

}
