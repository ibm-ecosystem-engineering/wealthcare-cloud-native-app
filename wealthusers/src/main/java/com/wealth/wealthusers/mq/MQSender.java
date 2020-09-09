package com.wealth.wealthusers.mq;

import com.wealth.wealthusers.common.ConversionUtil;
import com.wealth.wealthusers.common.LogUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Configuration
@Service
public class MQSender {

    @Value("${ibm.mq.queueName.customer}")
    private String queueNameCustomer;

    @Value("${ibm.mq.queueName.wealthManager}")
    private String queueNameWealthManager;

    @Resource
    private JmsTemplate jmsTemplate;

    //Sends the  message in JSON format in queue.
    public void sendMessageCustomer(String emailId, String message) {
        LogUtil.log("MQSender : sendMessageCustomer : Message to send -> --->>>>: "+ emailId + "  : " + message);

        MqMessage mqMessage = new MqMessage(emailId, message);
        String jsonString = ConversionUtil.objectToJsonString(mqMessage);

        LogUtil.log("MQSender : sendMessageCustomer : mqMessage converted to jsonString --->>>>: "+ jsonString);

        this.jmsTemplate.convertAndSend(queueNameCustomer, jsonString);

        LogUtil.log("MQSender : sendMessageCustomer : completed ");
    }

    //Sends the  message in JSON format in queue.
    public void sendMessageWealthManager(String emailId, String message) {
        LogUtil.log("MQSender : sendMessageWealthManager : Message to send -> --->>>>: "+ emailId + "  : " + message);

        MqMessage mqMessage = new MqMessage(emailId, message);
        String jsonString = ConversionUtil.objectToJsonString(mqMessage);

        LogUtil.log("MQSender : sendMessageWealthManager : mqMessage converted to jsonString --->>>>: "+ jsonString);

        this.jmsTemplate.convertAndSend(queueNameWealthManager, jsonString);

        LogUtil.log("MQSender : sendMessageWealthManager : completed ");
    }

}