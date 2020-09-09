package com.wealth.wealthusers.common;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    static String patternMMMYYYY = "MMM yyyy";

    public static String convertMMMYYY(Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(patternMMMYYYY);
        String dateString = simpleDateFormat.format(new Date());
        System.out.println(date);
        return dateString;
    }

}
