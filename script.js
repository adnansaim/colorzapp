//variables of the demo-color div
const generateColorBtn = document.querySelector(".generate-button");
const saveButton = document.querySelector(".save-button");
const displayColor = document.querySelector(".demo-div");
// variables from the color details(change or copy)
const rgbInput = document.querySelector("#rgbVal");
const hexInput = document.querySelector("#hexVal");
// variables from the adjust color
const redRange = document.querySelector("#red-range");
const redValue = document.querySelector(".red-value");

const blueRange = document.querySelector("#blue-range");
const blueValue = document.querySelector(".blue-value");

const greenRange = document.querySelector("#green-range");
const greenValue = document.querySelector(".green-value");

//previous design
//on inputs
rgbInput.value = "rgb(244,251,255)";
hexInput.value = "f4fbff";

//all color necessary changes when the range input changes
const allRanges = document.querySelectorAll(`input[type='range']`);
allRanges.forEach((element) => {
  element.addEventListener("input", function () {
    element.nextElementSibling.textContent = element.value;
  });
  element.addEventListener("change", function () {
    let red = redRange.value;
    let green = greenRange.value;
    let blue = blueRange.value;

    let newColor = new Colorize(red, green, blue);
    displayColor.style.backgroundColor = newColor.rgb();
    rgbInput.value = newColor.rgb();
    hexInput.value = newColor.hex();
  });
});

//generating random colors

//random number generator function:

function randomNum() {
  return Math.floor(Math.random() * 256);
}

//colorizing class

class Colorize {
  constructor(r, g, b) {
    this.red = parseInt(r, 10);
    this.green = parseInt(g, 10);
    this.blue = parseInt(b, 10);
  }
  rgb() {
    const { red, green, blue } = this;
    return `rgb(${red},${green},${blue})`;
  }
  hex() {
    const { red, green, blue } = this;
    return `${this.toHex(red)}${this.toHex(green)}${this.toHex(blue)}`;
  }

  toHex(value) {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
}

function changeData(red, green, blue) {
  displayColor.style.backgroundColor = `rgb(${red},${green},${blue})`;

  redRange.value = red;
  redValue.textContent = red;
  blueRange.value = blue;
  blueValue.textContent = blue;
  greenRange.value = green;
  greenValue.textContent = green;
}

//generate button onClick event:
generateColorBtn.addEventListener("click", function () {
  let red = randomNum();
  let green = randomNum();
  let blue = randomNum();

  let color = new Colorize(red, green, blue);
  let rgb = color.rgb();
  let hex = color.hex();

  rgbInput.value = rgb;
  hexInput.value = hex;

  // changing the ranges
  changeData(red, green, blue);
});

//copy code functionality:

const copyIcon = document.querySelectorAll(".copy-icon");

copyIcon.forEach((icon) => {
  icon.addEventListener("mouseover", function () {
    const p = document.createElement("p");
    p.classList.add("hoverCopy");
    p.textContent = "Copy";

    this.parentElement.appendChild(p);
    this.addEventListener("mouseout", function () {
      p.remove();
    });
    this.addEventListener("click", function () {
      const copyVal = this.previousElementSibling.value;
      if (this.previousElementSibling.id === "hexVal") {
        navigator.clipboard.writeText("#" + copyVal);
      } else {
        navigator.clipboard.writeText(copyVal);
      }
      p.textContent = "Copied";
      p.style.right = "-20px";
      setTimeout(() => {
        p.textContent = "Copy";
        p.removeAttribute("style");
      }, 1500);
    });
  });
});

// dark mode functionality:
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector(".dark-toggle");
  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    updateToggleButton();
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    updateToggleButton();
  };

  const updateToggleButton = () => {
    const currentButton = document.querySelector(".dark-toggle img");
    if (document.body.classList.contains("dark-mode")) {
      currentButton.src = "/assets/sun.png";
      currentButton.classList.add("light-button");
      currentButton.classList.remove("dark-button");
    } else {
      currentButton.src = "/assets/night-mode.png";
      currentButton.classList.add("dark-button");
      currentButton.classList.remove("light-button");
    }
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  darkModeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});

//change hex and rgb code to make a color

// check if hex color is valid
function hexValid(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// check if rgb color is valid
function isValidRGB(R, G, B) {
  if (R < 0 || R > 255) {
    return false;
  } else if (G < 0 || G > 255) {
    return false;
  } else if (B < 0 || B > 255) {
    return false;
  } else return true;
}

// hex color to rgb change
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return r + "," + g + "," + b;
}

rgbInput.addEventListener("keyup", function (e) {
  const rgbcol = e.target.value;
  rgbsplit = rgbcol.slice(4, -1).split(",");

  r = rgbsplit[0];
  g = rgbsplit[1];
  b = rgbsplit[2];

  if (isValidRGB(r, g, b)) {
    const color = new Colorize(r, g, b);
    hexInput.value = color.hex();
    // change the data
    changeData(color.red, color.green, color.blue);
  }
});

hexInput.addEventListener("keyup", function (e) {
  const previousColor = "#" + e.target.value;
  if (hexValid(previousColor)) {
    const colorArr = hexToRgb(previousColor.substring(1)).split(",");
    r = colorArr[0];
    g = colorArr[1];
    b = colorArr[2];

    const color = new Colorize(r, g, b);
    rgbInput.value = color.rgb();
    // change the data
    changeData(color.red, color.green, color.blue);
  }
});
