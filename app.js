function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
const counter = document.querySelector("#coinsCollected");
let count = 0;
moveCoin();
window.addEventListener("keydown", function (e) {
  if (e.key === "s") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop + 50}px	`;
  } else if (e.key === "w") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop - 50}px	`;
  } else if (e.key === "d") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft + 50}px	`;
    avatar.style.transform = `scale(1,1)`;
  } else if (e.key === "a") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft - 50}px	`;
    avatar.style.transform = `scale(-1,1)`;
  }
  if (isTouching(coin, avatar)) {
    count++;
    counter.innerHTML = `${count}`;
    moveCoin();
  }
});

function extractPos(currPos) {
  if (currPos === "") {
    return 100;
  }
  return parseInt(currPos);
}

function moveCoin() {
  const hor = Math.floor(Math.random() * window.innerWidth) + 5;
  const ver = Math.floor(Math.random() * window.innerHeight) + 5;
  coin.style.left = `${hor}px`;
  coin.style.top = `${ver}px`;
}
