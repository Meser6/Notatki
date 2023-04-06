/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

function Human(name, mass, height) {
    this.name = name, 
    this.mass = mass, 
    this.height = height,
    this.BMI = this.mass / this.height ** 2
}

function compareBMI(firstHuman, secondHuman){
    if(firstHuman.BMI > secondHuman.BMI){
        console.log(`${firstHuman.name}'s BMI (${firstHuman.BMI}) is higher then ${secondHuman.name}'s (${secondHuman.BMI})`)
    } else if (firstHuman.BMI == secondHuman.BMI){
        console.log(`${firstHuman.name}'s BMI (${firstHuman.BMI}) is the same as ${secondHuman.name}'s (${secondHuman.BMI})`)
    } else {
        console.log(`${secondHuman.name}'s BMI (${secondHuman.BMI}) is higher then ${firstHuman.name}'s (${firstHuman.BMI})`)
    }
}

const Mark = new Human('Mark', 78, 1.69)
const John = new Human('John', 92, 1.95)

compareBMI(Mark, John)
