# Portfolio

![insta](https://user-images.githubusercontent.com/86682774/186793531-62fb14b5-b081-4dfa-9d08-5069e0b6c63d.gif)

A fully responsive single-page application built with React, TypeScript, and Bootstrap.

## Table of contents

- [Demo](#demo)
- [Introduction](#introduction)
- [Process](#process)
- [Challenges and wins](#challenges-and-wins)
- [Known issues and limitations](#known-issues-and-limitations)
- [Future improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## ✨ [Demo](https://juliepark.dev/)

The website has been deployed with Netlify and connected to a [custom domain](https://juliepark.dev/).

## Introduction

This website showcases my achievements and projects. This was my first project built with TypeScript and was designed responsive across all devices. The project took 1 week of web design and 2 weeks of coding in the evenings. The website has been deployed with Netlify and connected to a custom domain: https://juliepark.dev/.

### Built with

- HTML5
- CSS3
- TypeScript
- React 18
- Bootstrap 5
- Libraries
  - React Scroll Parallax
  - React-Scroll
  - EmailJS

## Process

### Planning

- Wireframing

  - I started the project by building a wireframe of the website. Figma was used. The link to the wireframe is below: https://www.figma.com/file/9130RETN6VcUI1YasFXWy6/Portfolio-Wireframe
  - I had one week to design my website. My objectives were to make a website which 1) is aesthetically pleasing without compromising performance 2) provides all the information at a glance 3) is easy to navigate. This led me to make a one-page website with interactive visual effects.
  - I researched portfolio websites made by experienced developers. This helped me come up with the basic structure and design of the website.
  - Pinterest was used to research static website design references.
  - Coolers and Adobe Color were used to choose the colour palette of the website.

- Project management

  - OneNote was used throughout the process to organise ideas and keep track of a checklist of tasks to complete and to be completed.

  - Checklist

    - [x] Apply one-page scrolling
    - [x] Apply parallax scrolling effects
    - [x] Add a contact form
    - [x] Apply Responsive Web Design (RWD)
    - [x] Add scroll down and to the top buttons
    - [x] Add a logo
    - [x] Deploy and connect to a custom domain
    - [x] Add a modal for contact form submission
    - [ ] Apply animations
    - [ ] Improve performance

- Structuring React folders
  - I made three folders in the src folder: assets, styles, and components.
  - I made separate components and CSS files per page. In my previous projects, I used one CSS file for all the components which made it difficult to find a class or id when I wanted to change the style. Having separate CSS files made it much easier to navigate.
  - I made one styles.css file for styles applied throughout the website.

### Building

- One-page scrolling

  - I wanted to use fullPage.js because it was widely used and equipped with a lot of functionality. After considering their pricing options for a license, I decided to use React-Scroll instead which provided basic functions and had straightforward syntax.
  - Nav bar item

    ```javascript
    <Link
    activeClass="activeMenu"
    to="about"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
    >
    <div className="navItem">About</div>
    </Link>
    ```

    A component for the about page has the id of `about`, which is linked to the `to` prop of the above component.

- Parallax

  - I wanted to adopt visual effects that respond to scrolling. I chose React Scroll Parallax which had the most detailed documentation after trying several different libraries.
  - I applied four different effects to elements: translateX, translateY, scale, and opacity.
  - A translateX effect was used on hero and contacts page to generate an opening and closing effect.

    ```javascript
    const parallaxLeft = useParallax({
      translateX: [60, -50],
    });

    const parallaxRight = useParallax({
      translateX: [-50, 40],
    });

    return (
      <Col
        className="heroLeftContainer"
        ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
      >
      </Col>
      <Col
        className="heroRightContainer"
        ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
      >
      </Col>
    )
    ```

- Contact form

  - I used EmailJS to keep this project front-end only.

- Responsive Web Design

  - I disabled parallax effects on smaller screens using `useState` and `useEffect` hooks. The below snippet also includes parallax effects applied on technical toolkit icons: translateY and scale.

    ```javascript
    const [parallaxDisabled, setParallaxDisabled] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const parallaxIcons = useParallax({
      disabled: parallaxDisabled,
      speed: 20,
      translateY: [-10, 10],
      scale: [0.5, 1.2],
      easing: "easeOutQuad",
    });

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.addEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
      if (screenWidth < 768) {
        setParallaxDisabled(true);
      } else {
        setParallaxDisabled(false);
      }
    });
    ```

  - Media queries were used based on Bootstrap 5 breakpoints. Several CSS styles such as a hover effect on nav bar items and a zoom effect on portfolio project images were applied on bigger screen sizes.

  - React Bootstrap's grid system was used for overall responsiveness.

- React Bootstrap

  - React Bootstrap components were used throughout the project. A dropdown component was used in lieu of a GitHub button for full-stack projects to provide options to choose between front-end and back-end repositories. A modal component was used on the submit button of the contact form to inform users that their message was successfully sent.

- Nav bar effect

  - I built a box shadow on the nav bar to be applied only after scrolling down to make the nav bar look more connected to the hero page when the website first loads. Two `useState` hooks were used: one to manage a class to be added and removed and the other to keep track of a scroll position.

    ```javascript
    function NavBar() {
      const [navBarClass, setNavBarClass] = useState(" navBarNoShadow");
      const [scrollPosition, setScrollPosition] = useState(0);

      const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const navBar = useRef<HTMLElement>(null);
      window.onscroll = function () {
        if (scrollPosition < 10) {
          setNavBarClass(" navBarNoShadow");
        } else {
          setNavBarClass(" navBarShadow");
        }
      };

      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          className={"navBar" + navBarClass}
          ref={navBar}
        >
      )
    }
    ```

## Challenges and wins

- Responsive application of parallax effects

  - To disable parallax effects on smaller devices, I first tried assigning classes to elements and writing media queries. This method didn't work. I figured out that the effects were being applied as in-line style elements (`element.style`) to the corresponding elements, making it difficult to override. This was the default behavior of the library I was using, so I had to find a way to work around it.
  - I tried assigning `!important` to media queries to override the in-line styles, but it caused parallax effects to be disabled regardless of the screen size.
  - This led me to find a way to manipulate CSS programmatically.
    - I set up a `useState` hook for screen width, wrote a `handleResize` function to update the state, and then used a `useEffect` hook to add and remove an event listener.
    - The next step was to update a `ref` value where I was passing a `useParallax` hook.
      - First, I tried writing a function to be passed to the `ref` which has two cases: 1) if screen width is narrower than medium devices, returns null 2) returns a `useParallax` hook otherwise. This method didn't work because one of the rules of hooks, according to the offical React documentation, is that hooks can only be called at the top level in the body of a function component.
      - I reverted back to calling the `useParallax` hook in the top level. Then I tried writing a function which passes null to the `ref` when a condition is met. This didn't work because a hook called must be used.
      - Then I read the documentation of the library I used for the parallax effect again and found that there was a `disabled` prop. I was able to disable parallax effects on smaller devices by creating a state for the `disabled` prop value and changing it according to screen width.
  - I learned the following from this experience:
    - The traits of `element.style`
    - The `will-change` and `transform` properties of CSS, which React Scroll Parallax, the library I used, controlled to apply parallax effects.
    - The usage of media queries
    - The rules of hooks
    - The traits of `useRef()` hook
    - How to dynamically program according to a screen size
    - The importance of reading documentation thoroughly
    - The importance of using a library with a good documentation
  - The code snippet can be found above, under the "Responsive Web Design" section.

- Finding a library that supports TypeScript. I had to find an alternative option because some libraries I wanted to use did not support TypeScript. I learned that I can check if a library supports TypeScript by looking for a TS icon on the npm website.
- Designing the application without the knowledge of web design was challenging. I was able to acquire the basic skills of web design after finishing the wireframe.
- I went through several trials and errors to find the right control values for parallax components that enable elements to start and end animations at desired positions across all devices.
- Applying TypeScript to a React project for the first time was challenging. I learned a lot about which types to assign in React projects and how to set up an interface when passing props.
- I had trouble overriding the styles of React Bootstrap's components. I learned that I could use a `bsPrefix` prop to change the underlying component CSS styles. 

## Known issues and limitations

- The `z-index` of a dropdown button doesn’t work with other elements with a parallax effect.

## Future improvements

- Implementation of GSAP to animate the website.
- Implementation of a back-end for receiving emails through a contact form, rather than using an existing library.
- Improvement of performance

## Author

👤 **Julie Park**

- LinkedIn: [@julie-park-developer](https://www.linkedin.com/in/julie-park-developer/)
- Github: [@jpark0224](https://github.com/jpark0224)

## 📝 License

Copyright © 2022 [Julie Park](https://github.com/jpark0224).<br />
This project is [MIT](https://github.com/jpark0224/portfolio/blob/main/LICENSE) licensed.
