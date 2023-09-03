import React, { useEffect, useRef, useState } from "react";
import styles from './HomeScreen.module.css';
import LandingPage from '../1LandingPage/LandingPage';
import Work from '../3Work/Work';
import Contact from '../4Contact/Contact';
import About from '../2About/About';
import './HomeScreen.module.css';
import { useWindowSize } from "../hook-use-window-size";
import "./styles.css";
import { motion, useTransform, useElementScroll } from "framer-motion";
import { Box, ContentBox } from "./Box";
import data from './../data.json';
import Project from '../3Work/Project';

export default function HomeScreen() {

  function scrollToSection(link) {
    const anchor = document.querySelector(link);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function getHeaderComponent() {
    return (
      <div className={styles.header}>
        <nav className={styles.nav_sections}>
          <h3 onClick={() => scrollToSection("#page-about")}>ABOUT</h3>
          <h3 onClick={() => scrollToSection("#page-work")}>WORK</h3>
          <h3 onClick={() => scrollToSection("#page-contact")}>CONTACT</h3>
        </nav>
        <p onClick={() => scrollToSection("#page-landing")}>DESIGN PORTFOLIO</p>
      </div>
    )
  }

  function getFooterComponent() {
    return (
      <div className={styles.footer}>
        <h2>2023</h2>
      </div>
    )
  }

  function getDynamicAnimationCSS() {
    return (
      <div className={styles.dynamicAnimationComponentContainer}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circle4}></div>
      </div>
    )
  }

  // const LINE_VARIANTS = {
  //   visible: { height: "75vh", transition: { duration: 2 } },
  //   hidden: { height: "0vh" }
  // };

  const SnapParent = React.forwardRef(({ ...props }, ref) => (
    <div ref={ref} {...props} className="snap-parent-y-mandatory">
      {props.children}
    </div>
  ));

  const Container = ({ children }) => {
    // const windowSize = useWindowSize();
    const ref = useRef();
    // const { scrollY, scrollYProgress } = useElementScroll(ref);

    // const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
    // const lengthRange = ["75vh", "45vh", "50vh", "45vh", "50vh", "100vh"];
    // const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

    // const [scrollYValue, setScrollYValue] = useState(0);
    // const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

    // const refreshPage = () => {
    //   window.location.reload();
    // };

    // useEffect(() => {
    //   console.log("scrollY");
    //   console.log(scrollY);
    //   scrollY.onChange((v) => setScrollYValue(v));
    //   scrollYProgress.onChange((v) => setScrollYProgressValue(v));
    // }, [scrollY, scrollYProgress]);

    return (
      <div
        style={{
          position: "relative"
        }}
      >
        {/* <div
          style={{
            position: "fixed",
            top: 0,
            fontFamily: "monospace",
            fontWeight: 600,
            zIndex: 50
          }}
        >
          {"height: " +
            calcHeight.get() +
            " | y: " +
            scrollYValue +
            " | percentage: " +
            (scrollYProgressValue * 100).toFixed(0) +
            "% | WindowSize h: " +
            windowSize.height +
            " w: " +
            windowSize.width +
            "   "}
          <button onClick={refreshPage}>refresh</button>
        </div> */}
        {/* <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            zIndex: 20,
            pointerEvents: "none"
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={LINE_VARIANTS}
            style={{ backgroundColor: "black", width: 3, height: calcHeight }}
          />
        </div> */}
        <SnapParent
          ref={ref}
          style={{
            position: "absolute"
          }}
        >
          {children}
        </SnapParent>
      </div>
    );
  };

  return (
    <div className={styles.mainContainer2}>
      {/* {getDynamicAnimationCSS()} */}
      {/* {getHeaderComponent()} */}
      {/* {getFooterComponent()} */}
      {/* <CSSAnimation scrollYProgress={scrollYProgress} scale={scale} /> */}

      <Container>
        <div style={{ position: 'absolute', zIndex: 41 }}>
          {getHeaderComponent()}
          {getFooterComponent()}
        </div>
        <Box full transLeft id='page-landing' dataAnchor='#page-landing'>
          <LandingPage />
        </Box>
        <Box full transLeft id='page-about' dataAnchor='#page-about'>
          <About />
        </Box>
        <Box full transLeft id='page-work' dataAnchor='#page-work'>
          <Work />
        </Box>
        <div className={styles.listStyle}>
          {data.work.map((workDetail) =>
            <Box full transLeft id={workDetail.projectId} key={workDetail.projectId} data-anchor={workDetail.projectId}>
              <Project workDetail={workDetail} />
            </Box>)
          }
        </div>
        <Box full transLeft id='page-contact' dataAnchor='#page-contact'>
          <Contact />
        </Box>
      </Container>

      {/* <div className={styles.item} id='page-landing' data-anchor='#page-landing'>
        <LandingPage />
      </div>
      <div className={styles.item} id='page-about' data-anchor='#page-about'>
        <About />
      </div>
      <div className={styles.item} id='page-work' data-anchor='#page-work'>
        <Work />
      </div>
      <div className={styles.item} id='page-contact' data-anchor='#page-contact'>
        <Contact />
      </div> */}

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
