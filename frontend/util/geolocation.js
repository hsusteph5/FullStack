import GOOGLE_KEY from '../../config/prod_key.js';

export const getLocation = (location) => {
    return (
      $.ajax({
        method: "GET",
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_KEY}`
      })
    );
}