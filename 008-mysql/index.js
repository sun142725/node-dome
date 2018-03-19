//下载mysql    npm install mysql --save
const mysql = require('mysql');
const request = require('request');
const cherrio = require('cheerio');
const filter = require('bloom-filter-x')

//链接数据库
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});
con.connect();

con.query(
    'select * from testnews order by id desc limit 1000',
    (err,result)=>{
        result.forEach(v=>{
            filter.add(v.url);
        })
    }
);

request.get(tf
    'http://news.ifeng.com',
    (err,res,body)=>{
        var $ = cherrio.load(body);
        //在element里面找岛有用的script标签
        let scripts = $('.col_left .left_co3').nextAll('script');
        let entlist = scripts.eq(0).html().trim();
        entlist = JSON.parse(entlist.slice(entlist.indexOf('[')));
        //第二个script标签
        let datalist = scripts.eq(1).html().trim();
        datalist = JSON.parse(datalist.slice(datalist.indexOf('['),-1));

        datalist.splice(2,0,entlist);
        //遍历二维数组
        datalist.forEach((v,i)=>{
            let cate = i+1;
            v.reverse().forEach((x)=>{
                if(filter.add(x.url)){
                    con.query('insert into testnews(name,url,cate) values(?,?,?)',
                        [x.title,x.url,cate],(err,result)=>{
                            if(err){
                                console.log(err.message)
                            }else{
                                console.log(result.insertId)
                            }
                        }
                    )
                }
            })
        })
    }
);