import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "../components/accordion/ContentPlaceholder";
import { ServiceData } from "../data/ServiceData";
import { Fragment } from "react/cjs/react.production.min";
import styles from "../styles/hizmetlerimiz.module.css";
import Link from "next/link";
import Head from "next/head";

const Accordion = ({ i, title, expanded, setExpanded, index }) => {
  const isOpen = i === expanded;

  return (
    <>
      <Head>
        <title>Hizmetlerimiz</title>
      </Head>
      <motion.div
        className={styles.accordion_container}
        initial={false}
        animate={{ backgroundColor: isOpen ? "#0f67a2" : "#0f47a2" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        id="hizmetlerimiz"
        title="Hizmetlerimiz"
      >
        <p id="hizmetlerimiz" title="Hizmetlerimiz" className={styles.service_title}>{title}</p>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className={styles.section}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder index={index} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default function Services() {
  const [expanded, setExpanded] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <h3
          title="Hizmetlerimiz Ana Başlığı"
          id="hizmetlerimiz_ana_başlığı"
          className={styles.heading}
        >
          {" "}
          Hizmetlerimiz{" "}
        </h3>
        <div className={styles.icon_container}>
          {" "}
          <i className={"fas fa-wrench fa-3x " + styles.icon}></i>{" "}
        </div>
        <hr />
        <p id="genel_hizmetler" title="Genel Hizmetler" className={styles.info}>
          {" "}
          Karbel Çelik, sandavic panel, çatı çelik konstriksiyonları, makina
          imalatı, platform imalatı, helezon, sarsak elek, konveyör imalatı gibi
          daha bir çok hizmet vermektedir.{" "}
        </p>
        <hr style={{ width: "95%" }} />
        <br />
        {ServiceData.map((i, index) => (
          <Fragment key={index}>
            <Accordion
              i={i}
              index={index}
              title={i.title}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </Fragment>
        ))}
      </div>
      <div className={styles.button_container}>
        <span className={styles.link_button}>
          {" "}
          <Link href="/referanslarimiz">
            <a></a>
          </Link>{" "}
        </span>
      </div>
    </>
  );
}
