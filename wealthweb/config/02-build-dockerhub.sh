#!/usr/bin/env bash

echo "build Started ...."

if [[ -z ${IMAGE_SUFFIX} ]];
then
    IMAGE_SUFFIX=dev:0.0.1
fi
if [[ -z ${REGISTRY_USER} ]];
then
    REGISTRY_USER=mydockeruser
fi

SERVICE_NAME=wealthcare-web

cp ../target/*.jar app.jar
docker build -f Dockerfile -t docker.io/${REGISTRY_USER}/${SERVICE_NAME}-${IMAGE_SUFFIX} .
docker push docker.io/${REGISTRY_USER}/${SERVICE_NAME}-${IMAGE_SUFFIX}

echo "build completed ...."
