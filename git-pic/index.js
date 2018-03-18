const fs = require('fs');
const path = require('path');
const request = require('request');
const cheerio =require('cheerio');

let flag;
if(process.argv[0] === '-t'){
    flag=1
}else if(process.argv[2] === '-d'){
    flag=2
}
request.get(url,(err,response,body)=>{
    
})