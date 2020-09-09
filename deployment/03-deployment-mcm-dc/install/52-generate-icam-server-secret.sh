#!/usr/bin/env bash

cd ../datacollector/ibm-cloud-apm-dc-configpack

kubectl create secret generic icam-server-secret \
--from-file=keyfiles/keyfile.jks \
--from-file=keyfiles/keyfile.p12 \
--from-file=keyfiles/keyfile.kdb \
--from-file=global.environment \
--dry-run=client -o yaml
