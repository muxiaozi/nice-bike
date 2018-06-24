const crypto = require('crypto');
const md5 = crypto.createHash('md5');

console.log(md5.update('123').digest('hex'));
