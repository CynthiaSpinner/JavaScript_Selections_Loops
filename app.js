console.log("Hello World!\n==========\n");

console.log("EXERCISE 1:\n==========\n");

console.log(`Odd numbers from 1 - 100:`);
console.log(`-------------------------`);
// Exercise 1 Section
for (let n = 1; n <= 99; n++) {
  if (n % 2 != 0) {
    console.log(n);
  }
}

console.log("EXERCISE 2:\n==========\n");
console.log(`FIZZBUZZ \n---------------`);
// Exercise 2 Section
for (let n = 1; n <= 100; n++) {
  if (n % 5 == 0 && n % 3 == 0) {
    console.log(`FIZZBUZZ ${n}`);
  } else if (n % 5 == 0) {
    console.log(`BUZZ ${n}`);
  } else if (n % 3 == 0) {
    console.log(`FIZZ ${n}`);
  }
}

console.log("EXERCISE 3:\n==========\n");

let n = 0;

while (n <= 99) {
  n++;

  if (n % 2 != 0) {
    console.log(n);
  }
}

n = 0;
do {
  if (n % 5 == 0 && n % 3 == 0) {
    console.log(`FIZZBUZZ ${n}`);
  } else if (n % 5 == 0) {
    console.log(`BUZZ ${n}`);
  } else if (n % 3 == 0) {
    console.log(`FIZZ ${n}`);
  }
  n++;
} while (n <= 100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round(Math.random() * 500);
// creates a random number between 0 and 500
n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
  if (i == value) {
    console.log(`Found value!`);
    break;
  }
  if (i == n) {
    console.log(`Did not find value`);
  }
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1); // should be 10 to a thousand
let start = Math.round(Math.random() * (10 - 1) + 1); // if this number is greater then n
// loop will never run
for (; start <= n; start++) {
  if (start % fizzDivisor == 0 && start % buzzDivisor == 0) {
    console.log(`FIZZBUZZ ${start}`);
  } else if (start % fizzDivisor == 0) {
    console.log(`FIZZ ${start}`);
  } else if (start % buzzDivisor == 0) {
    console.log(`BUZZ ${start}`);
  }
}
