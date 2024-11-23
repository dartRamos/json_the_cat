const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // The API endpoint for searching breeds

  // Fetch the breed data
  needle.get(url, (error, response) => {
    if (error) {
      callback(error, null); // Pass error to the callback
    } else {
      const body = response.body;

      if (body.length === 0) {
        callback(`No breeds were found`, null); // Pass error message
      } else {
        callback(null, body[0].description); // Pass description
      }
    }
  });
};

module.exports = { fetchBreedDescription };