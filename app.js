"use strict";

fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".advice-id").innerHTML = data.slip.id;
    document.querySelector(".advice").innerHTML = data.slip.advice;
  });
