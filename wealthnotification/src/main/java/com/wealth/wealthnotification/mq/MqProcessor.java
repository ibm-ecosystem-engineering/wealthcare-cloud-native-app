package com.wealth.wealthnotification.mq;

import com.wealth.wealthnotification.common.ConversionUtil;
import com.wealth.wealthnotification.common.LogUtil;
import com.wealth.wealthnotification.mail.OpenWhiskMail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.config.JmsListenerEndpointRegistry;
import org.springframework.stereotype.Service;

@Configuration
@Service
public class MqProcessor {

    @Autowired
    OpenWhiskMail openWhiskMail;

    public void processMessageFP(String jsonString) {
        //Convert Json to MqMessage
        MqMessage mqMessage = (MqMessage) ConversionUtil.jsonToObject(jsonString, MqMessage.class);
        LogUtil.log("MQListener : processMessageFP json message converted into MqMessage object --->: " + mqMessage);

        if (mqMessage == null) {
            LogUtil.log("MQListener : processMessageFP is Empty ---> ");
        } else {
            LogUtil.log("MQListener : processMessageFP 11 Email Id ---> " + mqMessage.getEmailId());
            LogUtil.log("MQListener : processMessageFP 22 Message ---> " + mqMessage.getMessage());

            //Send Mail
            openWhiskMail.sendMail(mqMessage.getEmailId(), "WealthCare : A New Goal created", mqMessage.getMessage());
        }
    }

    public void processMessageCustomer(String jsonString) {
        //Convert Json to MqMessage
        MqMessage mqMessage = (MqMessage) ConversionUtil.jsonToObject(jsonString, MqMessage.class);

        LogUtil.log("MQListener : processMessageCustomer json message converted into MqMessage object --->: " + mqMessage);

        if (mqMessage == null) {
            LogUtil.log("MQListener : processMessageCustomer is Empty ---> ");
        } else {
            LogUtil.log("MQListener : processMessageCustomer 11 Email Id ---> " + mqMessage.getEmailId());
            LogUtil.log("MQListener : processMessageCustomer 22 Message ---> " + mqMessage.getMessage());

            //Send Mail
            openWhiskMail.sendMail(mqMessage.getEmailId(), "WealthCare : Customer Account created", mqMessage.getMessage());

        }
    }

    public void processMessageWealthManager(String jsonString) {
        //Convert Json to MqMessage
        MqMessage mqMessage = (MqMessage) ConversionUtil.jsonToObject(jsonString, MqMessage.class);
        LogUtil.log("MQListener : processMessageWealthManager json message converted into MqMessage object --->: " + mqMessage);

        if (mqMessage == null) {
            LogUtil.log("MQListener : processMessageWealthManager is Empty ---> ");
        } else {
            LogUtil.log("MQListener : processMessageWealthManager 11 Email Id ---> " + mqMessage.getEmailId());
            LogUtil.log("MQListener : processMessageWealthManager 22 Message ---> " + mqMessage.getMessage());

            //Send Mail
            openWhiskMail.sendMail(mqMessage.getEmailId(), "WealthCare : Wealth Manager account created", mqMessage.getMessage());
        }
    }


    @Autowired
    ApplicationContext context;

    public String pauseJmsListener() {
        JmsListenerEndpointRegistry customRegistry = context.getBean("jmsRegistry", JmsListenerEndpointRegistry.class);
        customRegistry.stop();
        return "Jms Listener Stopped";
    }

    public String restartJmsListener() {
        JmsListenerEndpointRegistry customRegistry = context.getBean("jmsRegistry", JmsListenerEndpointRegistry.class);
        customRegistry.start();
        return "Jms Listener restarted";
    }
}
