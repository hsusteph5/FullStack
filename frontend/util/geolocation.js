// const GOOGLE_KEY = require('../../config/prod_key.js').googleAPI;

export const getLocation = (location) => {
    return (
      $.ajax({
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBBCd1_B8bMDkdaT67iYx-N6FGbL_4Jat8`
      })
    );
}