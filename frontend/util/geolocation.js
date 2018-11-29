const GOOGLE_KEY = require('../../config/prod_key.js').googleAPI;

export const getLocation = (location) => {
    return (
      $.ajax({
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_KEY}`
      })
    );
}