##重点
###setImmediate  立刻，马上运行 
 > 同步转异步  实例
     * 借用回调函数
 >
 var getNumber=(callback)=>{
     setImmediate(()=>{
         var connt=0;
         for(let i=0;i<1000000;i++){
             connt+=i;
         }
         callback(connt)
     })
 };
 getNumber((x)=>{
     console.log(x)
 });
 console.log(1);
 
 ###Buffer
   >. const fs = require('fs');
        fs.readFile(__dirname+'/1.txt','utf8',(err,body)=>{
            console.log(body)
        });
        fs.readFile(__dirname+'/banner1.jpg',(err,body)=>{
            console.log(body)
            fs.writeFile(__dirname+'/a.jpg',(err)=>{
                if(!err){
                    console.log('ok')
                }
            })
        })
 
    
###导出


###全局变量
 > #！/usr/bin/env node
 

