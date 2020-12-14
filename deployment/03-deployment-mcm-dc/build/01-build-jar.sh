#!/usr/bin/env bash

echo "build all Started ...."

cdir=$(dirname "$0")
folderPath=$(cd ${cdir}; pwd -P)
cd "$folderPath"
cd ../../../
rootPATH="$(pwd)"
echo "RootPath value is ............> $rootPATH"

# cd $rootPATH/wealthweb
# mvn clean package

cd $rootPATH/wealthusers
mvn clean package

# cd $rootPATH/wealthnotification
# mvn clean package

cd $rootPATH/wealthfinancialplan
mvn clean package

echo "build all completed ...."