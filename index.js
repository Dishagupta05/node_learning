const http=require('http');
const color=require('colors');
const data = require('./data')
http.createServer((res,resp)=>{
    resp.writeHead(200,{'content-type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(1500);

console.log("hiii")

console.log("step by step command line input")