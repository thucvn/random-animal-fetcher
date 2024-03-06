// index.js
const axios = require('axios');
const figlet = require('figlet');

const fetchRandomDog = async () => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const dogImage = response.data.message;
    console.log(`Random Dog Image: ${dogImage}`);
  } catch (error) {
    console.error('Error fetching random dog image:', error.message);
  }
};

const displayAsciiCat = () => {
  figlet('Meow!', (err, data) => {
    if (err) {
      console.error('Error displaying ASCII cat art:', err);
      return;
    }
    console.log(data);
  });
};

module.exports = {
  fetchRandomDog,
  displayAsciiCat,
};
