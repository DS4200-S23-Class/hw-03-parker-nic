var browser = browser || chrome;

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

const funky = document.getElementById("funky");

funky.addEventListener("click", setBg);
