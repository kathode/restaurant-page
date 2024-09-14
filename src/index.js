import "./styles.css";
import * as Tiles from "./tiles";

const content = document.querySelector("#content");

(function () {
  const restaurantWall = document.createElement("div");
  const restaurantWallTile = document.createElement("div");
  const restaurantWallWoodSlat = document.createElement("div");
  const restaurantWallBeam = document.createElement("div");

  restaurantWall.classList.add("restaurant-wall");
  restaurantWallTile.classList.add("restaurant-wall-tile");
  restaurantWallWoodSlat.classList.add("restaurant-wall-wood-slat");
  restaurantWallBeam.classList.add("restaurant-wall-beam");

  for (let slat = 0; slat < window.innerWidth; slat += 18) {
    const woodSlat = document.createElement("div");
    const woodStyle = Math.floor(Math.random() * (5 - 1) + 1);

    woodSlat.classList.add(`wood-slat`);
    woodSlat.classList.add(`wood-slat-${woodStyle}`);
    restaurantWallWoodSlat.appendChild(woodSlat);
  }

  for (let tileRow = 0; tileRow < 3; tileRow++) {
    const tr = document.createElement("div");
    tr.classList.add("tile-row");

    for (let tile = 0; tile < window.innerWidth; tile += 150) {
      const tilePiece = document.createElement("img");
      const tileVariant = Math.floor(Math.random() * (7 - 1) + 1);

      tilePiece.setAttribute("src", Tiles[`Tile${tileVariant}`]);
      tilePiece.classList.add("tile");
      tr.appendChild(tilePiece);
    }

    restaurantWallTile.appendChild(tr);
  }

  restaurantWall.appendChild(restaurantWallWoodSlat);
  restaurantWall.appendChild(restaurantWallBeam);
  restaurantWall.appendChild(restaurantWallTile);
  content.appendChild(restaurantWall);
})();
