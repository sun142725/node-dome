
const express = require('express');
const path = require('path');
const con=require('./mysql');
const server = express();



server.use(express.static('./public'));

setInterval(()=> {
    require('./fetchall');
}, 1000 * 60 * 5);

server.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/index.html'));
});

// server.get('/*',(req,res)=>{
//     res.sendFile(path.resolve('./views/index.html'));
// })


server.get('/home/getNewsById',(req,res)=>{
    let id=req.query.id;
    con.query(
        'select * from newscate where id=?',
        [id],
        (err,result)=>{
            res.json(result[0]);
        }
    )
});

server.get('/home/getNewsByPage',(req,res)=>{
    let offset = req.query.page?(req.query.page-1)*10:0;
    let id=req.query.id;
    con.query(
        'select * from newscate where cate = ? order by id desc limit 10 offset ?',
        [id,offset],
        (err,result)=>{
            res.json(result);
        }
    )
});
server.get('/home/getCate',(req,res)=>{
    con.query(
        'select * from categories',
        (err,result)=>{
            res.json(result);
        }
    )
})
server.listen(3000);