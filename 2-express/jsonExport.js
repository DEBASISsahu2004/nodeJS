const express = require('express');
const app = express();

// Get the product data objects from the data.js file
// in data.js thr objects are exported
// const {products} = require('./data.js');

app.get('/', (req, res)=>{
    // res.json([{name: 'john'}, {name: 'doe'}]);
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

// app.get('/api/products', (req, res)=>{
//     const newProducts = products.map((product)=>{
//         const {id, name, image} = product;
//         return {id, name, image};
//     });
//     res.json(newProducts);
// });

// app.get('/api/products/1', (req, res)=>{
//     const singleProduct = products.find((product)=>product.id === 1);
//     res.json(singleProduct);
// });
//or  5 40 watch
app.get('/api/products/:productsID', (req, res)=>{
    // console.log(req);
    // console.log(req.params);

    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID));
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist');
    }
    res.json(singleProduct);
});

app.get('api/v1/query', (req, res)=>{
    console.log(req.query);
    res.send('HEllo');
});

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})