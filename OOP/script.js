console.log("hello world");

// const array = [1, 2, 3, 4, 5];

// // declaration function
// // hoisting
// // 'this' statement
// function Test() {
//   console.log(this);
// }

// // expression
// const TestExp = () => {};

// // initialize a pokemon blueprint
// function Pokemon(name, element, hp) {
//   this.name = name;
//   this.element = element;
//   this.hp = hp;
// }

// function Digimon(name, element, hp) {
//   this.name = name;
//   this.element = element;
//   this.hp = hp;
// }

// Pokemon.prototype.attack = function (opponent) {
//   if (opponent instanceof Pokemon) {
//     opponent.hp = opponent.hp - 10;
//     console.log("attack");
//   } else {
//     console.log("attack can only be used on the same class");
//   }
// };

// Pokemon.prototype.revive = function () {
//   this.hp = this.hp + 10;
//   console.log(this.hp);
// };
// // create a new instance
// // 'new' statement

// Digimon.prototype.attack = function (opponent) {
//   opponent.hp = opponent.hp - 10;
//   console.log("attack");
// };

// Digimon.prototype.revive = function () {
//   this.hp = this.hp + 10;
//   console.log(this.hp);
// };

// ES6 syntax
function Pokemon(name, element, hp) {
  this.name = name;
  this.element = element;
  this.hp = hp;
}

Pokemon.prototype.attack = function (opponent) {
  if (opponent instanceof Pokemon) {
    opponent.hp = opponent.hp - 10;
    console.log("attack");
  } else {
    console.log("attack can only be used on the same class");
  }
};

Pokemon.prototype.revive = function () {
  this.hp = this.hp + 10;
  console.log(this.hp);
};

class PokemonClass {
  constructor(name, element, hp) {
    this.name = name;
    this.element = element;
    this.hp = hp;
  }

  attack(opponent) {
    if (opponent instanceof Pokemon) {
      opponent.hp = opponent.hp - 10;
      console.log("attack");
    } else {
      console.log("attack can only be used on the same class");
    }
  }

  revive() {
    this.hp = this.hp + 10;
    console.log(this.hp);
  }
}
