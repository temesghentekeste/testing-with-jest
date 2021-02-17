const { printTitle } = require('./utils')

const button = document.querySelector('button');





button.addEventListener('click', printTitle);

exports.printTitle = printTitle;
