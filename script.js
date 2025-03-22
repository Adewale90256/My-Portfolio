"use strict";
const hidden = document.getElementById("js-hidden");
const view = document.getElementById("js-view");
const closeBtn = document.getElementById("js-close");

hidden.addEventListener("click", () => {
  view.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  view.classList.add("hidden");
});

console.log(view);
console.log(hidden);
