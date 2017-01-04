#!/bin/bash

cd /np-docker-mean
npm install

pm2-docker process.yml
# pm2 start process.yml