package com.wealth.wealthweb.util;

public class StringUtil {

//    public static boolean isNullEmptyOrEqual(String text1, String text2) {
//        boolean result = (text1 == null | text1.isEmpty() | text1.equals(text2));
//        return result;
//    }

    public static boolean isNullOrEmpty(String text1) {
        boolean result = (text1 == null | text1.isEmpty() );
        return result;
    }
}
