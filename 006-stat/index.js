const fs = require('fs');
const path = require('path');

function isFile(path){
    return fs.lstatSync(path).isFile()
}
function isDirectory(path){
   return fs.lstatSync(path).isDirectory()
}
function walk(dir,callback){
    var files = fs.readdirSync(dir);
    files.forEach(v=>{
        if(!v.startsWith('.')){
            let tmp = path.join(dir,v);
            if(isFile(tmp)){
               callback(tmp)
            }else if(isDirectory(tmp)){
                walk(tmp,callback)
            }
        }
    })
}
walk('E:/桌面/node',(file)=>{
    let ext = path.extname(file);
    let ispic = /.jpg|.png|.gif|.jpeg/i;
    if(ispic.test(ext)){
        let ws = fs.createWriteStream(path.join('E:/桌面/img',Math.random()+ext));
        fs.createReadStream(file).pipe(ws)
    }
});