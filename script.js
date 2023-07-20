"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function getRandomPizzaPair() {
  const pizzaPairs = [];
  for (let i = 0; i < catalogo.length; i++) {
    for (let j = i + 1; j < catalogo.length; j++) {
      pizzaPairs.push([catalogo[i], catalogo[j]]);
    }
  }
  return pizzaPairs;
}

const pizzaPairs = getRandomPizzaPair();
pizzaPairs.forEach((pair) => console.log(pair[0], "and", pair[1]));
