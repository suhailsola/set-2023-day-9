let battlefield = document.querySelector("#battlefield");
let cardContainer = document.querySelector(".card-container");

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

createBattlefield();

let startPoint = document.querySelector("#column-0");
console.log(startPoint);

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

// Pokemon blueprint

class PokemonClass {
  constructor(name, element, hp) {
    this.name = name;
    this.element = element;
    this.hp = hp;
  }

  attack(opponent) {
    opponent.hp -= 100;
  }
}

function spawnMewtwo() {
  mewTwo = new PokemonClass("Mewtwo", "Psychic", 1000);
  //   console.log(mewTwo);
  mewTwoImg = document.createElement("img");
  mewTwoImg.setAttribute("id", "player");
  mewTwoImg.src = "./Pokemon/Assets/mewtwo.gif";
  mewTwoImg.setAttribute(
    "style",
    "position:absolute;height: 90px;width:90px;top:5px;left:5px"
  );

  mewTwoCard = document.createElement("div");
  mewTwoCard.classList.add("card");
  mewTwoCard.innerText = `Name: ${mewTwo.name}
  Type: ${mewTwo.element} 
  HP  : ${mewTwo.hp}`;
  //   create attack button
  attBtn = document.createElement("button");
  attBtn.setAttribute("id", "attack");
  attBtn.innerText = "Attack";
  // attack function
  attBtn.addEventListener("click", function () {
    // alert("Attack!");
    mewtwoAttack();
  });

  startPoint.appendChild(mewTwoImg);
  cardContainer.appendChild(mewTwoCard);
  cardContainer.appendChild(attBtn);
  console.log(mewTwoImg);
  return mewTwo, mewTwoImg, attBtn;
}

function spawnBlastoise() {
  blastoise = new PokemonClass("Blastoise", "Water", 800);
  blastoiseImg = document.createElement("img");
  blastoiseImg.setAttribute("id", "player");
  blastoiseImg.src = "./Pokemon/Assets/blastoise.gif";
  blastoiseImg.setAttribute(
    "style",
    "position:absolute;height: 90px;width:90px;top:405px;left:905px"
  );

  blastoiseCard = document.createElement("div");
  blastoiseCard.classList.add("card");
  blastoiseCard.innerText = `Name: ${blastoise.name}
  Type: ${blastoise.element} 
  HP  : ${blastoise.hp}`;
  //   create attack button
  attBtn = document.createElement("button");
  attBtn.setAttribute("id", "attack");
  attBtn.innerText = "Attack";
  // attack function

  attBtn.addEventListener("click", function () {
    // alert("Attack!");
    blastoiseAttack();
  });

  startPoint.appendChild(blastoiseImg);
  cardContainer.appendChild(blastoiseCard);
  cardContainer.appendChild(attBtn);
  console.log(blastoiseImg);
  return blastoise, blastoiseImg, attBtn;
}

// mewtwo movement

function moveUp() {
  let playerPosition = mewTwoImg.style.top.replace("px", "");
  if (playerPosition <= 5) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) - 100;
    console.log(playerPosition);
    mewTwoImg.style.top = `${playerPosition}px`;
    // console.log(mewTwoImg);
  }
}

function moveDown() {
  let playerPosition = mewTwoImg.style.top.replace("px", "");
  if (playerPosition >= 405) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) + 100;
    console.log(playerPosition);
    mewTwoImg.style.top = `${playerPosition}px`;
    // console.log(mewTwoImg);
  }
}

function moveLeft() {
  let playerPosition = mewTwoImg.style.left.replace("px", "");
  if (playerPosition <= 100) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) - 100;
    console.log(playerPosition);
    mewTwoImg.style.left = `${playerPosition}px`;
    // console.log(mewTwoImg);
  }
}

function moveRight() {
  let playerPosition = mewTwoImg.style.left.replace("px", "");
  if (playerPosition >= 900) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) + 100;
    console.log(playerPosition);
    mewTwoImg.style.left = `${playerPosition}px`;
    // console.log(mewTwoImg);
  }
}

// blastoise movement

function moveUpBlastoise() {
  let playerPosition = blastoiseImg.style.top.replace("px", "");
  if (playerPosition <= 5) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) - 100;
    console.log(playerPosition);
    blastoiseImg.style.top = `${playerPosition}px`;
    // console.log(blastoiseImg);
  }
}

function moveDownBlastoise() {
  let playerPosition = blastoiseImg.style.top.replace("px", "");
  if (playerPosition >= 405) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) + 100;
    console.log(playerPosition);
    blastoiseImg.style.top = `${playerPosition}px`;
    // console.log(blastoiseImg);
  }
}

function moveLeftBlastoise() {
  let playerPosition = blastoiseImg.style.left.replace("px", "");
  if (playerPosition <= 100) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) - 100;
    console.log(playerPosition);
    blastoiseImg.style.left = `${playerPosition}px`;
    // console.log(blastoiseImg);
  }
}

function moveRightBlastoise() {
  let playerPosition = blastoiseImg.style.left.replace("px", "");
  if (playerPosition >= 900) {
    playerPosition;
    console.log("Do nothing");
  } else {
    playerPosition = Number(playerPosition) + 100;
    console.log(playerPosition);
    blastoiseImg.style.left = `${playerPosition}px`;
    // console.log(blastoiseImg);
  }
}

// key events
window.addEventListener("keydown", function (event) {
  //   btnFunction = document.querySelectorAll("#attack");
  //   console.log(btnFunction);
  if (event.key == "w") {
    moveUp();
  }

  if (event.key == "s") {
    moveDown();
  }
  if (event.key == "a") {
    moveLeft();
  }
  if (event.key == "d") {
    moveRight();
  }
  if (event.key == "ArrowUp") {
    moveUpBlastoise();
  }
  if (event.key == "ArrowDown") {
    moveDownBlastoise();
  }
  if (event.key == "ArrowLeft") {
    moveLeftBlastoise();
  }
  if (event.key == "ArrowRight") {
    moveRightBlastoise();
  }
  checkRange();
});

// check range between pokemon

function checkRange() {
  let mewTwoTopPosition = mewTwoImg.style.top.replace("px", "");
  let blastoiseTopPosition = blastoiseImg.style.top.replace("px", "");
  let mewTwoLeftPosition = mewTwoImg.style.left.replace("px", "");
  let blastoiseLeftPosition = blastoiseImg.style.left.replace("px", "");
  btnFunction = document.querySelectorAll("#attack");
  if (
    blastoiseTopPosition - mewTwoTopPosition <= 100 &&
    blastoiseLeftPosition - mewTwoLeftPosition <= 100
  ) {
    for (let i = 0; i < btnFunction.length; i++) {
      btnFunction[i].disabled = false;
      console.log("Can attack");
    }
  } else {
    for (let i = 0; i < btnFunction.length; i++) {
      btnFunction[i].disabled = true;
      console.log("Out of range");
    }
  }
}

function mewtwoAttack() {
  if (blastoise.hp === 100) {
    alert("Mewtwo wins");
    location.reload();
  }
  mewTwo.attack(blastoise);
  blastoiseCard.innerText = `Name: ${blastoise.name}
  Type: ${blastoise.element} 
  HP  : ${blastoise.hp}`;
}

function blastoiseAttack() {
  if (mewTwo.hp === 100) {
    alert("Blastoise wins");
    location.reload();
  }
  blastoise.attack(mewTwo);
  mewTwoCard.innerText = `Name: ${mewTwo.name}
  Type: ${mewTwo.element} 
  HP  : ${mewTwo.hp}`;
}
