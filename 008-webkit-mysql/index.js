const express = require('express');
const path =  require('path');
const mysql = require('mysql');
const sever = express();
sever.get('./',(req,res)=>{
    console.log(req,res)
});