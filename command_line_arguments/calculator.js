const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

switch(command){
  case "add":
  //arg1.split(' ')
  console.log(parseInt(arg1, 10) + parseInt(arg2, 10));
  break;
  case "subtract":
  console.log(parseInt(arg1, 10) - parseInt(arg2, 10));
  break;
  case "multiply":
  console.log(parseInt(arg1, 10) * parseInt(arg2, 10));
  break;
  case "divide":
  console.log(parseInt(arg1, 10) / parseInt(arg2, 10));
  break;
}

//console.log(arg1);
// console.log("test", arg1);
// console.log(process.argv);
