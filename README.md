# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./screenshot.png)



### Links

- [Add solution URL here](https://github.com/KnightlyWorks/ping-coming-soon-page-master)
- [Live Demo on GitHub Pages](https://knightlyworks.github.io/ping-coming-soon-page-master/)
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- JavaScript
- [Tailwind CSS(v4+)](https://styled-components.com/) - For styles

### What I learned

I learned how to work with email-type forms. While my form validation is fairly simple and doesn't directly relate to real projects, the essence remains the same.
  
I also realized the benefits of JavaScript modularity and how convenient it is.

```js 
  //main.js 
  import validateEmail from './utils/valid-email.js';

  document.addEventListener(`DOMContentLoaded`, () => { 
  ....




  //valid-email.js
  /**
  * Support utility to work with validation of emails. (simple)
  */
  export default function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
```




### Continued development

I'll continue to learn JavaScript to work with more dynamic pages.

I'm sure this will help me understand JavaScript frameworks more easily and better in the future.

### Useful resources

- [Tailwind Docs](https://tailwindcss.com/docs/installation/tailwind-cli) - amazing docs :3
- [Tailwind v4 cheat-sheet](https://tailwindcss.504b.cc/?ref=dailydev) - Fast Tailwind utility classes search <3
## Author

- Github - [@KnightlyWorks](https://github.com/KnightlyWorks)
- Frontend Mentor - [@KnightlyWorks](https://www.frontendmentor.io/profile/KnightlyWorks)

