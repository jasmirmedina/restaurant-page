import "./styles.css";

import { navbar } from "./js/navbar";
import { contact } from "./js/contact";
import { home } from "./js/home";
import { menu } from "./js/menu";

import { ul } from "./js/navbar";

const lis = Array.from(ul.querySelectorAll("li"));

lis[0].classList.add("active");

const body = document.body;

body.append(navbar, home);

ul.addEventListener("click", (e) => {
  const op = e.target.textContent;
  const target = e.target;

  switch(op) {
    case "Home":
      body.removeChild(body.lastChild);
      body.appendChild(home);
      navbar.classList.remove("border-shadow");
      lis.map((i) => i.classList.remove("active"));
      target.classList.add("active");
    break;

    case "Menu":
      body.removeChild(body.lastChild);
      body.appendChild(menu);
      navbar.classList.add("border-shadow");
      lis.map((i) => i.classList.remove("active"));
      target.classList.add("active");
    break;

    case "Contact":
      body.removeChild(body.lastChild);
      body.appendChild(contact);
      navbar.classList.add("border-shadow");
      lis.map((i) => i.classList.remove("active"));
      target.classList.add("active");
    break;
  }
});