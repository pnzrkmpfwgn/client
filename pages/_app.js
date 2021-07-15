import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import Layout from "../components/layout/layout";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
let copies = [];
const onLoad = () => {
  const nodes = document.querySelectorAll(
    "link[rel=stylesheet], style:not([media=x])"
  );
  copies = [...nodes].map((el) => el.cloneNode(true));

  for (let copy of copies) {
    copy.removeAttribute("data-n-p");
    copy.removeAttribute("data-n-href");

    document.head.appendChild(copy);
  }
};

const onExit = () => {
  for (let copy of copies) {
    document.head.removeChild(copy);
  }
};
class MyApp extends App {
  componentDidMount() {
    Router.events.on("beforeHistoryChange", onLoad);
  }
  componentWillUnmount() {
    Router.events.off("beforeHistoryChange", onLoad);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Layout>
          <AnimatePresence exitBeforeEnter={true} onExitComplete={onExit}>
            <motion.div
              key={router.route}
              initial="pageInitial"
              exit="pageExit"
              animate="pageAnimate"
              variants={{
                pageInitial: {
                  opacity: 0,
                  x: 300,
                  transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
                },
                pageAnimate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
                },
                pageExit: {
                  opacity: 0,
                  x: -300,
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
                <meta
                  name="description"
                  content="Karbel Çelik şirketi, İzmir merkezli çelik konstrüksiyon şirketidir. Sandviç panel, çelik çatı, batar kat imalatı, mimari tasarım, makine imalatı ve birçok hizmeti bulunmaktadır."
                />
                <meta
                  name="keywords"
                  content="Karbel, Karbel Çelik, Mimar, Mimari, Tasarım, Mimari Tasarım, Karbel Mimari Tasarım, İzmir Mimari, İzmir Mimari Tasarım, İzmir Karbel Mimari Tasarım, Sundurma, Sundurma Çatı, Trapez, Trapez Saç, Çatı Panel,, Karbel Çelik konstrüksiyon, Çelik, Çatı, Çelik çatı, İzmir, İzmir çelik çatı, İzmir çelik, İzmir Karbel Çelik,Sandviç panel, Sandviç panel çatı,İzmir sandviç panel,İzmir sandviç panel çatı, çatı, Konveyör,İzmir konveyör, Helezon,İzmir helezon, Homojenizatör,İzmir homojenizatör, Paslanmaz çelik,İzmir paslanmaz çelik, Depo,İzmir depo, Çelik depo,İzmir çelik depo, İnşaat batar kat,İzmir inşaat batar kat, Fabrika batar kat,İzmir fabrika batar kat, Makina,Makina platform,İzmir makina platform, İmalat,İzmir imalat, Makina imalat,İzmir makina imalat, Karbel makina, Karbel imalat"
                />
                <meta name="author" content="Ülkü Ayberk Yiğit" />
              </Head>

              <Component {...pageProps} key={router.route} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </>
    );
  }
}

export default MyApp;
