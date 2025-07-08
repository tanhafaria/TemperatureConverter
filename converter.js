const readline = require("readline");

let unitC;
let valueNum;

let tempConverter = (unit, value) => {
  if (unit === "c") {
    return `${value}°C is ${value + 273}K`;
  } else if (unit === "k") {
    return `${value}K is ${value - 273}°C`;
  } else {
    return "Unknown unit";
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What are you trying to convert (c/k) ?", (answer1) => {
  if (answer1 === "c" || answer1 === "k") {
    unitC = answer1;
    rl.question("What's the value", (answer2) => {
      if (!isNaN(answer2)) {
        valueNum = parseFloat(answer2);
        console.log(tempConverter(unitC, valueNum));
        process.exit(0);
      } else {
        console.log("Input is not a valid number");
      }
    });
  } else {
    console.log("wrong input");
    rl.close();
  }
});

//getElementById
