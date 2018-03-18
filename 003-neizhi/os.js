const os = require('os');
// console.log(os.cpus());
// console.log(os.EOL)
// console.log(os.arch())
function getIp() {
    var adress = '127.0.0.1'
    var ipinfo = os.networkInterfaces();
    console.log(ipinfo)
    for(let key in ipinfo){
        var information = ipinfo[key];
        information.forEach((v)=>{
           if( v.family == 'IPv4'){
               adress = v.address;
           }
        })
        return adress;
    }

}
console.log(getIp());