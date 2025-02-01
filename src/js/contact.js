import { createElement } from "./create-element";

import IGICON from "../../assets/icons/brand-instagram.svg";
import FBICON from "../../assets/icons/brand-facebook.svg";
import YTICON from "../../assets/icons/brand-youtube.svg";

const contact = createElement("div", "contact");
const contactContainer = createElement("div");

const sections = [
  {
    title: "Products",
    items: ["Shoes"],
  },
  {
    title: "Category",
    items: ["Men", "New in", "Weekly pick"],
  },
  {
    title: "Company info",
    items: [
      "About us",
      "Contact us",
      "Payment options",
      "Track order",
      "Support",
      "Vouchers",
      "Size charts",
    ],
  },
];

sections.forEach(({ title, items }) => {
  const sectionDiv = createElement("div");
  sectionDiv.appendChild(createElement("p", "", title));
  items.forEach((item) => sectionDiv.appendChild(createElement("p", "", item)));
  contactContainer.appendChild(sectionDiv);
});

const followUsDiv = createElement("div");
followUsDiv.appendChild(createElement("p", "", "Follow us"));

const socialIcons = [
  { img: IGICON },
  { img: FBICON },
  { img: YTICON },
];

socialIcons.forEach(({ img, alt }) => {
  const iconDiv = createElement("div");
  const iconImg = createElement("img", "brand-logo");
  iconImg.src = img;
  iconDiv.appendChild(iconImg);
  followUsDiv.appendChild(iconDiv);
});

contactContainer.appendChild(followUsDiv);
contact.appendChild(contactContainer);

const footerLinksDiv = createElement("div");
const footerList = createElement("ul");

const footerItems = [
  "Data settings",
  "Cookie settings",
  "Privacy policy",
  "Terms and conditions",
  "Imprint",
];

footerItems.forEach((item) => {
  const listItem = createElement("li", "", item);
  footerList.appendChild(listItem);
});

footerLinksDiv.appendChild(footerList);
contact.appendChild(footerLinksDiv);

export { contact };