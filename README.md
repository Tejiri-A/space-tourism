
# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://space-tourism-three-gold.vercel.app/](https://space-tourism-three-gold.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React 19](https://react.dev/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite 7](https://vite.dev/) - Build tool
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router 7](https://reactrouter.com/) - Client-side routing
- [Motion](https://motion.dev/) - Animation library
- [Focus Trap React](https://github.com/focus-trap/focus-trap-react) - Accessible focus management

### What I learned

#### 1. Full-Bleed Images Within Padded Containers

One of the trickiest challenges was making the Technology page's landscape image span the full viewport width on mobile/tablet devices, while the rest of the content respected the container's padding.

The solution uses `position: relative` with `left: 50%` and `transform: translateX(-50%)` to center the image on the viewport regardless of parent padding:


# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://space-tourism-three-gold.vercel.app/](https://space-tourism-three-gold.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React 19](https://react.dev/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite 7](https://vite.dev/) - Build tool
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router 7](https://reactrouter.com/) - Client-side routing
- [Motion](https://motion.dev/) - Animation library
- [Focus Trap React](https://github.com/focus-trap/focus-trap-react) - Accessible focus management

### What I learned

#### 1. Full-Bleed Images Within Padded Containers

One of the trickiest challenges was making the Technology page's landscape image span the full viewport width on mobile/tablet devices, while the rest of the content respected the container's padding.

The solution uses `position: relative` with `left: 50%` and `transform: translateX(-50%)` to center the image on the viewport regardless of parent padding:


This technique positions the image from the center of its parent, then shifts it back by half its own width (50% of 100vw), effectively centering it on the viewport. Combined with `overflow-x: hidden` on the body, it prevents horizontal scrollbars.

#### 2. Responsive Typography with CSS Custom Properties

Instead of repeating media queries for each typography class, I used CSS custom properties that update at each breakpoint:


This approach keeps typography consistent and easy to maintain across breakpoints.

#### 3. Tailwind CSS 4 Theme Configuration

Tailwind CSS 4 introduces the `@theme` directive for defining design tokens directly in CSS, which I used for colors, spacing, and fonts:


#### 4. Dynamic Background Images Based on Route

Used React Router's `useLocation` hook combined with `useEffect` to dynamically apply background classes to the body based on the current route:


### Continued development

- **Accessibility improvements**: Continue enhancing keyboard navigation and screen reader support
- **Page transitions**: Add smooth transitions between routes using Motion
- **Performance optimization**: Implement lazy loading for images and code splitting for routes
- **Testing**: Add unit and integration tests with Vitest and React Testing Library

### Useful resources

- [Full-Bleed Layout Using CSS Grid](https://www.joshwcomeau.com/css/full-bleed/) - Josh Comeau's excellent article on full-bleed layouts. While I used a different technique, this helped me understand the problem space.
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs) - Official docs for the new `@theme` directive and CSS-first configuration.
- [Focus Trap React](https://github.com/focus-trap/focus-trap-react) - Essential for creating accessible modal/menu components that trap focus correctly.
- [CSS-Tricks: Breaking Out of a Container](https://css-tricks.com/full-width-containers-limited-width-parents/) - Various techniques for making elements extend beyond their parent container.

## Author

- Website - [Oghenetejiri Amrasa](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)