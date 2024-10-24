const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Simulate user login status
let isLoggedIn = true; // Change to true to simulate being logged in
const username = 'John Doe'; // Simulated username

app.get('/', (req, res) => {
    res.render('index', { isLoggedIn, username });
});

// Simulated login route
app.get('/login', (req, res) => {
    isLoggedIn = true; // Set to true to simulate logging in
    res.redirect('/');
});

// Simulated logout route
app.get('/logout', (req, res) => {
    isLoggedIn = false; // Set to false to simulate logging out
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
