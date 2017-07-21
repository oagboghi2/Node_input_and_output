const fs = require('fs')
console.log('passthrough.js start')
console.log(fs.readFileSync('/dev/stdin').toString())
console.log('passthrough.js end')
