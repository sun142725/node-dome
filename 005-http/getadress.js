const os = require('os');
function getadress(){
    var adress = '127.0.0.1';
    var ipinfo = os.networkInterfaces();
    for(let key in ipinfo){
        var information = ipinfo[key];
        information.forEach((v)=>{
            if(v.family == 'IPv4'){
                adress = v.address;
            }
        });
        return adress;
    }
}
module.exports=getadress;