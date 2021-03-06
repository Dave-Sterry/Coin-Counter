// const quarter = .25;
// const dime = .10;
// const nickel = .05;
// const penny = .01;


const coinCounter = (amount, obj = {}) => {
  if (isNaN(amount)) {
    return;
  }
  if (amount === 0) {
    return obj;
  } else {
    if (amount / .25 >= 1) {
      const quarters = Math.floor(amount / .25);
      obj.quarters = quarters;
      console.log(quarters);
      return coinCounter((amount - quarters * .25).toFixed(2), quarters.push = {});
    }
    else if (amount / .10 >= 1) {
      const dimes = Math.floor(amount / .10);
      obj.dimes = dimes;
      console.log(dimes);
      return coinCounter((amount - dimes * .10).toFixed(2), dimes.push = {});
    }
    else if (amount / .05 >= 1) {
      const nickels = Math.floor(amount / .05);
      obj.nickels = nickels;
      console.log(nickels);
      return coinCounter((amount - nickels * .05).toFixed(2), nickels.push = {});
    }
    else if (amount / .01 >= 1) {
      const pennies = Math.floor(amount / .01);
      obj.pennies = pennies;
      console.log(pennies);
      return coinCounter((amount - pennies * .01).toFixed(2), pennies.push = {});
    }
  }
};

coinCounter(1.83);
console.log(coinCounter());