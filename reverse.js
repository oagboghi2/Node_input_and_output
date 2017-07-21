const fs = require('fs');

const upperCase = fs.readFileSync('/dev/stdin')
.reverse().toString();
console.log(upperCase);
