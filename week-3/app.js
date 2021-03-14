const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 3000;

const routes = require('./routes');

//set up template engine
app.set("view engine", "pug");

//set up cookie parser
app.use(cookieParser());

//set up body parser
app.use(bodyParser.urlencoded({ extended: true }));

//access static files
app.use(express.static('public'));

//get routes
app.use(routes);

//start server to listen on local port 3000
app.listen(port, () => {
    console.log(`Express is listening to localhost: ${port}`);
})