class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("Woof! Woof!");
  }

  dogInfo() {
    super.makeSound();
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");

myDog.bark();

myDog.dogInfo();
