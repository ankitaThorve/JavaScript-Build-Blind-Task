// Tip Calculator
// Tip = Bill * Tip%/100
// Total Bill =  Bill + Tip

// Variable declaration
const billAmount = 50.0;
const tipPercentage = 15;
const numberOfPeople = 2;

// to conver percentage in decimal
const tipFraction = tipPercentage / 100;
console.log(tipFraction);

// to find total tip
const totalTip = billAmount * tipFraction;
console.log(totalTip);

// to find overAll bill
const totalBill = billAmount + totalTip;
console.log(totalBill);

// to split the bill
const amountPerPerson = totalBill / numberOfPeople;
console.log(amountPerPerson);

console.log(`Total Tip: ${totalTip.toFixed(2)}`);
console.log(`Total Bill: ${totalBill.toFixed(2)}`);
console.log(`Per Person: ${amountPerPerson.toFixed(2)}`);
