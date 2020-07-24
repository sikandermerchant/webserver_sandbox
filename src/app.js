const path = require("path");
///Set-up express server
const express = require("express");
const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));
app.set("view engine", "hbs");

app.get('', (req, res) => {
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
    message: 'Please contact sikander.merchant@gmail.com for any further help'
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

//Start the server
app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`);
});