#!/bin/bash
echo "Process started ...."

SERVER_URL=mycluster-fdc90eeb94dbc70-0000.eu-de.containers.appdomain.cloud
echo $SERVER_URL

### stopSleep
curl http://wealthcare-financialplan-wealthcare-app-ns.${SERVER_URL}/financialplan/stopSleep

echo "Process completed ...."
