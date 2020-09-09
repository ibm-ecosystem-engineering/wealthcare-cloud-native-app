#!/usr/bin/env bash

echo "build angular Started ...."
pwd
ls -l

### compile angular
cd ../angularUI/wealthcare-ui2
pwd
ls -l

ng build --prod

pwd
### copy angular scripts to static folder
cp -a ./dist/wealthcare/. ../../src/main/resources/static

echo "build angular completed ...."