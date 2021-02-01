// const quarter = .25;
// const dime = .10;
// const nickel = .05;
// const penny = .01;

// const coinCounter = (amount, obj = {}) => {
//   if (NaN(amount)) {
//     return;
//   }
//   if (amount === 0) {
//     return obj;
//   } else {
//     if (amount / .25 >= 1) {
//       const quarters = Math.floor(amount / .25);
//       obj.quarters = quarters;
//       console.log(coinCounter(.75))
//       return coinCounter((amount - quarters * .25).toFixed(2), {});
//     }
//     else if (amount / .10 >= 1) {
//       const dimes = Math.floor(amount / .10);
//       obj.dimes = dimes;
//       return coinCounter((amount - dimes * .10).toFixed(2), {});
//     }
//     else if (amount / .05 >= 1) {
//       const nickels = Math.floor(amount / .05);
//       obj.nickels = nickels;
//       return coinCounter((amount - nickels * .05).toFixed(2), {});
//     }
//     else if (amount / .01 >= 1) {
//       const pennies = Math.floor(amount / .01);
//       obj.pennies = pennies;
//       return coinCounter((amount - pennies * .01).toFixed(2), {});
//     }
//   }
// }



// const recursiveExample = (thing) => {
//   if (someErrorHandling(thing)) {
//     return false;
//   }
//   if (thing == "someEndingState") {
//     return thing;
//   } else {
//     return recursiveExample("someEndingState");
//   }
// }

// const myArr = [5];
// myArr.push(4);
// myArr[0] = 3;
// myArr = [3,4];

// console.log(coinCounter(1.25))