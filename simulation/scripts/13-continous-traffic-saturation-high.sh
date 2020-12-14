#!/bin/bash

echo "Process started ......................................................................................................................."

SERVER_URL=mycluster-fdc90eeb94dbc70-0000.eu-de.containers.appdomain.cloud
echo $SERVER_URL

increaseMemoryMB=100

### clearMemory
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/clearMemory

### stopSleep
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/stopSleep

### startMemory/1
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/startMemory/${increaseMemoryMB}

### 100 Requests
for i in {1..6}
do
        ### 100 Requests
        for j in {1..10}
        do
                ### Business Calls...
                ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/pingUser
                ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/wealthmanager/30003
                ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/businessmanager/20002
                ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/customer
                ab -n 10 -c 2 http://wealthcare-web-wealthcare-app-ns.${SERVER_URL}/user/api/customer/40003
        done
done

### memorySize
echo "Current Memory size ..."
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/memorySize

echo "Process completed ......................................................................................................................."
