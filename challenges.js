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
  const user = { firstName: 'Temesghen'}
  user['lastName'] = 'Bahta'

  return user;
}

module.exports = { flCapitalize, reverseString, createUser };
