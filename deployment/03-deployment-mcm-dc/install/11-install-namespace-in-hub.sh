#!/usr/bin/env bash

cd ..

oc apply -f ./yaml/01-prerequisite/ --validate=false
