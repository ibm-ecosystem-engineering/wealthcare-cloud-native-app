package com.wealth.wealthusers.common;

import java.util.ArrayList;
import java.util.List;


public class LoadUtil {

    public static List<byte[]> listMemory = new ArrayList<>();

    public static int memoryIncreaseMB = 0;

    public static long sleepMilliSeconds;

    public static long incrementMilliSeconds;
    public static long incrementRequestCount;
    public static long totalRequestCount;
    private  static boolean sleepFlag = false;

    public static void startMemory(int sizeInMB) {
        memoryIncreaseMB = sizeInMB;
    }
    public static void stopMemory() {
        memoryIncreaseMB = 0;
    }

    public static void startSleep(long startMilliSecondsIn, long incrementMilliSecondsIn, long requestCountIn) {
        sleepMilliSeconds = startMilliSecondsIn;
        incrementMilliSeconds = incrementMilliSecondsIn;
        incrementRequestCount = requestCountIn;
        totalRequestCount = 0;
        sleepFlag = true;
    }

    public static void stopSleep() {
        sleepMilliSeconds = 0;
        incrementMilliSeconds = 0;
        incrementRequestCount = 0;
        totalRequestCount = 0;
        sleepFlag = false;
    }

    public static int clearMemory() {
        int result = listMemory.size();
        listMemory.clear();
        System.gc();
        return result;
    }
    public static void consumeMemory(int sizeInMB) {
        processMemory(sizeInMB);
    }

    public static int getMemorySize() {
        return listMemory.size();
    }

    public static long getTotalRequestCount() {
        return totalRequestCount;
    }

    public static long getSleepMilliSeconds() {
        return sleepMilliSeconds;
    }

    public static void processLoad() {
        totalRequestCount++;
        processMemory(memoryIncreaseMB);
        processSleep();
    }

    private static void processSleep() {
        LogUtil.log("LoadUtil processSleep started : " + sleepMilliSeconds);

        if (sleepFlag) {
            if (totalRequestCount % incrementRequestCount == 0) {
                sleepMilliSeconds += incrementMilliSeconds;
            }

            if (sleepMilliSeconds > 0) {
                try {
                    Thread.sleep(sleepMilliSeconds);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        LogUtil.log("LoadUtil processSleep completed: " + sleepMilliSeconds);
    }

    private static int processMemory(int memoryIncreaseMBIn) {
        LogUtil.log("LoadUtil processMemory started: " + memoryIncreaseMBIn);

        for (int i = 0; i < memoryIncreaseMBIn; i++) {
            byte mybyte[] = new byte[1024];
            listMemory.add(mybyte);
        }
        System.out.println("LoadUtil processMemory completed : " + listMemory.size() + " MB");

        return listMemory.size();
    }


}

