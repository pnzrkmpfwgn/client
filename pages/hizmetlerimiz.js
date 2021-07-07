import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "../components/accordion/ContentPlaceholder";
import styles from '../styles/hizmetlerimiz.module.css';

const accordionIds = [0, 1, 2, 3];
const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <>
          <motion.div
              className={styles.container}
        initial={false}
              animate={{ backgroundColor: isOpen ? "#FF0088" : "#ff0055FF" }}
              onClick={() => setExpanded(isOpen ? false : i)}
          />
          <AnimatePresence initial={false} >
              {isOpen && (
                  <motion.section
                      className={styles.section}
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed:{opacity:0,height:0}
                      }}
                      transition={{duration:0.8, ease:[0.04,0.62,0.23,0.98]}}
                  >
<ContentPlaceholder />
                  </motion.section>
            )}
          </AnimatePresence>
    </>
  );
};

export default function Services() {
    const [expanded, setExpanded] = useState(0);

    return accordionIds.map((i) => (
        <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
    ))
}
