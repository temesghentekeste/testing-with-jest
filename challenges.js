// capitalize(string) takes a string and returns that string with the first character capitalize
function flCapitalize(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
};

module.exports = { flCapitalize };

