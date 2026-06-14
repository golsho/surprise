import "reveal.js/reveal.css";
import "./style.css";
import Reveal from "reveal.js";

Reveal.initialize().then(() => {
  document.querySelector(".reveal")?.classList.add("is-ready");
});
