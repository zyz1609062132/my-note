var express=require("express");
var app=express();
var exStatic=require("express-static");
app.use(exStatic('./'));//这一句中的'./'是静态页面的相对路径。
app.listen(8000)

//还可以用原生node写   fs的 readFile   write
// fs.readFile(fileName,function (err,data) {
//     res.setHeader("Content-Type","text/html;charset=utf-8")
//     res.write(data)
// })

//访问 http://localhost:8000/good.html

