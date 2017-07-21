const command = process.argv[2];
const string = process.argv[3];

switch(command){
  case "reverse":
  console.log(string.split(' ').reverse().join(''))
  break;

  case "upcase":
  console.log(string.toUpperCase());
  break;

  case "capitalize":
  console.log(string.toLowerCase().split(/\s+/).map(w => w[0].toUpperCase()+w.slice(1)).join(' ')
  )
    break;
}
