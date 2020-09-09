package com.wealth.wealthfinancialplan.watson;

import com.wealth.wealthfinancialplan.common.BooleanUtil;
import com.wealth.wealthfinancialplan.common.ConversionUtil;
import com.wealth.wealthfinancialplan.common.LogUtil;
import com.wealth.wealthfinancialplan.entity.WcInvestment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URLEncoder;
import java.util.Random;

@Configuration
@Service
public class WatsonFinancialPlanner {

    @Value("${watson.financialPlan.url}")
    private String watsonFpUrl;

    @Value("${watson.enabled}")
    private boolean watsonEnabled;

    @Autowired
    RestTemplate restTemplate;

    public void populateFP(WcInvestment wcInvestment, double investmentAmount) {

        LogUtil.log(" WatsonFinancialPlanner : populateFP : started");

        //Create Input for Watson
        FpInputInfo fpInputInfo = createFpInputInfo1(wcInvestment);
        fpInputInfo.setInvestmentamount(investmentAmount);

        //Call Watson
        FpOutputInfo fpOutputInfo = null;
        if (watsonEnabled) {
            LogUtil.log(" WatsonFinancialPlanner : populateFP : watson call started");
            fpOutputInfo = callWatson(fpInputInfo);
            LogUtil.log(" WatsonFinancialPlanner : populateFP : watson call completed");
        } else {
            LogUtil.log(" WatsonFinancialPlanner : populateFP : watson disabled");
        }

        double stock = 0;
        double mutual = 0;

        //Get Stock and Mutual percentage
        if (fpOutputInfo == null) {         //Watson - error
            Random rand = new Random();
            stock = rand.nextInt(50);
            mutual = rand.nextInt(50);
        } else {                            //Watson - success
            stock = fpOutputInfo.getStockinvestment();
            mutual = fpOutputInfo.getMutualinvestment();
        }

        LogUtil.log(" WatsonFinancialPlanner : populateFP Before Correction S M : " + stock + "," + mutual);
        //Corrections
        if (stock < 10) {
            stock = 10;
        }
        if (mutual < 10) {
            mutual = 10;
        }
        if ((stock + mutual) >= 100) {
            stock = 20;
            mutual = 30;
        }
        LogUtil.log(" WatsonFinancialPlanner : populateFP After Correction S M : " + stock + "," + mutual);


        //Identify the Financial plan
        populateFP(wcInvestment, investmentAmount, stock, mutual);

        LogUtil.log(" WatsonFinancialPlanner : populateFP : completed");

    }

    //TODO: Temp method to be replaced
    public FpInputInfo createFpInputInfo1(WcInvestment wcInvestment) {
        FpInputInfo fpInputInfo = new FpInputInfo();
        fpInputInfo.setGender(wcInvestment.getGender());
        fpInputInfo.setAge(wcInvestment.getAge());
        fpInputInfo.setAvgincome(wcInvestment.getAvgIncome());
        fpInputInfo.setMarried(BooleanUtil.boolToString(wcInvestment.isMarried()));
        fpInputInfo.setSpouseage(wcInvestment.getSpouseAge());
        fpInputInfo.setSpourceavgincome(wcInvestment.getSpouseAvgIncome());
        fpInputInfo.setNoofchildren(wcInvestment.getNoOfChildren());
        return fpInputInfo;
    }

    public FpOutputInfo callWatson(FpInputInfo fpInputInfo) {
        LogUtil.log("WatsonFinancialPlanner : callWatson started");


    //https://wealthcarepredict.mybluemix.net/predict?data={"gender":"MALE","age":24,"avgincome":100000,"married":"TRUE","spouseage":0,"spourceavgincome":0,"noofchildren":0,"investmentamount":50000}

        //Json
        String jsonString = ConversionUtil.objectToJsonString(fpInputInfo);

        String jsonResonse = "";
        try {
            String url = watsonFpUrl + URLEncoder.encode(jsonString, "UTF-8");
            LogUtil.log("WatsonFinancialPlanner : callWatson url  1: " + url);

            URI uri = new URI(url);

            jsonResonse = restTemplate.getForObject(uri, String.class);
        } catch (Exception e) {
            e.printStackTrace();
        }

        LogUtil.log("WatsonFinancialPlanner : callWatson jsonString  : " + jsonString);
        LogUtil.log("WatsonFinancialPlanner : callWatson watsonFpUrl  : " + watsonFpUrl);
        LogUtil.log("WatsonFinancialPlanner : callWatson completed jsonResonse : " + jsonResonse);

        FpOutputInfo fpOutputInfo = (FpOutputInfo) ConversionUtil.jsonToObject(jsonResonse, FpOutputInfo.class);
        LogUtil.log("WatsonFinancialPlanner : callWatson completed fpOutputInfo : " + fpOutputInfo);

        return fpOutputInfo;
    }

    public void populateFP(WcInvestment wcInvestment, double investmentAmount, double stock, double mutual) {
        double stockAmount = (investmentAmount *  stock) / 100;
        double mutualAmount = (investmentAmount *  mutual) / 100;
        double fdAmount = investmentAmount - (stockAmount + mutualAmount);

        wcInvestment.setStockAmount(stockAmount);
        wcInvestment.setMutualFundAmount(mutualAmount);
        wcInvestment.setFixedDepositAmount(fdAmount);

        LogUtil.log("WatsonFinancialPlanner : stock : " + stock);
        LogUtil.log("WatsonFinancialPlanner : mutual : " + mutual);

        LogUtil.log("WatsonFinancialPlanner : investmentAmount : " + investmentAmount);
        LogUtil.log("WatsonFinancialPlanner : stockAmount : " + stockAmount);
        LogUtil.log("WatsonFinancialPlanner : mutualAmount : " + mutualAmount);
        LogUtil.log("WatsonFinancialPlanner : fdAmount : " + fdAmount);
    }
}
