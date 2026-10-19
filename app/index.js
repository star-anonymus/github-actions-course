const _ = require('lodash');
function greet(name) { return `Hello, ${_.capitalize(name)}!`; }
function sum(nums) { return _.sum(nums); }
module.exports = { greet, sum };
