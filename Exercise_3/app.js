const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// Dummy list of products
const products = [
    { name: 'Earring', price: 100 },
    { name: 'Bracelet', price: 100 },
    { name: 'Tablet', price: 500 },
    { name: 'Smartwatch', price: 300 },
];

// Route for products page
app.get('/products', (req, res) => {
    const searchQuery = req.query.search || '';
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.render('products', { products: filteredProducts, searchQuery });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

