const environment = 'development';
const config = require('../knexFile.js')['development'];
console.log(config);

module.exports = require('knex')(config);