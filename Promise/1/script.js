console.log("scipt is loaded");

// orderMakanan(true).then((response) => console.log(response));
orderMakanan(false)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("Pergi kedai");
console.log("Order");
console.log("Sembang");
console.log("main phone");

// try {
//   let order = orderMakanan(true);
//   console.log(order);
// } catch (error) {
//   console.log(error);
// }

async function orderMakanan(bahan) {
  return new Promise(function (resolve, reject) {
    if (bahan) {
      setTimeout(() => {
        resolve("makanan siap");
      }, 1000);
    } else {
      reject("tak boleh masak");
    }
  });
}

fetchDefinition()
  .then(function (response) {
    console.log("resolve", response);
  })
  .catch(function (error) {
    console.log("reject", error);
  });

async function fetchDefinition() {
  let response = await fetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hihihihi"
  );
  if (!response.ok) {
    throw new Error("Invalid request");
  }
  let data = await response.json();
  console.log(data);
}
