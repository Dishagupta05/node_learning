const http=require('http');

http.createServer((res,resp)=>{
    resp.write('hii guys , I am learing node js');
    resp.end();
}).listen(4500);