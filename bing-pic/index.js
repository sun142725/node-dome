const request = require('request');
const fs = require('fs');
const path = require('path');

function getpic(fn) {
    request('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1500892042949&pid=hp',(err,response,body)=>{
        var imgUrl = 'http://cn.bing.com'+JSON.parse(body).images[0].url;
        var name = JSON.parse(body).images[0].enddate+'.jpg';
        request(imgUrl).pipe(
            fs.createWriteStream(
                path.resolve('./'+name)
            )
        );
        fn(path.resolve('./'+name));
    });
}
module.exports=getpic;