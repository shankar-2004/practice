// const math = require('./math');

// console.log(math.add(1,20));


// const fs = require('fs')

// fs.readFile('./files/starte.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     else console.log(data);
// })

// process.on('uncaughtException',err =>{
//     console.log("error");
//     process.exit(1);
// })

const http = require("http");

const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(8000);
