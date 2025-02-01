import { createElement } from "./create-element";

const lis = ["Home", "Menu", "Contact"];

const ul = createElement("ul");
const navbar = createElement("div", "navbar");

for (const el of lis) {
  const li = createElement("li");
  li.textContent = el;

  ul.appendChild(li);
}

navbar.appendChild(ul);

export { navbar, ul };