{
  /* <div style="text-align: center;">10</div> */
}

let div = document.querySelector("[style='text-align: center;']");

let container = document.querySelector(".container");

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
    container.style.cssText = "display: grid;";
    div.style.cssText = "display: none;";
  }
}

let counter = setInterval(countDown, 1000);

let btn = document.querySelector("button");

let overLay = document.querySelector(".overlay");

setTimeout(function () {
  overLay.style.cssText = "display: block;";
}, 7000);

btn.onclick = function () {
  overLay.remove();
};
