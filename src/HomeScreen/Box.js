import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Constants from "../Constants.json";
import HomeReducer from "./HomeReducer";

const CHILD_VARIANTS_SCALE = {
  visible: { scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.1 }
};

const CHILD_VARIANTS_LEFT = {
  visible: { x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 }
}

export const Box = ({
  color,
  full = false,
  half = false,
  transLeft = false,
  transScale = false,
  triggerOnce = false,
  id = id,
  dataAnchor,
  children
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: triggerOnce,
    trackVisibilty: true
  });

  const dispatch = useDispatch();

  const prevScreen = useSelector(store => store.HomeReducer.prevScreen);
  const currScreen = useSelector(store => store.HomeReducer.currScreen);

  useEffect(() => {
    console.log(`Id viewport ${id}`);
    console.log(`Header inside viewport ${inView}`);
    if (inView) {
      dispatch({ type: 'SET_PREVIOUS_SCREEN', payload: currScreen });
      dispatch({ type: 'SET_CURRENT_SCREEN', payload: id });
    }
  }, [id, inView]);

  const getHiddenCircle1 = () => {
    console.log(prevScreen);
    switch (prevScreen) {
      case Constants.landing: return { width: '60%', height: '90%', position: 'fixed', top: '-50%', right: '-25%', scale: 1.8, borderRadius: '50%', transition: { duration: 1 } };
      case Constants.about: return { transition: { duration: 1 } };
      case Constants.work: return { x: '-50%', y: -100, transition: { duration: 1 } };
      case Constants.contact: return { x: '-50%', y: -100, transition: { duration: 1 } };
    }
  }

  let LANDING_CIRCLE_1 = {
    visible: { transition: { duration: 1 } },
    hidden: {}
  }

  let ABOUT_CIRCLE_1 = {
    visible: { transition: { duration: 1 } },
    hidden: getHiddenCircle1()
    // hidden: {}
  }

  let WORK_CIRCLE_1 = {
    visible: { backgroundColor: 'green', transition: { duration: 1 } },
    hidden: {}
  }

  let CONTACT_CIRCLE_1 = {
    visible: { backgroundColor: '#763F37', transition: { duration: 1 } },
    hidden: {}
  }

  const getAnimationVariant = () => {
    if (inView) {
      if (id === Constants.about) {
        return ABOUT_CIRCLE_1;
      } else if (id === Constants.landing) {
        return LANDING_CIRCLE_1;
      } else if (id === Constants.work) {
        return WORK_CIRCLE_1;
      } else if (id === Constants.contact) {
        return CONTACT_CIRCLE_1;
      }
    }
  }

  const getAnimationVariantDefault = () => {
    if (inView) {
      if (id === Constants.about) {
        return { width: '100%', height: '100%', position: 'fixed', top: '-50%', borderRadius: '50%', backgroundColor: '#DBE2EF' };
      } else if (id === Constants.landing) {
        return { width: '60%', height: '90%', position: 'fixed', top: '-50%', right: '-25%', scale: 1.8, borderRadius: '50%', backgroundColor: '#DBE2EF' };
      } else if (id === Constants.work) {
        return { width: 400, height: 400, position: 'fixed', bottom: '0%', left: '50%', borderRadius: '50%' };
      } else if (id === Constants.contact) {
        return { width: 800, height: 800, position: 'fixed', bottom: '-85%', right: '23%', borderRadius: '50%' };
      }
    }
  }

  return (
    <div
      className="snap-child-center"
      ref={ref}
      id={id}
      data-anchor={dataAnchor}
      style={{
        height: full ? "100vh" : half ? "50vh" : 120,
        width: "100%",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          zIndex: -1
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      // variants={
      //   transLeft
      //     ? CHILD_VARIANTS_LEFT
      //     : transScale
      //       ? CHILD_VARIANTS_SCALE
      //       : CHILD_VARIANTS_SCALE
      // }
      >
        {children}
      </motion.div>
      <motion.div
        style={getAnimationVariantDefault()}
        className="container"
        animate={inView ? "visible" : "hidden"}
        variants={getAnimationVariant()}
      />
    </div>
  );
};
