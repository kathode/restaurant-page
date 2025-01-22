import "./styles.css";

const content = document.querySelector("#content");

(function () {
  const restaurantWall = document.createElement("div");

  restaurantWall.classList.add("restaurant-wall");

  content.appendChild(restaurantWall);
})();
