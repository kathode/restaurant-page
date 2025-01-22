import "./styles.css";

const content = document.querySelector("#content");

(function () {
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");
  const restaurantWall = document.createElement("div");
  const restaurantWallBlobPink = document.createElement("div");
  const restaurantWallBlobGreen = document.createElement("div");

  restaurantWall.classList.add("restaurant-wall", "wall-wave");
  restaurantWallBlobPink.classList.add("restaurant-wall", "wall-blob-pink");
  restaurantWallBlobGreen.classList.add("restaurant-wall", "wall-blob-green");
  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";

  content.appendChild(restaurantWall);
  content.appendChild(restaurantWallBlobPink);
  content.appendChild(restaurantWallBlobGreen);
  content.appendChild(homeLink);
  content.appendChild(menuLink);
  content.appendChild(contactLink);
})();
