package com.wealth.wealthweb.service;

import com.wealth.wealthweb.common.ConversionUtil;
import com.wealth.wealthweb.common.LogUtil;
import com.wealth.wealthweb.util.HttpClientUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URLEncoder;
import java.util.List;

@Configuration
@Service
public class RestUtilService {

    @Autowired
    RestTemplate restTemplate;

    public Object callGet(String url, Class outputInfoClass) {
        LogUtil.log("RestUtilService : callGetForObject started");
        Object outputInfo =callHttpClient(url);
        LogUtil.log("RestUtilService : callGetForObject completed outputInfo : " + outputInfo);
        return outputInfo;
    }

    public Object callGetList(String url, Class outputInfoClass) {
        LogUtil.log("RestUtilService : callGetForObject started");
        Object outputInfo =callHttpClient(url);
        LogUtil.log("RestUtilService : callGetForObject completed outputInfo : " + outputInfo);
        return outputInfo;
    }

    public Object callGet(String url) {
        LogUtil.log("RestUtilService : callGet started");
        Object outputInfo =callHttpClient(url);
        LogUtil.log("RestUtilService : callGet completed outputInfo : " + outputInfo);
        return outputInfo;
    }

    public Object callGetWithId(String url, Object inputInfo) {
        LogUtil.log("RestUtilService : callGetForObject started");

        String jsonString = ConversionUtil.objectToJsonString(inputInfo);

        Object outputInfo = "";
        try {
            url = url + "/" + URLEncoder.encode(jsonString, "UTF-8");
            LogUtil.log("RestUtilService : callGetForObject url  1: " + url);

            URI uri = new URI(url);

            outputInfo =callHttpClient(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("RestUtilService : callGetForObject input jsonString  : " + jsonString);
        LogUtil.log("RestUtilService : callGetForObject url  : " + url);
        LogUtil.log("RestUtilService : callGetWithId completed outputInfo : " + outputInfo);

        return outputInfo;
    }


    public Object callGetList(String url, Object inputInfo, Class outputInfoClass) {
        LogUtil.log("RestUtilService : callGetForObject started");

        String jsonString = ConversionUtil.objectToJsonString(inputInfo);

        Object outputInfo = "";
        try {
            url = url + "/" + URLEncoder.encode(jsonString, "UTF-8");
            LogUtil.log("RestUtilService : callGetForObject url  1: " + url);

            URI uri = new URI(url);

            outputInfo =callHttpClient(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("RestUtilService : callGetForObject input jsonString  : " + jsonString);
        LogUtil.log("RestUtilService : callGetForObject url  : " + url);
        LogUtil.log("RestUtilService : callGetForObject completed outputInfo : " + outputInfo);

        return outputInfo;
    }

    public Object callGetList111(String url, Object inputInfo, Class outputInfoClass) {
        LogUtil.log("RestUtilService : callGetForObject started");

        String jsonString = ConversionUtil.objectToJsonString(inputInfo);

        Object outputInfo = "";
        try {
            url = url + "/" + URLEncoder.encode(jsonString, "UTF-8");
            LogUtil.log("RestUtilService : callGetForObject url  1: " + url);

            URI uri = new URI(url);

            outputInfo =callHttpClient(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("RestUtilService : callGetForObject input jsonString  : " + jsonString);
        LogUtil.log("RestUtilService : callGetForObject url  : " + url);

        LogUtil.log("RestUtilService : callGetForObject completed outputInfo : " + outputInfo);

        return outputInfo;
    }

    public Object callGet(String url, Object inputInfo, Class outputInfoClass) {
        LogUtil.log("RestUtilService : callGetForObject started");

        String jsonString = ConversionUtil.objectToJsonString(inputInfo);

        Object outputInfo = "";
        try {
            url = url + "/" + URLEncoder.encode(jsonString, "UTF-8");
            LogUtil.log("RestUtilService : callGetForObject url  1: " + url);

            URI uri = new URI(url);

            outputInfo =callHttpClient(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("RestUtilService : callGetForObject input jsonString  : " + jsonString);
        LogUtil.log("RestUtilService : callGetForObject url  : " + url);
        LogUtil.log("RestUtilService : callGetForObject completed outputInfo : " + outputInfo);

        return outputInfo;
    }

    public Object callPost (String url, Object requestInfo, Class responseClass) {

        LogUtil.log("RestUtilService : callPost started");

        LogUtil.log("RestUtilService : callPost url :" + url);
        LogUtil.log("RestUtilService : callPost request :" + requestInfo);

        String jsonString = ConversionUtil.objectToJsonString(requestInfo);
        LogUtil.log("RestUtilService : callPost jsonString  : " + jsonString);

        HttpEntity<Object> entity = createHttpEntity(requestInfo);

        String responseString = null;
        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            responseString = response.getBody();

            LogUtil.log("RestUtilService : callPost responseString 1: " + responseString);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Object responseObject =  ConversionUtil.jsonToObject(responseString, responseClass);
        LogUtil.log("RestUtilService : callPost responseObject : " + responseObject);

        return responseObject;
    }
    public Object callPost (String url, Object requestInfo) {

        LogUtil.log("RestUtilService : callPost started");

        LogUtil.log("RestUtilService : callPost url :" + url);
        LogUtil.log("RestUtilService : callPost request :" + requestInfo);

        String jsonString = ConversionUtil.objectToJsonString(requestInfo);
        LogUtil.log("RestUtilService : callPost jsonString  : " + jsonString);

        HttpEntity<Object> entity = createHttpEntity(requestInfo);

        String responseString = null;
        try {
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            responseString = response.getBody();

            LogUtil.log("RestUtilService : callPost responseString 1: " + responseString);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return responseString;
    }

    public Object callDelete(String url, Object inputInfo) {
        LogUtil.log("RestUtilService : callGetForObject started");

        String jsonString = ConversionUtil.objectToJsonString(inputInfo);

        String jsonResonse = "";
        try {
            url = url + "/" + URLEncoder.encode(jsonString, "UTF-8");
            LogUtil.log("RestUtilService : callGetForObject url  1: " + url);

            URI uri = new URI(url);

            restTemplate.delete(uri);

        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("RestUtilService : callGetForObject input jsonString  : " + jsonString);
        LogUtil.log("RestUtilService : callGetForObject url  : " + url);
        LogUtil.log("RestUtilService : callGetForObject completed jsonResonse : " + jsonResonse);

        Object outputInfo = "success";
        LogUtil.log("RestUtilService : callGetForObject completed outputInfo : " + outputInfo);

        return outputInfo;
    }

    public Object callHttpClient(String url) {
        LogUtil.log("RestUtilService : callHttpClient started");

        Object result = 0;
        try {
            LogUtil.log("RestUtilService : callHttpClient url  1: " + url);

            result = HttpClientUtil.doGet(url);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("RestUtilService : callHttpClient completed result : " + result);

        return result;
    }


    private static HttpEntity createHttpEntity(Object inputInfo) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return new HttpEntity(inputInfo, headers);
    }
}
