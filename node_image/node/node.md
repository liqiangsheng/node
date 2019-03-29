npm 命令安装常用的 Node.js web框架模块 express
$ npm install express
var express = require('express');
npm install express          # 本地安装
npm install express -g   # 全局安装
可以使用以下命令来查看所有全局安装的模块：
$ npm list -g
如果要查看某个模块的版本号，可以使用命令如下：
$ npm list grunt
我们可以使用以下命令来卸载 Node.js 模块
$ npm uninstall express
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在
$ npm ls
我们可以使用以下命令更新模块：
$ npm update express
使用以下来搜索模块：
$ npm search express