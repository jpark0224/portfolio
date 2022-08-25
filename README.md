# Portfolio

A fully responsive single-page application built with React, TypeScript, and Bootstrap.

## Table of contents

- [Demo](#Demo)
- [Introduction](#introduction)
- [Process](#process)
- [Challenges and Wins](#challenges-and-wins)
- [Known issues and limitations](#known-issues-and-limitations)
- [Future improvements](#future-improvements)
- [Key learnings](#key-learnings)
- [Author](#author)
- [License](#license)

## ✨ [Demo](https://juliepark.dev/)

The website has been deployed with Netlify and connected to a [custom domain](https://juliepark.dev/).

## Introduction

A portfolio website that showcases my achievements and projects. This was my first project built with TypeScript and was designed responsive across all devices. The project took 1 week of web design and 2 weeks of coding after work. The website has been deployed with Netlify and connected to a custom domain: https://juliepark.dev/.

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
  - I had one week to design my website. My objectives were to make the website which 1) is esthetically pleasing without compromising the performance 2) provides all the information at a glance 3) is easy to navigate. This led me to make a one page website with interactive visual effects.
  - I researched portfolio websites made by experienced developers. This helped me come up with the basic structure and design of the website.
  - Pinterest was used to research static website design references.
  - Coolers and Adobe Color were used to choose the colour palette of the website.

- Project management
  - OneNote was used throughout the process to organise ideas and keep track of a checklist of tasks to complete and to be completed.
- Structuring React folders
  - Made three folders in the src folder: assets, styles, and components.
  - Made separate components per page.
  - Made separate css files per page. In my previous projects, I used one css file for all the components which made it difficult to find a class or id when I wanted to change the style. Having separate css files made it much easier to navigate.
  - Made one styles.css file for styles applied throughout the website

### Building

- One page scrolling

  - I wanted to use fullPage.js because it was widely used and equipped with a lot of functionality. After considering their pricing options for license, I decided to use React-Scroll instead which provided basic functions and had straightforward syntax.
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

    A component for the about page has the id of "about."

- Parallax

  - I wanted to adopt visual effects that respond to scrolling. I decided to use React Scroll Parallax which had the most detailed documentation after trying several different libraries.
  - After experimenting with different effects, I applied three different effects to elements: translateX, scale, and opacity.
  - translateX effect

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

  - I used EmailJS to keep this project front-end only and avoid overcomplicating the project.

- Responsive Web Design

  - I disabled parallax effects on smaller screens using useState and useEffect hooks.

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

### Checklist

- [x] Apply one page scrolling
- [x] Apply parallax scrolling effects
- [x] Add a contact form
- [x] Apply Responsive Web Design (RWD)
- [x] Add scroll down and to the top buttons
- [x] Add a logo
- [x] Deploy and connect to a custom domain
- [x] Add a modal for contact form submission
- [ ] Apply animations
- [ ] Improve performance

## Challenges and wins

### Challenges

- Finding a library that supports TypeScript. I had to find an alternative option because some libraries I wanted to use did not support TypeScript.
- Finding the right control values for parallax components that enable elements to start and end animations at desired positions across all devices.

### Wins

- Designing the application without the knowledge of web design was challenging. I was able to acquire the basic skills of web design after finishing the wireframe.

## Known issues and limitations

- Z-index of a dropdown button doesn’t work with other elements with Parallax effect.

## Future improvements

- Implementation of GSAP to animate the website.
- Implementation of a back-end for receiving emails through a contact form, rather than using an existing library.
- Improvement of performance

## Key learnings

## Author

👤 **Julie Park**

- LinkedIn: [@julie-park-developer](https://www.linkedin.com/in/julie-park-developer/)
- Github: [@jpark0224](https://github.com/jpark0224)

## 📝 License

Copyright © 2022 [Julie Park](https://github.com/jpark0224).<br />
This project is [MIT](https://github.com/jpark0224/portfolio/blob/main/LICENSE) licensed.
