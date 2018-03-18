const fs = require('fs');
const path = require('path');
const home = require('os').homedir();
const child = require('child_process');
const downloadpath = path.join('E:/桌面');
const dist =  path.join('E:/桌面/image');
let arr = [];
let time ;
fs.watch(downloadpath,(type,filename)=>{
    arr.push(filename);
    clearTimeout(time);
    time = setTimeout(()=>{
        let file = arr.pop();
        let o=path.join(downloadpath,file);
        let date = new Date();
        let timearr=[date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
        let dpath = path.join(dist,timearr);
        if(!fs.existsSync(dpath)){
            fs.mkdirSync(dpath)
        }
        let d = path.join(dpath,file)
        fs.rename(o,d,(err)=>{
            arr=[]
                child.spawnSync('explorer',[dpath])

        })

    },5000)
});