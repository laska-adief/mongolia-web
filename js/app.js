const headeEl = document.querySelector("header");
const toggleBtn = document.querySelector(".toggleMenu");
const linksMenu = document.querySelector(".links");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBtn.classList.toggle("active");
  linksMenu.classList.toggle("active");
});

let bg = 1;
function changeBg() {
  headeEl.style.backgroundImage = `url('../dist/img/bg${bg}.jpg')`;

  bg++;

  if (bg === 4) bg = 1;
}

window.setInterval(changeBg, 5000);
