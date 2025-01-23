import "./styles.css";
import banhMi from "./assets/banh-mi/Bánh-mì.png";

const content = document.querySelector("#content");

(function () {
  const restaurantWall = document.createElement("div");
  const restaurantWallBlobPink = document.createElement("div");
  const restaurantWallBlobGreen = document.createElement("div");

  restaurantWall.classList.add("restaurant-wall", "wall-wave");
  restaurantWallBlobPink.classList.add("restaurant-wall", "wall-blob-pink");
  restaurantWallBlobGreen.classList.add("restaurant-wall", "wall-blob-green");

  content.appendChild(restaurantWall);
  content.appendChild(restaurantWallBlobPink);
  content.appendChild(restaurantWallBlobGreen);
})();

(function () {
  const homeLink = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");
  const title = document.createElement("h1");
  const banhMiImg = document.createElement("img");
  const plateContainer = document.createElement("div");
  const container = document.createElement("div");
  const square = document.createElement("div");

  const menuPromptWrapper = document.createElement("div");
  const arrowImg = document.createElement("div");
  const prompt = document.createElement("h2");

  homeLink.textContent = "Home";
  menuLink.textContent = "Menu";
  contactLink.textContent = "Contact";
  title.textContent = "Bánh Mì Bliss";
  prompt.textContent = "Eat me";
  banhMiImg.src = banhMi;

  plateContainer.addEventListener("mouseover", () => {
    plateContainer.style.scale = 1.1;
    arrowImg.style.transform = "rotate(-50deg)";
    menuPromptWrapper.style.opacity = 1;
  });

  plateContainer.addEventListener("mouseleave", () => {
    plateContainer.style.scale = 1;
    arrowImg.style.transform = "rotate(-60deg)";
    menuPromptWrapper.style.opacity = 0;
  });

  container.classList.add("container");
  square.classList.add("square");
  title.classList.add("title");
  banhMiImg.classList.add("banh-mi-img");
  plateContainer.classList.add("plate-container");

  menuPromptWrapper.classList.add("menu-prompt-wrapper");
  prompt.classList.add("prompt");
  arrowImg.classList.add("arrow-image");

  menuPromptWrapper.appendChild(arrowImg);
  menuPromptWrapper.appendChild(prompt);

  plateContainer.appendChild(banhMiImg);
  square.appendChild(title);
  square.appendChild(plateContainer);
  square.appendChild(menuPromptWrapper);

  container.appendChild(square);
  content.appendChild(container);
})();
