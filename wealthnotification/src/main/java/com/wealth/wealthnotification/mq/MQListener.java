package com.wealth.wealthnotification.mq;

import com.wealth.wealthnotification.common.ConversionUtil;
import com.wealth.wealthnotification.common.LogUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.messaging.Message;
import org.springframework.stereotype.Component;

@Configuration
@Component
public class MQListener {

    @Autowired
    MqProcessor mqProcessor;

    // Listen to queue
    // Receives MqMessage Request in JSON format
    @JmsListener(destination = "${ibm.mq.queueName.financialPlan}")
    public void receiveMessageFP(final Message message) {
        LogUtil.log("MQListener : receiveMessage: started  ");

        String jsonString = ConversionUtil.jmsMessageInJson(message);

        if (jsonString != null) {
            LogUtil.log("MQListener : receiveMessage: Message Received JSON --->>>>: "+ jsonString);
            mqProcessor.processMessageFP(jsonString);
        }
        LogUtil.log("MQListener : receiveMessage: completed  ");
    }

    // Listen to queue
    // Receives MqMessage Request in JSON format
    @JmsListener(destination = "${ibm.mq.queueName.customer}")
    public void receiveMessageCustomer(final Message message) {
        LogUtil.log("MQListener : receiveMessage: started  ");

        String jsonString = ConversionUtil.jmsMessageInJson(message);

        if (jsonString != null) {
            LogUtil.log("MQListener : receiveMessage: Message Received JSON --->>>>: "+ jsonString);
            mqProcessor.processMessageCustomer(jsonString);
        }
        LogUtil.log("MQListener : receiveMessage: completed  ");
    }

    // Listen to queue
    // Receives MqMessage Request in JSON format
    @JmsListener(destination = "${ibm.mq.queueName.wealthManager}")
    public void receiveMessageWealthManager(final Message message) {
        LogUtil.log("MQListener : receiveMessage: started  ");

        String jsonString = ConversionUtil.jmsMessageInJson(message);

        if (jsonString != null) {
            LogUtil.log("MQListener : receiveMessage: Message Received JSON --->>>>: "+ jsonString);
            mqProcessor.processMessageWealthManager(jsonString);
        }
        LogUtil.log("MQListener : receiveMessage: completed  ");
    }

}