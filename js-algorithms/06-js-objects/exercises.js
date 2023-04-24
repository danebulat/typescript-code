// ADDING A PROPERTY TO AN OBJECT -------------------

var emptyJSObj = {};
emptyJSObj['exampleKey'] = 'exampleValue';
emptyJSObj.exampleKey = 'exampleValue';


// DEFINING A CLASS ---------------------------------

function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
}

Animal.prototype.sayAnimalType = function() {
  console.log(this.animalType);
}

// Dog class inherits Animal
function Dog(name) {
  // call() - copy properties
  // Used to invoke (call) a method with an 
  // owner object as an argument
  Animal.call(this, name, "Dog");
}

// copy over the methods
Dog.prototype = Object.create(Animal.prototype);

var myAnimal = new Animal("ditto", "pokemon");
myAnimal.sayName();
myAnimal.sayAnimalType();

var myDog = new Dog("candy");
myDog.sayName();
myDog.sayAnimalType();

