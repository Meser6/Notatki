// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

function Car(make, speed) {
  this.make = make;
  this.speed = `${speed} km/h`;
}

Car.prototype.accelerate = function () {
  this.speed = `${Number(this.speed.replace(" km/h", "")) + 10} km/h`;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed = `${Number(this.speed.replace(" km/h", "")) - 5} km/h`;
  console.log(this.speed);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw, mercedes);
bmw.accelerate();
console.log(bmw, mercedes);
mercedes.break();
console.log(bmw, mercedes);
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

console.log("------------------------------------");
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = `${speed} km/h`;
  }

  accelerate() {
    this.speed = `${Number(this.speed.replace(" km/h", "")) + 10} km/h`;
    console.log(this.speed);
  }

  break() {
    this.speed = `${Number(this.speed.replace(" km/h", "")) - 5} km/h`;
    console.log(this.speed);
    return this;
  }

  get speedUs() {
    return `${Number(this.speed.replace(" km/h", "")) * 1.6} mi/h`;
  }

  set speedUs(speed) {
    this.speed = `${Number(this.speed.replace(" km/h", "")) * 1.6} mi/h`;
  }
}

const ford = new CarCL("Ford", 120);
console.log(ford.speedUs);
ford.break();
ford.accelerate();
ford.speedUs = 100;
console.log(ford.speed);
console.log("------------------------------------");
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = `${charge} %`;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = `${chargeTo} %`;
};

EV.prototype.accelerate = function () {
  this.speed = `${Number(this.speed.replace(" km/h", "")) + 20} km/h`;
  this.charge = `${Number(this.charge.replace(" %", "")) - 1} %`;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};
const tesla = new EV("Tesla", 120, 23);

console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
console.log(tesla);
tesla.break();
console.log(tesla);

console.log("------------------------------------");
// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = `${speed} km/h`;
//   }

//   accelerate() {
//     this.speed = `${Number(this.speed.replace(" km/h", "")) + 10} km/h`;
//     console.log(this.speed);
//   }

//   break() {
//     this.speed = `${Number(this.speed.replace(" km/h", "")) - 5} km/h`;
//     console.log(this.speed);
//   }

//   get speedUs() {
//     return `${Number(this.speed.replace(" km/h", "")) * 1.6} mi/h`;
//   }

//   set speedUs(speed) {
//     this.speed = `${Number(this.speed.replace(" km/h", "")) * 1.6} mi/h`;
//   }
// }
class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed, charge);
    this.#charge = `${charge} %`;
  }
  chargeBattery(chargeTo) {
    this.#charge = `${chargeTo} %`;
    return this;
  }
  accelerate() {
    this.speed = `${Number(this.speed.replace(" km/h", "")) + 20} km/h`;
    this.#charge = `${Number(this.#charge.replace(" %", "")) - 1} %`;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}`
    );
    return this;
  }
}

const rivian = new EVCL("Rivian", 120, 23);

rivian.chargeBattery(50).accelerate().accelerate().break();

console.log(rivian);
