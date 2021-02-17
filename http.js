const {default: axios} = require('axios');

const fetchData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

exports.fetchData = fetchData;
