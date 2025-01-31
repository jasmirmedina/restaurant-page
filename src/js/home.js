import { createElement } from "./create-element";

import BSDIMG from "../../assets/images/bubble-side-divider.svg"

const home = createElement("div", "home");
const dividerOne = createElement("div", "divider-one");
const dividerTwo = createElement("div", "divider-two");
const homeContent = createElement("div", "home-content");
const homeContentFirstDiv = createElement("div");
const homeContentFirstDivFirstP = createElement("p", "", "Freshly Roasted");
const homeContentFirstDivSecondP = createElement("p", "", "Coffee");
const homeContentSecondDiv = createElement("div");
const homeContentSecondDivBtn = createElement("button", "", "Shop now", "button");

homeContentFirstDiv.append(homeContentFirstDivFirstP, homeContentFirstDivSecondP);
homeContentSecondDiv.appendChild(homeContentSecondDivBtn);

homeContent.append(homeContentFirstDiv, homeContentSecondDiv);

const bubbleSideDividerOne = new Image();
bubbleSideDividerOne.src = BSDIMG;

const bubbleSideDividerTwo = new Image();
bubbleSideDividerTwo.src = BSDIMG;

dividerOne.appendChild(bubbleSideDividerOne);
dividerTwo.appendChild(bubbleSideDividerTwo);

home.append(dividerOne, homeContent, dividerTwo);

export { home };