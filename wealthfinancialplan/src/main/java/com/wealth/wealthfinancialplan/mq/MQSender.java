package com.wealth.wealthfinancialplan.mq;

import com.wealth.wealthfinancialplan.common.ConversionUtil;
import com.wealth.wealthfinancialplan.common.LogUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Configuration
@Service
public class MQSender {

    @Value("${ibm.mq.queueName.financialPlan}")
    private String queueName;

    @Resource
    private JmsTemplate jmsTemplate;

    //Sends the NewAccount message in JSON format in REQ queue.
    public void sendMessage(String emailId, String message) {
        LogUtil.log("MQSender : sendMessage : Message to send -> --->>>>: "+ emailId + "  : " + message);

        MqMessage mqMessage = new MqMessage(emailId, message);
        String jsonString = ConversionUtil.objectToJsonString(mqMessage);

        LogUtil.log("MQSender : sendMessage : mqMessage converted to jsonString --->>>>: "+ jsonString);

        this.jmsTemplate.convertAndSend(queueName, jsonString);

        LogUtil.log("MQSender : sendMessage : completed ");
    }

}