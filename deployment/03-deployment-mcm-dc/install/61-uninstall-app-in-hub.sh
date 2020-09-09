#!/usr/bin/env bash

cd ..

kubectl delete -f ./yaml/03-subscription/

kubectl delete -f ./yaml/02-channel/

