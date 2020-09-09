package com.wealth.wealthweb.util;

public class ServiceUtil {


    public static String getServiceURL(String globalURL, String localHost, String localPort, String envHost, String envPort) {
        String url = globalURL;

        if (StringUtil.isNullOrEmpty(url)) {
            if (StringUtil.isNullOrEmpty(localHost) || StringUtil.isNullOrEmpty(localPort)) {
                url = "http://" + System.getenv().get(envHost) + ":" + System.getenv().get(envPort);
            } else {
                url = "http://" + localHost + ":" + localPort;
            }
        }

        return url;
    }
}
