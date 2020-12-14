const express = require('express');

const app = express();

//static files

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//view engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Routes
const newsRoutes = require('./src/routes/news');

app.use('/', newsRoutes)

app.listen(5000,()=>console.log('listening to port 5000'))