var http=require("http")
http.createServer(function(req,res){
//	req  request请求          res  response   响应
//	console.log(arguments)
//设置响应头部   Content-type    text/html
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})//只能写在程序执行之前
	res.end("中国")
}).listen(3000)
