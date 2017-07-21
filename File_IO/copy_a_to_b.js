const fs = require('fs');

fs.writeFileSync('./b.txt', fs.readFileSync('./a.txt').toString()
)
