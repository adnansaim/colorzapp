//variables of the demo-color dif
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
const blueValue = document.querySelector(".red-value");

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

//generate button onClick event:
generateColorBtn.addEventListener("click", function () {
  let red = randomNum();
  let green = randomNum();
  let blue = randomNum();

  let color = new Colorize(red, green, blue);
  let rgb = color.rgb();
  let hex = color.hex();

  displayColor.style.backgroundColor = rgb;
  rgbInput.value = rgb;
  hexInput.value = hex;
  //  changing the ranges
  redRange.value = red;
  redValue.textContent = red;
  blueRange.value = blue;
  blueValue.textContent = blue;
  greenRange.value = green;
  greenValue.textContent = green;
});

//copy code functionality:

const copyIcon = document.querySelectorAll(".fa-solid");

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
