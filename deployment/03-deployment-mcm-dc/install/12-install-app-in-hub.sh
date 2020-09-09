#!/usr/bin/env bash

cd ..

oc apply -f ./yaml/02-channel/

oc apply -f ./yaml/03-subscription/ --validate=false
