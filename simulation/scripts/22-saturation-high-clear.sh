#!/bin/bash

echo "Process started ......................................................................................................................."

SERVER_URL=mycluster-fdc90eeb94dbc70-0000.eu-de.containers.appdomain.cloud
echo $SERVER_URL

### memorySize
echo "Memory size before ..."
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/memorySize

### clearMemory
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/clearMemory

### memorySize
echo "Memory size after ..."
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/memorySize

echo "Process completed ......................................................................................................................."
