#!/bin/bash
echo "Process started ...."

SERVER_URL=mycluster-fdc90eeb.domain.cloud
echo $SERVER_URL

### clearMemory
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/clearMemory
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/clearMemory
curl http://wealthcare-notification-wealthcare-app-ns.${SERVER_URL}/notification/clearMemory

### stopSleep
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/stopSleep
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/stopSleep
curl http://wealthcare-notification-wealthcare-app-ns.${SERVER_URL}/notification/stopSleep

ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingFinancialPlan 
ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingUser

# curl http://wealthcare-notification-wealthcare-app-ns.ocp43-mcm-gan-a-7ec5d722a0ab3f463fdc90eeb94dbc70-0000.us-east.containers.appdomain.cloud/notification/ping

for i in {1..1000000}
do
    ## Business Calls...
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40001 &
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40002 &
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40003 &
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingFinancialPlan 
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingUser
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/financialplan/api/goal/findInfoByCustomerId/40001 &

    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingUser
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/wealthmanager/30003
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/businessmanager/20002
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/customer
    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/customer/40003

    ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/ping
    ab -n 10 -c 2 http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/ping
    ab -n 10 -c 2 http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/ping
    ab -n 10 -c 2 http://wealthcare-notification-wealthcare-app-ns.${SERVER_URL}/notification/ping

    sleep 10
done

echo "Process completed ...."

