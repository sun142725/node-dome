// setTimeout();
// setInterval();
// setImmediate();
// new Array();
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

// 2.Buffer
// console.log(__dirname,__filename);
const fs = require('fs');
// fs.readFile(__dirname+'/1.txt','utf8',(err,body)=>{
//     console.log(body)
//     fs.writeFile(__dirname+'/2.txt',body,(err)=>{
//         if(!err){
//             console.log('ok')
//         }
//     })
// });
// fs.readFile(__dirname+'/banner1.jpg',(err,body)=>{
//     console.log(body)
//     fs.writeFile(__dirname+'/a.jpg',body,(err)=>{
//         if(!err){
//             console.log('ok')
//         }
//     })
// })