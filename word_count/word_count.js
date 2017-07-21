const fs = require('fs')
const numberOfWords = fs.readFileSync('/dev/stdin')
  .toString()
  .split(/\s+/)
  .length
console.log(numberOfWords+' words')
