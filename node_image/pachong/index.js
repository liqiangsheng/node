var request=require("request"); //请求
var http = require('http'); //基本模块
var cheerio=require("cheerio"); //node的jq版本 ，爬虫用
var fs = require('fs'); //文件的上传下载


var mkdirp = require('mkdirp');

//目标网址
var url = 'https://www.helijia.com/';

//本地存储目录到c盘
var dir = 'C:/Users/user/Desktop/yunyunyun/nuxtLX/node/node_image/pachong/images';

//发送请求
request(url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
        var $ = cheerio.load(body);
        $('.image a img').each(function(index,item) {
            var src = $(this).attr('src');
            console.log(src+'下载完成');
            request.head(src, function(err, res, body){
                request(src).pipe(fs.createWriteStream(dir + "/" +  'pachong'+new Date().getTime()+'.jpeg'));//保存图片到指定的位置
            });
        });
    }else{
        console.log(error+'下载失败');
    }
});

