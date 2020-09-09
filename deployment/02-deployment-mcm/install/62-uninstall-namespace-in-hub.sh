#!/usr/bin/env bash

cd ..

kubectl delete -f ./yaml/01-prerequisite/ --insecure-skip-tls-verify=true 
