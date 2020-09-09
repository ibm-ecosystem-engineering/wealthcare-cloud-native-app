#!/usr/bin/env bash

echo "build dockerhub all Started ...."

cdir=$(dirname "$0")
folderPath=$(cd ${cdir}; pwd -P)
cd "$folderPath"
cd ../../../
rootPATH="$(pwd)"
echo "RootPath value is ............> $rootPATH"

# docker login -u mydockeruser

# Docker Image related variables
# Example : docker.io/mydockeruser/welathcare-web-mcm-dev:0.0.1
export IMAGE_SUFFIX=mcm-dev:0.0.1
export REGISTRY_USER=mydockeruser

cd $rootPATH/wealthweb/config
sh 02-build-dockerhub.sh

cd $rootPATH/wealthusers/config
sh 02-build-dockerhub.sh

cd $rootPATH/wealthnotification/config
sh 02-build-dockerhub.sh

cd $rootPATH/wealthfinancialplan/config
sh 02-build-dockerhub.sh

echo "build dockerhub all completed ...."
