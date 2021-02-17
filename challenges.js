const { default: axios } = require('axios');

// capitalize(string) takes a string and returns that string with the first character capitalize
function flCapitalize(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

// reverseString(string) takes a string and returns it reversed.
function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

// creating an object
const createUser = () => {
  const user = { firstName: 'Temesghen' };
  user['lastName'] = 'Bahta';

  return user;
};

// fetch user
const fetchUser = async () => {
  const response = await axios('http://jsonplaceholder.typicode.com/users/1');

  if (response.status !== 200) {
    throw new Error('Error: Unable to fetch data!');
  }

  const data = await response.data;
  return data;
};

module.exports = { flCapitalize, reverseString, createUser, fetchUser };
