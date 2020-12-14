#!/bin/bash
echo "Process started ...."

SERVER_URL=mycluster-fdc90eeb94dbc70-0000.eu-de.containers.appdomain.cloud
echo $SERVER_URL

### stopSleep
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/stopSleep

### startSleep/2100/0/1 
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/startSleep/2500/0/1

sleep 5

for i in {1..10000}
do
    ## Business Calls...
    ab -n 500 -c 30 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40001 &
    ab -n 500 -c 30 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40002 &
    ab -n 500 -c 30 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40003 &
    ab -n 500 -c 30 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingFinancialPlan 
done

echo "Process completed ...."

