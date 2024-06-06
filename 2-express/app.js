const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('./methods-public'));

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people});
})

app.use(express.urlencoded({extended: false}))

app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    // console.log(req.body);
    res.status(401).send('Provide information');
})

app.listen(5000, ()=>{
    console.log('Server is listening to port 5000');
})