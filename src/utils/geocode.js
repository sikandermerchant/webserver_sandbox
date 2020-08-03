const request = require('request');
const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2lrYW5kZXJtZXJjaGFudCIsImEiOiJja2NrbG1mNWUwN3NhMnlyejNtaTNtc3ZjIn0.wAmH5bGtJtEDmt0uSDsErg&limit=1`
  //address is added to encodeURIComponent() function so that special characters when added to address can be manged without crashing the app. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
  request({
    url,
    json: true
  }, (error, {
    body
  } = {}) => {
    if (error) {
      callback('Unable to connect to service!', undefined); //the callback function takes in two arguments as seen when the geoCode function when called: error: we publish that as a string and since its an error then the second argument which is data will be undefined
    } else if (body.features.length === 0) {
      callback('Please enter a valid location', undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  });
}

module.exports = geoCode;