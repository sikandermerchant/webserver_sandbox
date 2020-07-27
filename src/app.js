const path = require("path");
const hbs = require('hbs');

///Set-up express server
const express = require("express");
const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

//Define Paths for Express Config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Sikander Merchant'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Sikander Merchant'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Page',
    message: 'Please contact sikander.merchant@gmail.com for any further help',
    name: 'Sikander Merchant'
  })
})

app.get("/weather", (req, res) => {
  res.send([{
      temp: 25,
      feels_like: 25,
      min: 15,
      max: 26,
    },
    {
      location: "London",
    },
  ]);
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 Help',
    errorMessage: 'Help article not found',
    name: 'Sikander Merchant'
  })
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page Not Found',
    name: 'Sikander Merchant'
  })
});

//Start the server
app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`);
});