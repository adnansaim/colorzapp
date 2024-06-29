# ColorZapp
#### Video Demo:  [ColorZapp](https://youtu.be/pDcCWK56vPo?si=OQTfnw1bOK5Q6z4_)
#### Description:
[![ColorZapp demo](https://i.postimg.cc/cLDqn1Zt/Screenshot-from-2024-06-28-23-02-50.png)](https://postimg.cc/mPF6xsPT)

ColorZapp is a color-generating web-based application built with HTML, CSS, and JavaScript.

In this app, users can generate a random color by clicking "Generate Color," the color will be displayed in the box below the button.
Additionally, the User can copy that color's RGB and HEX code. The red, green, and blue toggles are for adjusting the color. This app also has a dark mode option.

### Functionalities:

##### Generate Button:
[![generate-btn.gif](https://i.postimg.cc/BvV8Z1vh/generate-btn.gif)](https://postimg.cc/Tyn2C1gm)
In the middle of the app, there is a "Generate Color" button. that generates a random color and the color is displayed in the demo color box.
On the right side of the app, the  RGB and HEX input fields show the color codes of that generated color. Additionally, the red, green, and blue toggles change when a new button is generated.
I have implemented JavaScript's <kbd>Math.random()</kbd> function to generate a random number between 1 and 255 for red, green, and blue each and used DOM manipulation to display the color.

##### RGB and HEX:
On the left side of the app, there are two input fields. One is for RGB and another is for HEX. These two fields will give the RGB and HEX values of the generated color.
Also, I have used CSS absolute property and a copy icon from the fontawesome website to add the copy function from these inputs. There is a CSS animation is used to assure the user that the color code has been copied.

[![rgb-and-hex.gif](https://i.postimg.cc/zBhfJt6B/rgb-and-hex.gif)](https://postimg.cc/DJ2h6g2k)

#### RGB Toggles:
Below the input fields, there is an adjust color section that contains RED, Green, and Blue range toggle bars to adjust the color. simply by toggling these bars, the color gets adjusted and can be seen live in the demo box. Also, the input fields' values get changed according to the color.

[![rgb-toggles.gif](https://i.postimg.cc/T1X3hjvc/rgb-toggles.gif)](https://postimg.cc/47BgS9dK)

#### Dark mode:
I have used the JavaScript localStorage and used CSS to implement the Dark mode for this app. On the top right corner the black moon icon(in light mode) or the yellow sun icon(in dark mode) changes the theme color to the opposite.

[![Screenshot-from-2024-06-29-07-04-38.png](https://i.postimg.cc/MZyGNL13/Screenshot-from-2024-06-29-07-04-38.png)](https://postimg.cc/dDVvT4HG)

[![Screenshot-from-2024-06-29-07-04-27.png](https://i.postimg.cc/DynzTcgv/Screenshot-from-2024-06-29-07-04-27.png)](https://postimg.cc/fkqs7mpp)

#### Responsive Design:
I used CSS media queries to make the app mobile-friendly.

<p align="center">
  <a href="https://postimg.cc/YLhJDDZV">
    <img src="https://i.postimg.cc/7hVw6pVx/Screenshot-from-2024-06-29-07-21-29.png" />
  </a>
  <a href="https://postimg.cc/HcSq21ZX">
    <img src="https://i.postimg.cc/0jx9987W/Screenshot-from-2024-06-29-07-21-34.png" />
  </a>
</p>

### File and Folder Structure

at a glance:
```
colorzapp/
├── assets/
├── README.md
├── index.html
├── script.js
└── style.css
```

ColorZapp is a web application built with HTML, CSS, and JavaScript. Why I chose these techs and what challenges I faced are mentioned below:

#### index.html
HTML is necessary to build all types of structures for any web app. This technology provides the skeleton of the app. While writing plain HTML, I had to keep in mind "What would the structure look like?" and "How would I manage the necessary tags to fill out this?"

#### style.css
CSS provides the design of this app. I faced a huge trouble while writing CSS.
First I had to take each of the individual element and designed them. I used CSS flexbox, absolute property values, borders, margin and paddigns, radius, transitions, transforms, and animations.
I made my animation named "copycom" to provide the animation for the copy icon beside each input field.
I searched a lot to figure it out. I copied some of the range input's design from a random codepen link. There is an asset folder where located two images. The moon icon will be displayed on light mode and by clicking it it will become dark. The sun icon will be displayed in the dark mode and by clicking it the theme will become light.
And thanks to fontawesome for giving me a copy icon.

#### Script.js
All the functionality I mentioned above was made possible by this programming language JavaScript. The Script.js file includes all the necessary JS code to make this web app alive. I commented on everything in the field.
There are several challenges I faced while coding in JavaScript.
At first, I declared all of the variables on top of the file. While clicking the generate button the challenge was to create a random color between 1 and 255 for each RGB values. I used <kbd>Math.floor()</kbd> and <kbd>Math.random()</kbd> built-in JavaScript functions to implement this.
The next challenge was to convert from the RGB to hex. I used the JavaScript String operation <kbd>toString(16)</kbd> method to implement this functionality.
Then the challenge was to make the range inputs live. I used the <kbd>addEventListener</kbd> functionality twice to make them live.
With the combined effort of <kbd>CSS animation</kbd> and <kbd>JS Navigator.clipboard</kbd> I made the copy code icon's functionality(beside the input fields) live.
Lastly, I used JavaScript's <kbd>localStorage</kbd> and <kbd>EventListeners</kbd> to implement the dark mode functions.

#### Attributes:
I would like to give credit to <kbd>Google</kbd>, <kbd>ChatGPT</kbd>, <kbd>fontawesome</kbd> for making this project happen.