// const http = require('http');
// const {readFileSync} = require('fs');

// // get all files
// const homePage = readFileSync('./index.html');
// // const homeCss = readFileSync('./style.css');
// const server = http.createServer((req, res)=>{
//     // console.log(req.method);
//     // console.log(req.url);
//     if(req.url === '/'){
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write(homePage);
//         res.end();
//     }
//     // else if(req.url === '/style.css'){
//     //     res.writeHead(200, {'content-type': 'text/css'})
//     //     res.write(homeCss);
//     //     res.end();
//     // }
//     else if(req.url === '/about'){
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write('<h1>About Page</h1>');
//         res.end();
//     }else{
//         res.writeHead(404, {'content-type': 'text/html'})
//         res.write('<h1>Page not found</h1>');
//         res.end();
//     }
// });

// server.listen(5000, ()=>{
//     console.log('server is running');
// });

const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeCss = readFileSync('./navbar-app/styles.css');
const homelogo = readFileSync('./navbar-app/logo.svg');
const homeJs = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage);
        res.end();
    }
    else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeCss);
        res.end();
    }
    else if(req.url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homelogo);
        res.end();
    }
    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeJs);
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5500, ()=>{
    console.log('server is running');
});
