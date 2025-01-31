function createElement(tag, ...args) {
  const el = document.createElement(tag);

  const [className, textContent, type] = args;

  if(className) el.classList.add(className);
  if(textContent) el.textContent = (textContent);
  if(type) el.type = (type);

  return el;
}

export { createElement }