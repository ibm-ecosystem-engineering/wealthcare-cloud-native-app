#!/usr/bin/env bash

echo "build dockerhub Started ...."

cdir=$(dirname "$0")
folderPath=$(cd ${cdir}; pwd -P)
cd "$folderPath"
cd ../../../
rootPATH="$(pwd)"
echo "RootPath value is ............> $rootPATH"

# docker login -u gandhicloudlab

# Docker Image related variables
# Example : docker.io/gandhicloudlab/welathcare-web-ocp-oss:0.0.1
export IMAGE_SUFFIX=ocp-oss:0.0.1
export REGISTRY_USER=gandhicloudlab

# cd $rootPATH/wealthweb/config
# sh 02-build-dockerhub.sh

cd $rootPATH/wealthusers/config
sh 02-build-dockerhub.sh

# cd $rootPATH/wealthnotification/config
# sh 02-build-dockerhub.sh

cd $rootPATH/wealthfinancialplan/config
sh 02-build-dockerhub.sh

echo "build dockerhub completed ...."
