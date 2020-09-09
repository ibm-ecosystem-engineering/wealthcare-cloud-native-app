package com.wealth.wealthnotification.mail;

import com.squareup.okhttp.*;
import com.wealth.wealthnotification.common.LogUtil;
import org.apache.tomcat.util.codec.binary.Base64;

import java.io.IOException;

public class OkHttpClientMailUtil {

    public static void sendMail(String url, String authorization, String jsonMessage) {
        LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient started");

        LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient url : " + url);
        LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient jsonMessage : " + jsonMessage);
        LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient authorization 1: " + authorization);

        try {
            String authorizationBasic = createBasicAuthText(authorization);
            LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient authorizationBasic 2: " + authorizationBasic);

            //Request
            MediaType mediaType = MediaType.parse("application/json");
            RequestBody body = RequestBody.create(mediaType, jsonMessage);
            Request request = new Request.Builder()
                    .url(url)
                    .post(body)
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Authorization", authorizationBasic)
                    .addHeader("Accept", "*/*")
                    .build();

            try {
                //Send
                OkHttpClient client = new OkHttpClient();
                Response response = client.newCall(request).execute();

                if (response != null && response.body() != null) {
                    LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient response body : " + response.body().string());
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("OkHttpClientMailUtil : sendMailOkHttpClient completed");
    }

    public static String createBasicAuthText(String authUserPassword) {
        String result = "Basic ";

        if (authUserPassword != null) {
            byte[] plainCredsBytes = authUserPassword.getBytes();
            byte[] base64CredsBytes = Base64.encodeBase64(plainCredsBytes);
            result = result + new String(base64CredsBytes);

            LogUtil.log("RestUtil createBasicAuthText authUserPassword : " + authUserPassword);
            LogUtil.log("RestUtil createBasicAuthText result : " + result);
        }
        return result;
    }

}
