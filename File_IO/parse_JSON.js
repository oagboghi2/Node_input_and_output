const fs =require('fs');
const obj_config = require('./obj_config.js');

fs.writeFileSync('./obj_config.js',
  fs.readFileSync('./config.json').toString()
);
console.log(obj_config);
fs.writeFileSync('./read_config.js',
  fs.readFileSync('./config.json').JSON.parse(obj_config).toString()
);
