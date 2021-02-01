const quarter = .25;
const dime = .10;
const nickel = .05;
const penny = .01;

const coinCounter = (counter) => {
  if (NaN(counter)) {
    return;
  }
  if (counter >= 5.00) {
    return counter;
  } else {
    if (counter % quarter > 0) {
      return counter / .25;
      return coinCounter
    }
  }
}



// const incrementCounter = (counter) => {
//     // This is the termination condition.
//     if (isNaN(counter)) {
//       return;
//     }
//     if (counter >= 3) {
//       return counter;
//     } else {
//       console.log(counter);
//       return incrementCounter(counter + 1);
//     }
//   }