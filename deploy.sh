#!/usr/bin/env sh
###
 # @Author: yukiball yukiball
 # @Date: 2024-07-09 17:34:36
 # @LastEditors: yukiball yukiball
 # @LastEditTime: 2024-07-09 17:36:32
 # @FilePath: \look-at-me\deploy.sh
 # @Description: 
 # 
 # Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
### 

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yukiball/look-at-me.git master:gh-pages

cd -