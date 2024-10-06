#!/bin/bash

docker pull stone2grandia/app-uploader
docker tag stone2grandia/app-uploader app-uploader
docker rmi stone2grandia/app-uploader
docker run --name uploader --restart=always -p 9527:3000 -v /opt/html/uploads:/app/uploads -d app-uploader