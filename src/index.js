import "./styles.css";
import svg from "./assets/wave-haikei.svg";

const content = document.querySelector("#content");

(function () {
  const restaurantWall = document.createElement("div");
  const backgroundSvg = document.createElement("img");

  restaurantWall.classList.add("restaurant-wall");
  backgroundSvg.src = svg;
  restaurantWall.appendChild(backgroundSvg);
  content.appendChild(restaurantWall);
})();
