// console.log('Hello KS')
const input = document.getElementById("ipt");
const btn = document.getElementById("btn");
const demo = document.getElementById("demo");
const container = document.querySelector(".container");
const clear = document.getElementById("clear");
localStorage.setItem("index", localStorage.length);
let index = localStorage.getItem("index");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inVal = input.value;
  localStorage.setItem("index", localStorage.length);
  index++;
  localStorage.setItem(`${index}`, inVal);
  let box = document.createElement("div");
  box.className = "box";
  console.log("btn clicked", inVal);
  let para = document.createElement("h2");
  para.textContent = localStorage.getItem(`${index}`);
  let image = document.createElement("img");
  image.src = "./images/trash.png";
  image.className = "deleteImage";

  if (!inVal) {
    alert("Input Is Required");
  } else {
    box.appendChild(para);
    box.appendChild(image);
    container.appendChild(box);
  }
  console.log(localStorage);
  const deleteImage = document.querySelectorAll(".deleteImage");
  deleteImage.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {});
let data = localStorage;

for (let i = 1; i <= data.length; i++) {
  let box = document.createElement("div");
  box.className = "box";
  let para = document.createElement("h2");
  para.textContent = localStorage.getItem(i);
  let image = document.createElement("img");
  image.src = "./images/trash.png";
  image.className = "deleteImage";
  box.appendChild(para);
  box.appendChild(image);
  container.appendChild(box);
  console.log(localStorage.length);
  if (box.firstChild.textContent == "") {
    box.remove();
  }
}

clear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

const deleteImage = document.querySelectorAll(".deleteImage");
deleteImage.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});
