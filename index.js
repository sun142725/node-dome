// Node.js是基于ChromeV8引擎的javascript运行环境
//node.js没有window对象

 const os = require('os'); //操作系统 opration system
const fs = require('fs');
const path = require('path'); //path 路径
/*const base = path.join(os.homedir(),'Desktop');//os.homedir  家目录
for(let i=0;i<5;i++){
    fs.mkdirSync(path.join(base,String(Math.random())))
    // mkdirSync => make directory sync 已同步的方式制造目录
}*/

const request = require('request');
const cheerio = require('cheerio');
request.get('http://www.baidu.com',(err,response,body)=>{
   var $ = cheerio.load(body.toString());
   var imgUrl = 'https:'+$('#lg img').attr('src');
   request.get(imgUrl).pipe(
       fs.createWriteStream(
           path.join(__dirname,'baidu-logo.png')
   ))
});