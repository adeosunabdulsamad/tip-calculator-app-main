# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./Screenshot%20(86).png)


### Links

- Solution URL: [Github repository](https://github.com/adeosunabdulsamad/tip-calculator-app-main)
- Live Site URL: [tip-calculator-app](https://adeosunabdulsamad.github.io/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

I learnt DRY(Don't Repeat Yourself) and instead defined a function that I used repeatedly in my javascript code
and also how to add icons to input areas

```css
.img-sign {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}
```
```js
tipPercentage.addEventListener('input', () => {
    radios.forEach(radio => radio.checked = false);
    calculateTip();
});
```

### Continued development

I want to focus more on improving my critical thinkins skills so I can write cleaner and shorter javascript.
I also need to work more on responsiveness

### Useful resources

- [Responsively](https://responsively.app/) - This helped me to test my website's responsiveness. I will keep on using it going forward.

## Author

- Frontend Mentor - [@adeosunabdulsmad](https://www.frontendmentor.io/profile/adeosunabdulsamad)

