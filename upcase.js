const fs = require('fs');

const upperCase = fs.readFileSync('/dev/stdin')
.toString().toUpperCase();
console.log(upperCase);
