const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const paragraph = document.querySelectorAll(".paragraph");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    paragraph[i].classList.toggle("hidden");
  });
}
for (let i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", function () {
    plus[i].classList.toggle("hidden");
    minus[i].classList.toggle("hidden");
    paragraph[i].classList.toggle("hidden");
  });
}

// console.log("script loaded");
