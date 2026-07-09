import "reveal.js/reveal.css";
import "./style.css";
import Reveal from "reveal.js";

Reveal.initialize({
  controls: false,
  disableLayout: true,
  hash: true,
  mouseWheel: true,
  progress: false,
  transition: "slide",
}).then(() => {
  document.querySelector(".reveal")?.classList.add("is-ready");
});
