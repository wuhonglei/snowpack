const hashsum = require("hash-sum");
const filepath = './data.js';
const id = hashsum(filepath);
console.info('id', id);