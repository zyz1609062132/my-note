@echo 删除文件夹
del dist.zip
@echo 开始构建
call npm run build
@echo 构建成功
@echo 开始压缩
7z a -tzip dist.zip dist
@echo 压缩成功
@pause