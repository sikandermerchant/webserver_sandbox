const path = require('path');
///Set-up express server
const express = require('express');
const app = express();

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
  res.send([{
      temp: 25,
      feels_like: 25,
      min: 15,
      max: 26
    },
    {
      location: 'London',
    }
  ]);
});

//Start the server
app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
});