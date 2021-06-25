import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import classes from "./layout.module.css";
import {useOnScreen} from '../../utils/hooks'

export default function Layout({ children }) {
  const [size, setSize] = useState();
  const [ref, visible] = useOnScreen({rootMargin:'-100px'})
  useEffect(() => {
    setSize(document.body.clientWidth);
  }, []);
  useEffect(() => {
    const onResize = (e) => {
      setSize(e.target.outerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <div ref={ref} className={classes.content} ></div>
      <Header visible={visible} />
      <main title="Main" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
