# Portfolio

A fully responsive single-page application built with React, TypeScript, and Bootstrap.

## Table of contents

- [Demo](#Demo)
- [Introduction](#introduction)
- [Process](#process)
- [Challenges and Wins](#challenges-and-wins)
- [Known issues and limitations](#known-issues-and-limitations)
- [Future improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## ✨ [Demo](https://juliepark.dev/)

The website has been deployed with Netlify and connected to a [custom domain](https://juliepark.dev/).

## Introduction

This website showcases my achievements and portfolio. This was my first project built with TypeScript and was designed responsive across all devices. The project took 1 week of web design and 2 weeks of coding in the evenings. The website has been deployed with Netlify and connected to a custom domain: https://juliepark.dev/.

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

  - I started the project by building a wireframe of the website. Figma was used. The link of the wireframe is below: https://www.figma.com/file/9130RETN6VcUI1YasFXWy6/Portfolio-Wireframe
  - I had one week to design my website. My objectives were to make the website which is: 1) aesthetically pleasing without compromising performance 2) provides all the information at a glance 3) is easy to navigate. This led me to make a one-page website with interactive visual effects.
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
  - Made three folders in the src folder: assets, styles, and components.
  - Made separate components per page.
  - Made separate CSS files per page. In my previous projects, I used one CSS file for all the components which made it difficult to find a class or id when I wanted to change the style. Having separate CSS files made it much easier to navigate.
  - Made one styles.css file for styles applied throughout the website

### Building

- One-page scrolling

  - I wanted to use fullPage.js because it was widely used and equipped with a lot of functionality. After considering their pricing options for a license, I decided to use React-Scroll instead which provided basic functions and had straightforward syntax.
  - Nav bar item

    ```
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

    A component for the about page has the id of "about," which is linked to the "to" props of the above component.

- Parallax

  - I wanted to adopt visual effects that respond to scrolling. I chose React Scroll Parallax which had the most detailed documentation after trying several different libraries.
  - I applied three different effects to elements: translateX, scale, and opacity.
  - A translateX effect was used on Hero and Contacts page to generate an opening and closing effect.

    ```
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

  - I disabled parallax effects on smaller screens using useState and useEffect hooks. The below snippet also includes a parallax effect applied on technical toolkit icons.

    ```
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

  - Media query was used based on Bootstrap 5 breakpoints. Several stylings such as a hover effect on nav bar items and a zoom effect on portfolio project images were applied on bigger screen sizes.

  - React Bootstrap's grid system was used for overall responsiveness.

- React Bootstrap

  - React Bootstrap components were used throughout the project. A dropdown component was used in lieu of a GitHub button for full-stack projects to provide options to choose between front-end and back-end repositories. A modal component was used on the submit button of the contact form to inform users that their message was successfully sent.

- Nav bar effect

  - A box shadow on the nav bar was applied only after scrolling down to make the nav bar look more connected to the hero page when the page first loads. Two useState hooks were used to manage a class to be added and removed and to keep track of a scroll position.

    ```
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

- Responsive application of the parallax effect

  - I wanted to disable the parallax effect on smaller devices. I figured out that the effect was being applied as an in-line style element (element.style) to the corresponding div using Chrome DevTools, which made it difficult to override.
  - I tried assigning !important to media queries to override the in-line style, but it resulted in parallax being disabled regardless of the screen size.
  - This led me to find a way to manipulate CSS programmatically.
    - I set up a useState hook for screen width, wrote a handleResize function to update the state, and then used a useEffect hook to add and remove an event listener.
    - The next step was to update a ref value where I was passing a useParallax hook.
      - First, I tried writing a function to be passed to the ref which returns null when the screen size is narrower than medium devices and returns useParallax() hook otherwise. This method didn't work because one of the Rules of Hooks is that hooks can only be called at the top level in the body of a function component.
      - Then I tried writing a function which calls the hook in the page component and passes null to the ref only when the condition is met. This didn't work because a hook called must be used.
      - I read the documentation of the library I used for the parallax effect again and found that there is a "disabled" prop that I could pass to the hook. I was able to solve the issue by setting a state for the "disabled" prop value according to screen width.
  - I learned the following from this experience:
    - The behaviour of element.style.
    - The will-change and transform property of CSS, which parallax library I used was utilising to apply effects.
    - Usage of media queries.
    - Rules of Hooks
    - useRef() hook
    - How to dynamically program according to a screen size
    - The importance of reading documentation thoroughly
    - The importance of using a library with a good documentation

- Finding a library that supports TypeScript. I had to find an alternative option because some libraries I wanted to use did not support TypeScript. I learned that I can check if a library supports TypeScript by looking for a TS icon on the npm website.
- Designing the application without the knowledge of web design was challenging. I was able to acquire the basic skills of web design after finishing the wireframe.
- I went through several trials and errors to find the right control values for parallax components that enable elements to start and end animations at desired positions across all devices.
- Applying TypeScript to a React project for the first time was challenging. I learned a lot about which types to assign in React projects and how to set up an interface when passing props.
- I had trouble overriding the styles of React Bootstrap's components. I learned that I could use a bsPrefix prop to change the underlying component CSS base class name and modifier class names prefix.

## Known issues and limitations

- The z-index of a dropdown button doesn’t work with other elements with a parallax effect.

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
