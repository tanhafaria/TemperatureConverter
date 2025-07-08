// const readline = require("readline");

// // let value = true;
// // let value1 = "true";

// // console.log(typeof value);
// // console.log(typeof value1);

// // console.log("6" / "2");

// // var a = Math.max() < Math.min();
// // var b = Math.max() > Math.min();

// // console.log(a);
// // console.log(b);

// // var a = NaN;
// // var b = NaN;

// // console.log(a == b); // checks the value of lhs and rhs
// // console.log(a === b); // checks both the value and type of lhs and rhs

// // console.log(8 === "b");

// // console.log(!!"true" == !!"false"); // 1 -> 0 -> 1   == 0 -> 1 -> 0  false
// // console.log(!!"true" === !!"false");
// // console.log(!!"Hello" == !!"world");

// //let arr = null;
// //console.log(!arr);

// // let flower = "rose";
// // switch (flower) {
// //   case "lily":
// //     console.log("this is lily");
// //     break;
// //   case "rose":
// //     console.log("this is a rose");
// //     break;
// // }

// function tempConverter(unit, value) {
//   let result = 0;
//   if (unit === "c") {
//     result = parseFloat(value + 273);
//   } else if (unit === "k") {
//     result = parseFloat(value - 273);
//   }
//   return result;
// }

// let unitC;
// let valueNum;

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // asynchronous process
// rl.question("What are you trying to convert", (answer) => {
//   if (answer === "c" || answer === "k") {
//     unitC = answer;
//   } else {
//     console("Wrong input");
//   }
//   rl.close();
// });

// rl.question("What's the value", (answer) => {
//   if (!isNaN(answer)) {
//     valueNum = answer;
//   } else {
//     console.log("Input is not a valid number");
//   }
//   rl.close();
// });

// console.log(tempConverter(unitC, valueNum));

function tempConverter(unit, value) {
  if (unit === "c") {
    return `${value}°C is ${(value + 273.15).toFixed(2)}K`;
  } else if (unit === "k") {
    return `${value}K is ${(value - 273.15).toFixed(2)}°C`;
  } else if (unit === "") {
    return "Unknown unit. Please enter 'c' or 'k' ";
  } else {
    return "Please input a valid number";
  }
}
function convert() {
  const unit = document.getElementById("unitInput").value.trim().toLowerCase();
  const value = parseFloat(document.getElementById("valueInput").value);

  if (isNaN(value)) {
    document.getElementById("result").textContent =
      "Please enter a valid number.";
    return;
  }

  const result = tempConverter(unit, value);
  document.getElementById("result").textContent = result;
}
