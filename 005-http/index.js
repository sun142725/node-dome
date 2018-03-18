#!/usr/bin/env node
const http = require('http');
const getadress = require('./getadress');
const port=5000;
const fs = require('fs');
const url = require('url');
const childProcess=require('child_process');
const path = require('path');
const proxy = http.createServer((req,res)=>{
    let rq = fs.createReadStream(path.join(__dirname,'index.html'))
    rq.pipe(res);
    rq.on('end',()=>{
        res.end();
    })
});
proxy.listen(port,()=>{
    childProcess.spawnSync('explorer',[url.format(
        {
            // protocol:'http',
            // hostname:getadress(),
            // port:port
        }
    )])
});