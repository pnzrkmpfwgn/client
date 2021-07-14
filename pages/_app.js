import App from "next/app";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
class MyApp extends App {
  render() {
    const { Component, pageProps,router } = this.props;
    return (
      <><Layout>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="pageInitial"
            exit="pageExit"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
                x:300,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              },
              pageAnimate: {
                opacity: 1,
                x:0,
                transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
              },
              pageExit: {
                opacity: 0,
                x:-300,
                transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <Head>
              <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
                crossOrigin="anonymous"
              />
            </Head>
            
              <Component {...pageProps} />
            
          </motion.div>
        </AnimatePresence>
        </Layout>
      </>
    );
  }
}

export default MyApp;
