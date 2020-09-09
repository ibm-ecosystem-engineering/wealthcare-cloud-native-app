package com.wealth.wealthfinancialplan.common;

public class BooleanUtil {

    public static String boolToString(boolean value) {
        String result = null;
        if (value) {
            result = "TRUE";
        } else {
            result = "FALSE";
        }
        return result;
    }
}
