const http = require('http');
// const server = http.createServer((req,res)=>{
//    res.end('Hello World');
// });

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res)=>{
   res.end('Hello World');
   console.log('working');
});

server.listen(3000, ()=>{
   console.log('Server is running...');
});