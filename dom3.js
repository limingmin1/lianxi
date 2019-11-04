//fs   file    system文件系统   
//requise  加载
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
//	req  request请求          res  response   响应
//	console.log(arguments)
//设置响应头部   Content-type    text/html
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})//只能写在程序执行之前
    if(req.url=="/favicon.ico"){
		return
	}
	if(req.url=="/"){
		fs.readFile("./ziti/diyi.html",(err,data)=>{
			console.log(data.toString())
			res.end(data)
		})
	}
	res.end("中国")
}).listen(3000)
