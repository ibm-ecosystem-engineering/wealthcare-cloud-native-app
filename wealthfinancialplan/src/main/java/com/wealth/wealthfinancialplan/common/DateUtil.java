package com.wealth.wealthfinancialplan.common;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class DateUtil {

    static String patternMMMYYYY = "MMM yyyy";
    static String patternDDMMMYYYY = "dd-MMM-yyyy";

    public static String convertMMMYYY(Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(patternMMMYYYY);
        String dateString = simpleDateFormat.format(date);
        return dateString;
    }

    public static String convertDDMMMYYY(Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(patternDDMMMYYYY);
        String dateString = simpleDateFormat.format(date);
        return dateString;
    }

    public static long dateDiffInDays(Date latest, Date previous) {
        long diffDays = 0;
        try {
            //in milliseconds
            long diff = latest.getTime() - previous.getTime();
            diffDays = diff / (24 * 60 * 60 * 1000);
            System.out.print(diffDays + " days, ");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return diffDays;
    }

    public static int dateDiffInYears(Date latest, Date previous) {
        long diffYears = 0;
        try {
            //in milliseconds
            long diff = latest.getTime() - previous.getTime();

            LogUtil.log("DateUtil dateDiffInYears : diff 0000 " + diff );
            diffYears = TimeUnit.MILLISECONDS.toDays(diff) / 365l;

            LogUtil.log("DateUtil dateDiffInYears : diffYears " + diffYears );

            System.out.print(diffYears + " years, ");
        } catch (Exception e) {
            e.printStackTrace();
        }


        LogUtil.log("DateUtil dateDiffInYears : latest " + latest );
        LogUtil.log("DateUtil dateDiffInYears : previous " + previous );
        LogUtil.log("DateUtil dateDiffInYears : diffYears " + diffYears );

        return (int) diffYears;
    }

    public static boolean isLimitExceeded(long latestTimeInMilliSeconds, long previousTimeInMilliSeconds, long differenceLimitInSeconds) {
        boolean result = true;
        try {
            long differenceLimitInMilliSeconds = differenceLimitInSeconds * 1000;
            long difference = latestTimeInMilliSeconds - previousTimeInMilliSeconds;
            if (difference < differenceLimitInMilliSeconds) {
                result = false;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        LogUtil.log("DateUtil isLimitExceeded : latestTimeInMilliSeconds " + latestTimeInMilliSeconds );
        LogUtil.log("DateUtil isLimitExceeded : previousTimeInMilliSeconds " + previousTimeInMilliSeconds );
        LogUtil.log("DateUtil isLimitExceeded : differenceLimitInSeconds " + differenceLimitInSeconds );
        LogUtil.log("DateUtil isLimitExceeded : result " + result );
        return result;
    }

    public static void main(String[] args) {
        Date date1 = getDate("7-06-2013");
        Date date2 = getDate("7-06-2016");
        System.out.println(dateDiffInYears(date1, date2));

    }

    public static Date getDate(String dateString) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        Date date = null;
        try {
            date = formatter.parse(dateString);
            System.out.println(date);
            System.out.println(formatter.format(date));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return date;
    }

}
