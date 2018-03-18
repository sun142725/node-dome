const http = require('http');
const fs = require('fs');
const path = require('path');
// const sever = http.createServer(
//     (req,res)=>{
//         ws=fs.createReadStream(path.join('./','banner1.jpg'));
//         console.log(req.socket)
//     }
// );
// sever.listen(3000,()=>{
//
// })
//
//    http.get('http://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',(chunk)=>{
//        let body = '';
//       var ws = fs.createWriteStream(path.resolve('./1.png'));
//        body+=chunk.toString();
//       chunk.write(ws);
//       // console.log(body);
//    });


   const request = require('request');

   var arr=['一生有你','多幸运','最初的梦想','童话镇','小幸运','告白气球','无敌','你算什么男人'];
   arr.forEach((v)=>{
       downloadlyric(v)
   });
   function downloadlyric(song){
       request.post({
           url:'http://music.163.com/api/search/pc',
           form:{s:song,type:1}
       },(err,res,body)=>{
           // https://music.163.com/api/song/luric?id=1231&lv=-1&kv=-1
           let data =JSON.parse(body).result.songs[0];
           let id=data.id;
           let name = data.name;
           request.get(`https://music.163.com/api/song/lyric?id=${id}&lv=-1&kv=-1`,(err,res,body)=>{
               if(err){
                   console.log(err.Message)
               }
               fs.writeFile(`./${name}.json`,body,()=>{
                   console.log(`${name}.json文件下载成功`)
               })
           })
       });
   }