//初始服务器
//  node  模块

//执行的时候   node 文件名

var http=require("http")
http.createServer(function(req,res){
//	req  request请求          res  response   响应
	console.log(arguments)
	res.end("hello")
	console.log(req)
})
server.listen(3000,function(){
	console.log("服务器已经挂起")
})
