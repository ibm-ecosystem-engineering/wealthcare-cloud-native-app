package com.wealth.wealthusers.mq;

public class MqMessage {

    private String emailId;
    private String message;

    public MqMessage() {
    }

    public MqMessage(String emailId, String message) {
        this.emailId = emailId;
        this.message = message;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
