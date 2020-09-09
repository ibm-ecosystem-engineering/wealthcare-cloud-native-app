package com.wealth.wealthnotification.mail;

import com.squareup.okhttp.*;
import com.wealth.wealthnotification.common.ConversionUtil;
import com.wealth.wealthnotification.common.LogUtil;
import com.wealth.wealthnotification.common.RestUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Configuration
@Service
public class OpenWhiskMail {

    @Value("${app.notification.from}")
    private String from;

    @Value("${app.notification.cc}")
    private String cc;

    @Value("${app.notification.openwhisk.user}")
    private String user;
    @Value("${app.notification.openwhisk.password}")
    private String password;

    @Value("${app.notification.openwhisk.url}")
    private String url;

    @Autowired
    RestTemplate restTemplate;

    public void sendMail(String to, String subject, String message) {
        LogUtil.log("OpenWhiskMail : sendMail started");

        MailInfo mailInfo = new MailInfo(from, to, cc, subject, message);
        LogUtil.log("OpenWhiskMail : sendMail mailInfo : " + mailInfo);

        String jsonString = ConversionUtil.objectToJsonString(mailInfo);
        LogUtil.log("OpenWhiskMail : sendMail jsonString : " + jsonString);

        OkHttpClientMailUtil.sendMail(url, user + ":" + password, jsonString);

        LogUtil.log("OpenWhiskMail : sendMail completed");
    }

    public void sendMailOld(String to, String subject, String message) {
        MailInfo mailInfo = new MailInfo(from, to, cc, subject, message);
        String response = (String) RestUtil.exchange(restTemplate, url, mailInfo, String.class, user, password);
    }

}
