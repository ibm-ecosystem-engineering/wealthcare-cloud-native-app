#!/bin/bash

echo "Process started ......................................................................................................................."

SERVER_URL=mycluster-fdc90eeb94dbc70-0000.eu-de.containers.appdomain.cloud
echo $SERVER_URL

### clearMemory
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/clearMemory

### consumeMemory/1000 MB
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/consumeMemory/1000

### memorySize
echo "Memory size ..."
curl http://wealthcare-user-wealthcare-app-ns.${SERVER_URL}/user/memorySize

echo "Process completed ......................................................................................................................."
