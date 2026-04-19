const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const openMsgBtn = document.getElementById("openMsgBtn");

/* YES */
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

/* NO shrink */
let size = 18;

noBtn.addEventListener("click", () => {
  size -= 2;
  noBtn.style.fontSize = size + "px";

  if (size <= 5) {
    noBtn.style.display = "none";
  }
});

/* open message */
openMsgBtn.addEventListener("click", () => {
  page2.classList.add("hidden");
  page3.classList.remove("hidden");

  startHearts();
});

/* hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "-20px";
  heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

  page3.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function startHearts() {
  setInterval(createHeart, 300);
}
