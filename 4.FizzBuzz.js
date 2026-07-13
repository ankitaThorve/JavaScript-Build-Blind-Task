// with parameter
function runFizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(runFizzBuzz(15)); //argument passedm with limit

// Returning an array ----
function getFizzBuzzArray(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(getFizzBuzzArray(15));

// Fully customised parameters
function customeFizzBuzz(start, end, word1, divisor1, word2, divisor2) {
  for (let i = start; i <= end; i++) {
    let customeOutput = "";
    if (i % divisor1 === 0) customeOutput += word1;
    if (i % divisor2 === 0) customeOutput += word2;
    console.log(customeOutput || i);
  }
}

console.log(customeFizzBuzz(1, 10, "fuzz", 7, "zoo", 2));
