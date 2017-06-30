//4. 创建一个后台服务器
//要求：没有要求
//做出自己的特色
var http=require('http');
var fs=require('fs');
http.createServer(function (req,res) {
    var url=req.url
    switch (url){
        case"/":fs.readFile("pod/blue.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })
        case"/green.html":fs.readFile("pod/green.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })
        case"/blue.html":fs.readFile("pod/blue.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })
        case"/red.html":fs.readFile("pod/red.html","utf-8",function (err, data) {
            if (err){
                console.log("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                res.end(data)
            }
        })
        case"/index.js":fs.readFile("pod/index.js","utf-8",function(err,data){
            if (err){
                res.end("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/javascript;charset=utf8"})
                res.end(data)
            }
        })
        case"/index.css":fs.readFile("pod/index.css","utf-8",function(err,data){
            if (err){
                res.end("读取失败")
                console.log(err)
            }else {
                res.writeHead(200,{"content-type":"text/css;charset=utf8"})
                res.end(data)
            }
        })
    }
}).listen(3000)
