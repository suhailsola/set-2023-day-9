console.log("LFG");

let battlefield = document.querySelector("#battlefield");
let mewtwo = document.querySelector("#mewtwo");
let cardContainer = document.querySelector(".card-container");

createBattlefield();

let startPoint = document.querySelector("#column-0");
console.log(startPoint);

// window.addEventListener("load", function () {
//   createBattlefield();
// });

function createBattlefield() {
  for (let i = 0; i < 5; i++) {
    let newRowDom = document.createElement("div");
    newRowDom.setAttribute("id", `row-${i}`);
    newRowDom.classList.add("rows");
    for (let j = 0; j < 10; j++) {
      let newBoxDom = document.createElement("div");
      newBoxDom.setAttribute("id", `column-${j}`);
      newBoxDom.classList.add("box");
      newRowDom.appendChild(newBoxDom);
    }
    battlefield.appendChild(newRowDom);
  }
}

let upDown = 5;
let leftRight = 5;

let pokemonSelection = {
  mewtwo: {
    type: "psychic",
    hp: 1000,
    loc: "./Pokemon/Assets/mewtwo.gif",
  },
  blastoise: {
    type: "water",
    hp: 800,
    loc: "./Pokemon/Assets/blastoise.gif",
  },
};

// Controller
// function moveUp() {
//   //   console.dir(mewtwo);
//   const checkStyle = getComputedStyle(mewtwo);
//   moveVertical = -100;
//   upDown = upDown + moveVertical;
//   //   console.log(checkStyle.top, checkStyle.left);
//   mewtwo.style.top = `${upDown}px`;
// }

// function moveDown() {
//   console.log("Down");
//   const checkStyle = getComputedStyle(mewtwo);
//   moveVertical = 100;
//   upDown = upDown + moveVertical;
//   //   console.log(checkStyle.top, checkStyle.left);
//   mewtwo.style.top = `${upDown}px`;
// }

// function moveLeft() {
//   console.log("Left");
//   const checkStyle = getComputedStyle(mewtwo);
//   moveHorizontal = -100;
//   leftRight = leftRight + moveHorizontal;
//   //   console.log(checkStyle.top, checkStyle.left);
//   mewtwo.style.left = `${leftRight}px`;
//   mewtwo.style.transform = "scaleX(-1)";
// }

// function moveRight() {
//   const checkStyle = getComputedStyle(mewtwo);
//   console.log("Right");
//   moveHorizontal = 100;
//   leftRight = leftRight + moveHorizontal;
//   //   console.log(checkStyle.top, checkStyle.left);
//   mewtwo.style.left = `${leftRight}px`;
//   mewtwo.style.transform = "scaleX(1)";
// }

// keyEvent move
window.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    moveUp();
  }
});

// window.addEventListener("keydown", function (event) {
//   if (event.key == "ArrowDown") {
//     moveDown();
//   }
// });

// window.addEventListener("keydown", function (event) {
//   if (event.key == "ArrowLeft") {
//     moveLeft();
//   }
// });

// window.addEventListener("keydown", function (event) {
//   if (event.key == "ArrowRight") {
//     moveRight();
//   }
// });

// pokemon blueprint

class PokemonClass {
  constructor(name, element, hp) {
    this.name = name;
    this.element = element;
    this.hp = hp;
  }

  moveUp() {
    //   console.dir(mewtwo);
    const checkStyle = getComputedStyle(mewtwo);
    moveVertical = -100;
    upDown = upDown + moveVertical;
    //   console.log(checkStyle.top, checkStyle.left);
    mewtwo.style.top = `${upDown}px`;
  }

  moveDown() {
    console.log("Down");
    const checkStyle = getComputedStyle(mewtwo);
    moveVertical = 100;
    upDown = upDown + moveVertical;
    //   console.log(checkStyle.top, checkStyle.left);
    mewtwo.style.top = `${upDown}px`;
  }
  moveLeft() {
    console.log("Left");
    const checkStyle = getComputedStyle(mewtwo);
    moveHorizontal = -100;
    leftRight = leftRight + moveHorizontal;
    //   console.log(checkStyle.top, checkStyle.left);
    mewtwo.style.left = `${leftRight}px`;
    mewtwo.style.transform = "scaleX(-1)";
  }

  moveRight() {
    const checkStyle = getComputedStyle(mewtwo);
    console.log("Right");
    moveHorizontal = 100;
    leftRight = leftRight + moveHorizontal;
    //   console.log(checkStyle.top, checkStyle.left);
    mewtwo.style.left = `${leftRight}px`;
    mewtwo.style.transform = "scaleX(1)";
  }
}

// let charizard = new Pokemon("charizard", "fire", 100);

// let startPoint = document.querySelector("#column-0");
// spawnButton
let mewTwo;

function spawnMewtwo() {
  mewTwo = new PokemonClass("Mewtwo", "Psychic", 1000);
  //   console.log(mewTwo);
  let mewTwoImg = document.createElement("img");
  mewTwoImg.setAttribute("id", "mewtwo");
  mewTwoImg.src = "./Pokemon/Assets/mewtwo.gif";

  let mewTwoCard = document.createElement("div");
  mewTwoCard.classList.add("card");
  mewTwoCard.innerText = `Name: ${mewTwo.name}
  Type: ${mewTwo.element} 
  HP: ${mewTwo.hp}`;
  startPoint.appendChild(mewTwoImg);
  cardContainer.appendChild(mewTwoCard);
  return mewTwo;
}

