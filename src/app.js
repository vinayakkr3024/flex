const path = require('path');
const express = require('express');
const hbs= require('hbs');
const app= express();

const publicDirectoryPath=path.join(__dirname,'../paths');
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

// Define routes
app.get('', (req, res) => {
  res.render('index', {
    title: 'ExpressApp',
    name: 'vinayak'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'vinayak'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText:'This is some helpful text',
    title: 'help',
    name: 'vinayak'
  });
});


// Start the server
app.listen(5000, () => {
  console.log('Server is up on port 4000.');
});

app.get('/ExpressApp', (req, res) => {
  res.send({
    forecast: 'It is Snowing',
    location: 'Ludhiana'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'MyName',
    errorMessage:'Help article not found'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'MyName',
    errorMessage:'Page not found'
  });
});
