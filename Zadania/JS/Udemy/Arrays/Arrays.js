"use strict";
/* Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK � */

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

//1
const clearJuliasArr = (arr, ...indexWithWrongData) => {
  const newArr = [...arr];
  indexWithWrongData.forEach((i) => newArr.splice(i, 1));
  return newArr;
};

//2
const correctedData = [...clearJuliasArr(dogsJulia, 0, -1, -2), ...dogsKate];

///3
function checkDogs(arr) {
  arr.forEach((v, i) => {
    v > 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${v} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });
}

//4
checkDogs(correctedData);

console.log("-----------------------------------------");
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �
function calcAverageHumanAge(ages) {
  console.log(
    ages
      .map((el) => (el <= 2 ? el * 2 : 16 + el * 4))
      .filter((el) => el >= 18)
      .reduce((acc, el) => (acc += el), 0) / ages.length
  );
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log("-----------------------------------------");
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �

// zrobione w ten sposob od razu ;)

console.log("-----------------------------------------");
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1
function foodCalculator(dogs) {
  return Math.trunc(dogs.weight ** 0.75 * 28);
}
dogs.forEach((el) => console.log(foodCalculator(el)));

//2
function checkDogEat(tooMuch, dog) {
  return tooMuch
    ? dog.curFood > foodCalculator(dog)
    : dog.curFood < foodCalculator(dog);
}

function checkFood(ownerName, dogsArr) {
  const dogInfo = dogsArr.find((el) => el.owners.includes(ownerName));
  console.log(
    `${ownerName}'s dog eat ${
      checkDogEat(true, dogInfo) ? "to much" : "too little"
    } `
  );
}
checkFood("Sarah", dogs);

// 3
function printDogOwners(tooMuch, dogs) {
  return dogs.reduce((acc, e) => {
    if (checkDogEat(tooMuch, e)) {
      acc.push(e.owners.join(" "));
    }
    return acc;
  }, []);
}

const ownersEatTooMuch = printDogOwners(true, dogs);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = printDogOwners(false, dogs);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

function printInformation(tooMuch, arr) {
  console.log(
    `${arr.reduce((acc, el) => {
      return acc + `${el.split(" ").join(" and ")} and `;
    }, "")}'s dogs eat too ${tooMuch ? "much" : "litle"}`
    //  `${arr.split().join(" and ")}'s dogs eat too ${tooMuch ? "much" : "litle"}`
  );
}

printInformation(true, ownersEatTooMuch);
printInformation(false, ownersEatTooLittle);
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

function perfectDiet(arr) {
  arr.forEach((e) => {
    console.log(e.curFood === foodCalculator(e));
  });
}

perfectDiet(dogs);
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

function okeyDiet(arr) {
  arr.forEach((e) => {
    const perfectAmount = foodCalculator(e);
    console.log(
      e.curFood * 0.9 <= perfectAmount * 0.9 && e.curFood <= perfectAmount * 1.1
    );
  });
}

okeyDiet(dogs);

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
//TODO

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
//TODO
