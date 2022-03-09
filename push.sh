#!/bin/bash
###
 # @Author: korealu
 # @Date: 2022-03-08 15:23:56
 # @LastEditors: korealu
 # @LastEditTime: 2022-03-09 17:57:13
 # @Description: file content
 # @FilePath: /js-height/push.sh
### 
baseball=$(
  cd $(dirname $0) || exit
  pwd
)
cd "$baseball" || exit
git add .
git run commit -m'info'
git push
