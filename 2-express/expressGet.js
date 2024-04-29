// To install express run: npm install express --save
// To install express of specific version run: npm install express@23.1.4 --save

// const app = require('express')();
//  or
const express = require('express');
const app = express();

// app.all('*', (req, res)=>{
//     res.status(404).send('<h1>404 Page not found</h1>');
// });

app.get('/', (req, res)=>{
    console.log('User hits the main page');
    res.status(200).send('Hello Express');
})

app.get('/about', (req, res)=>{
    console.log('User hits the about page');
    res.status(200).send('Hello Express about');
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>404 Page not found</h1>');
});

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});

// app.get - It is used to setup routes
// app.post
// app.put
// app.delete
// app.all - It is used to setup the default route
// app.use - It is used to setup middleware and static asserts
// app.listen - It is used to setup port for the serve to listen