const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('hello');
    console.log(req.url);
    res.end('hello world');
});
// The reason you're seeing 'hello' logged twice may be because your browser is making two requests to your server. One is the request you're expecting (likely a GET request for the page itself), and the other is likely a request for the favicon (the small icon that appears on the browser tab).
server.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});