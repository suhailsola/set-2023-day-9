console.log("js is loaded");

let searchDom = document.querySelector("#search");
let resultBox = document.querySelector(".result");

function searchWord() {
  let word = searchDom.value;
  //   check inserted word
  console.log(word);
  //   empty container and place word inside
  resultBox.innerHTML = "";
  let searchedWord = document.createElement("h3");
  searchedWord.innerHTML = word;
  resultBox.appendChild(searchedWord);

  fetchDefinition(word)
    .then(function (response) {
      console.log("resolve", response);
      let arrResp = response;
      //   console.log("Array length: ", arrResp.length);
      //   console.log(arrResp[0].meanings[0]);
      //   console.log(arrResp[0].meanings[0].definitions[0].definition);

      let definitionArray = arrResp[0].meanings[0];
      for (let i = 0; i < definitionArray.definitions.length; i++) {
        printResult(i, definitionArray.definitions[i].definition);
      }
    })
    .catch(function (error) {
      console.log("reject", error);
      alert("No definition was found");
    });
}

async function fetchDefinition(word) {
  let response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  if (!response.ok) {
    throw new Error("Cannot find the words.");
  }
  let data = response.json();
  console.log(data);
  return data;
}

function printResult(num, definition) {
  let definitionCard = document.createElement("div");
  definitionCard.classList.add("card");
  definitionCard.innerText = `${num + 1}. ${definition}`;
  resultBox.appendChild(definitionCard);
}

// enter keydown
window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    searchWord();
  }
});
