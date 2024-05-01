const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res)=>{
    // res.json([{name: 'john'}, {name: 'susan'}, {name: 'debasis'}]);
    // res.json(products);

    res.send('<h1>Home Page</h1><a href="/api/products">click here</a>');
})

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
})

// app.get('/api/products/1', (req, res)=>{
//     const singleProduct = products.find((product)=>product.id === 1))
//     res.json(singleProduct);
// })
// or 
// instead of hardcoding the id, we can use the dynamic route using route parameter, we can give any name to it
app.get('/api/products/:productID', (req, res)=>{
    // console.log(req);
    // console.log(req.params);

    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID));
    if(!singleProduct){
        return res.status(404).send('Product does not exist');
    }
    res.json(singleProduct);
})

app.get('/api/products/:productID/ reviews/:reviewID', (req, res)=>{
    console.log(req.params);
    res.send('Hello World');
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});

