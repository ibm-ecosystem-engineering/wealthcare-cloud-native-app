package com.wealth.wealthnotification.common;

import com.wealth.wealthnotification.mail.MailInfo;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

public class RestUtil {

    public static Object exchange (RestTemplate restTemplate, String url, MailInfo request, Class responseClass, String user, String password) {

        LogUtil.log("RestUtil : postForObject started");
        LogUtil.log("RestUtil : postForObject url :" + url);
        LogUtil.log("RestUtil : postForObject request :" + request);
        LogUtil.log("RestUtil : postForObject user :" + user);
        LogUtil.log("RestUtil : postForObject password :" + password);

        String jsonString = ConversionUtil.objectToJsonString(request);
        LogUtil.log("RestUtil : postForObject jsonString  : " + jsonString);

        HttpEntity<MailInfo> entity = createHttpEntity(request, user, password);

        String responseString = null;
        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            responseString = response.getBody();

            LogUtil.log("RestUtil : postForObject responseString 1: " + responseString);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Object responseObject =  ConversionUtil.jsonToObject(responseString, responseClass);
        LogUtil.log("RestUtil : postForObject responseObject : " + responseObject);

        return responseObject;
    }

    private static HttpEntity<MailInfo> createHttpEntity(MailInfo request, String user, String password) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", createBasicAuthText(  user + ":" + password));
        return new HttpEntity<MailInfo>(request, headers);
    }

    public static String createBasicAuthText(String authUserPassword) {
        byte[] plain = authUserPassword.getBytes();
        byte[] base64 = Base64.encodeBase64(plain);
        String result = "Basic " + new String(base64);

        LogUtil.log("RestUtil createBasicAuthText authUserPassword : " + authUserPassword);
        LogUtil.log("RestUtil createBasicAuthText result : " + result);

        return result;
    }

}
