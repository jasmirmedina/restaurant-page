import { createElement } from "./create-element";

import CMIMG from "../../assets/images/coffee-mocha.jpg";
import EAIMG from "../../assets/images/expresso-americano.jpg";
import CPPIMG from "../../assets/images/cappuccino.jpg";
import CSIMG from "../../assets/images/caramel-shake.jpg";
import MSIMG from "../../assets/images/mocha-shake.jpg";
import LVIMG from "../../assets/images/lavender-shake.jpg";

const menu = createElement("div", "menu");

const categories = createElement("div", "categories");
const categoriesDivText = createElement("div");
const categoriesDivTextFirstText = createElement("p", "", "Top Categories");
const categoriesDivTextSecondText = createElement("p", "", "Explore The Recent Most Bought Drinks This Week");

const coffees = createElement("div", "coffees");

const coffeeItems = [
  { img: CMIMG, text: "Coffee Mocha" },
  { img: EAIMG, text: "Expresso Americano" },
  { img: CPPIMG, text: "Cappuccino" },
];

coffeeItems.forEach(({ img, text }) => {
  const coffeeDiv = createElement("div");
  const coffeeImg = createElement("img");
  coffeeImg.src = img;
  coffeeImg.width = 200;
  const overlay = createElement("div", "overlay", text);

  coffeeDiv.appendChild(coffeeImg);
  coffeeDiv.appendChild(overlay);
  coffees.appendChild(coffeeDiv);
});

categoriesDivText.appendChild(categoriesDivTextFirstText);
categoriesDivText.appendChild(categoriesDivTextSecondText);
categories.appendChild(categoriesDivText);
categories.appendChild(coffees);

const milkShakes = createElement("div", "milk-shakes");
const milkShakesDivText = createElement("div");
const milkShakesDivTextFirstText = createElement("p", "", "Top Milk Shakes");
const milkShakesDivTextSecondText = createElement("p", "", "Explore The Recent Most Bought Shakes This Week");

const shakes = createElement("div", "shakes");

const shakeItems = [
  { img: CSIMG, text: "Caramel Shake" },
  { img: MSIMG, text: "Mocha Shake" },
  { img: LVIMG, text: "Lavender Shake" },
];

shakeItems.forEach(({ img, text }) => {
  const shakeDiv = createElement("div");
  const shakeImg = createElement("img");
  shakeImg.src = img;
  shakeImg.width = 200;
  const overlay = createElement("div", "overlay", text);

  shakeDiv.appendChild(shakeImg);
  shakeDiv.appendChild(overlay);
  shakes.appendChild(shakeDiv);
});

milkShakesDivText.appendChild(milkShakesDivTextFirstText);
milkShakesDivText.appendChild(milkShakesDivTextSecondText);
milkShakes.appendChild(milkShakesDivText);
milkShakes.appendChild(shakes);

menu.appendChild(categories);
menu.appendChild(milkShakes);

export { menu };