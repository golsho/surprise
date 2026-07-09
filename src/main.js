import "reveal.js/reveal.css";
import "./style.css";
import confetti from "canvas-confetti";
import Reveal from "reveal.js";

const canvas = document.querySelector(".confetti");
const celebrate = canvas && confetti.create(canvas, {
  disableForReducedMotion: true,
  resize: true,
  useWorker: true,
});
let celebrationTimer;

function followUpBurst(delay = 700) {
  celebrationTimer = setTimeout(() => {
    celebrate({ particleCount: 45, angle: 60, spread: 55, origin: { x: 0, y: 0.85 } });
    celebrate({ particleCount: 45, angle: 120, spread: 55, origin: { x: 1, y: 0.85 } });
    if (delay < 2700) followUpBurst(delay + 500);
  }, delay);
}

function celebrateBirthday() {
  if (!celebrate) return;

  clearTimeout(celebrationTimer);
  celebrate({ particleCount: 300, spread: 120, startVelocity: 60, origin: { x: 0.15, y: 0.85 } });
  celebrate({ particleCount: 300, spread: 120, startVelocity: 60, origin: { x: 0.85, y: 0.85 } });
  followUpBurst();
}

Reveal.initialize({
  controls: false,
  disableLayout: true,
  hash: true,
  mouseWheel: true,
  progress: false,
  transition: "slide",
}).then(() => {
  document.querySelector(".reveal")?.classList.add("is-ready");
  if (Reveal.getCurrentSlide()?.classList.contains("birthday-slide")) celebrateBirthday();
});

Reveal.on("slidetransitionend", ({ currentSlide }) => {
  if (currentSlide.classList.contains("birthday-slide")) celebrateBirthday();
});

Reveal.on("slidechanged", ({ currentSlide }) => {
  if (!currentSlide.classList.contains("birthday-slide")) clearTimeout(celebrationTimer);
});
