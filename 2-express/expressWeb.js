
const express = require('express');
const path = require('path');
const app = express();
// instead of setting all the routes, we can use express.static to serve static files which are inside the public folder
// setup static and middleware
app.use(express.static('./public'));

// Static assert means it is a file that the server doesn't have to change it
// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'index.html'));
// Adding to static asserts
// SSR
// });

// app.get('*', (req, res)=>{
//     res.status(404).send('Resource not found');
// })

app.listen(7000, ()=>{
    console.log('Server is running on port 7000');
});