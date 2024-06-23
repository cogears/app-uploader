# app-uploader

a node server for upload files.

```
docker push stone2grandia/app-uploader:1.0.0
docker run --name uploader --restart=always -p 9527:3000 -v /data/www/uploads:/app/uploads -d stone2grandia/app-uploader:1.0.0
```

