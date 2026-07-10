// using for loop
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// using while loop
const num1 = 6;
let i = 1;
console.log("\n");
while (i <= 10) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
  i++;
}

// unsing for of loop
const num2 = 7;
const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\n");

for (const n of multipliers) {
  console.log(`${num2} x ${n} = ${num2 * n}`);
}
