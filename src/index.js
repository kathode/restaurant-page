import "./styles.css";
import banhMi from "./assets/banh-mi/Bánh-mì.png";
import { BanhMiSources } from "./banhmi";

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
  const title = document.createElement("h1");
  const banhMiImg = document.createElement("img");

  const banhMiElements = BanhMiSources.map((image) => {
    const img = document.createElement("img");
    const imgWrapper = document.createElement("div");
    const card = document.createElement("div");
    const textContainer = document.createElement("div");

    const westernName = document.createElement("div");
    const vietName = document.createElement("div");
    const price = document.createElement("div");

    img.src = image.src;
    westernName.textContent = image.westernName;
    vietName.textContent = image.vietName;
    price.textContent = `$${image.price}`;
    img.classList.add("banh-mi-image");
    imgWrapper.classList.add("banh-mi-image-wrapper");
    textContainer.classList.add("text-container");
    price.classList.add("banh-mi-price");
    westernName.classList.add("banh-mi-western-name");
    vietName.classList.add("banh-mi-viet-name");
    card.classList.add("card");

    imgWrapper.append(img);
    textContainer.append(westernName, vietName, price);
    card.append(imgWrapper, textContainer);

    card.addEventListener("mouseenter", () => {
      img.style.filter = "brightness(1.1)";
      img.style.transform = "scale(1.05) translate(-5%, -5%)";
    });

    card.addEventListener("mouseleave", () => {
      img.style.filter = "brightness(0.8)";
      img.style.transform = "scale(0.9) translate(-5%, -5%)";
    });

    return card;
  });

  const plateContainer = document.createElement("div");
  const plateOutline = document.createElement("div");
  const container = document.createElement("div");
  const square = document.createElement("div");

  const contactContainer = document.createElement("div");
  const contactOrange = document.createElement("div");
  const contactPhoneImage = document.createElement("div");

  const menuPromptWrapper = document.createElement("div");
  const menuList = document.createElement("div");
  const menuListExitButton = document.createElement("button");
  const arrowImg = document.createElement("div");
  const prompt = document.createElement("h2");

  title.textContent = "Bánh Mì Bliss";
  prompt.textContent = "Eat me";
  banhMiImg.src = banhMi;
  menuListExitButton.textContent = "x";

  plateOutline.addEventListener("mouseover", () => {
    plateOutline.style.scale = 1.1;
    arrowImg.style.transform = "rotate(-55deg)";
    menuPromptWrapper.style.opacity = 1;
  });

  plateOutline.addEventListener("mouseleave", () => {
    plateOutline.style.scale = 1;
    arrowImg.style.transform = "rotate(-60deg)";
    menuPromptWrapper.style.opacity = 0;
  });

  plateOutline.addEventListener("click", () => {
    menuList.style.display = "grid";
  });

  menuListExitButton.addEventListener("click", () => {
    menuList.style.display = "none";
  });

  container.classList.add("container");
  square.classList.add("square");
  title.classList.add("title");
  banhMiImg.classList.add("banh-mi-img");
  plateContainer.classList.add("plate-container");
  plateOutline.classList.add("plate-outline");
  contactContainer.classList.add("contact-container");
  menuList.classList.add("menu-list");
  menuListExitButton.classList.add("menu-list-exit-button");

  contactOrange.classList.add("contact-orange");
  contactPhoneImage.classList.add("contact-phone-image");

  menuPromptWrapper.classList.add("menu-prompt-wrapper");
  prompt.classList.add("prompt");
  arrowImg.classList.add("arrow-image");

  menuPromptWrapper.appendChild(arrowImg);
  menuPromptWrapper.appendChild(prompt);

  contactContainer.appendChild(contactOrange);
  contactContainer.appendChild(contactPhoneImage);

  plateOutline.appendChild(banhMiImg);
  square.appendChild(contactContainer);
  plateContainer.appendChild(plateOutline);
  square.appendChild(title);
  square.appendChild(plateContainer);
  square.appendChild(menuPromptWrapper);

  container.appendChild(square);
  content.appendChild(container);

  menuList.append(...banhMiElements, menuListExitButton);
  content.appendChild(menuList);
})();
