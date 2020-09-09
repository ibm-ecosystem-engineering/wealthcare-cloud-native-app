#!/usr/bin/env bash

echo "docker build Started ...."

if [[ -z ${IMAGE_SUFFIX} ]];
then
    IMAGE_SUFFIX=mcm-dev:0.0.1
fi
if [[ -z ${REGISTRY_USER} ]];
then
    REGISTRY_USER=mydockeruser
fi

SERVICE_NAME=wealthcare-financialplan

cp ../target/*.jar app.jar
docker build -f Dockerfile -t docker.io/${REGISTRY_USER}/${SERVICE_NAME}-${IMAGE_SUFFIX} .
docker push docker.io/${REGISTRY_USER}/${SERVICE_NAME}-${IMAGE_SUFFIX}

echo "docker build completed ...."

