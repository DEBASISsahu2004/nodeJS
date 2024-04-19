const http = require('http');
const server = http.createServer((req, res)=>{
    // this is http header which provides meta information to the browser about the type of response
    // this is called http header and the content is called mime type or media type
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Hello World</h1>');
    res.end();
});

server.listen(3000, ()=>{
    console.log('server is running');
});
