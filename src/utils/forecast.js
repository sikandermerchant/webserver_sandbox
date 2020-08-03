const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=6356a94b892b52ec7d337500172528cc&query=${latitude},${longitude}`;
  request({
      url,
      json: true,
    },
    (error, {
      body
    } = {}) => {
      if (error) {
        callback("Unable to connect to the weather api service", undefined);
      } else if (body.error) {
        callback(
          `Error Code: ${body.error.code}, ${body.error.info}`,
          undefined
        );
      } else {
        callback(undefined, `It is currently ${body.current.weather_descriptions[0]} in ${body.location.name}, ${body.location.region} and ${body.current.temperature} degrees; although it feels like ${body.current.feelslike} degrees`);
      }
    }
  );
};
module.exports = forecast;