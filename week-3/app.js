const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');

//set up template engine
app.set("view engine", "pug");

//render main page
app.get('/', (req, res) => {
    res.render('home');
})

//get routes
app.use(routes);

//start server to listen on local port 3000
app.listen(port, () => {
    console.log(`Express is listening to localhost: ${port}`);
})