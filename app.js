"use strict";

const dice = document.querySelector("button");

function fetchAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(
        ".advice-id"
      ).innerHTML = `ADVICE #${data.slip.id}`;
      document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`;
    });
}
dice.addEventListener("click", fetchAdvice);

fetchAdvice();
