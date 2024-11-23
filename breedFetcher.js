const needle = require('needle');

const args = process.argv.slice(2);
const breedName = args[0];


// The API endpoint for searching breeds
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// Fetch the breed data
needle.get(url, (error, response) => {
  if (error) {
    console.log('Error:', error);
  } else {
    const body = response.body;

    if (body.length === 0) {
      console.log(`No breeds were found.`);
    } else {
      console.log(body[0].description); // Print the description of the first breed
    }
  }
});
