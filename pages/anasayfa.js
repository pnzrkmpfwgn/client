import styles from "../styles/anasayfa.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ImageData as images } from "../data/ImageData";
import { useOnScreen } from "../utils/hooks";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
export default function Anasayfa() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [counter, setCounter] = useState(0);
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
      paginate(counter);
    }, 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return (
    <>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <motion.div className={styles.heading}>
        <h1 id="baslik" title="Başlık" > Kıbrıs Gecelerine Hoşgeldiniz...</h1>
      </motion.div>
      <div className={styles.container}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            id="galeri"
            title="Galeri"
            className={styles.img}
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className={styles.next} onClick={() => paginate(1)}>
          {">"}
        </div>
        <div className={styles.prev} onClick={() => paginate(-1)}>
          {">"}
        </div>
      </div>
      <div ref={ref} className={styles.about_container}>
        <h2 title="Karbel Çelik Hakkında" id="karbel_çelik_hakkında">
          {" "}
          Kıbrıs&apos;ta Gece Hayatı Hakkında
        </h2>
        <p title="Hakkında Paragrafı" id="hakkinda_paragrafi" >
          {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat voluptas mollitia totam facilis quaerat minus molestiae officiis eligendi ipsam consectetur fuga, qui numquam ullam quod accusamus, incidunt quos dicta.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora doloribus quas sapiente doloremque, ullam earum incidunt sit beatae nihil mollitia, dolores necessitatibus culpa fugiat consequatur magnam aut omnis veritatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi nobis dolores autem? Officiis dolore tempora sunt quam cumque alias ut rerum incidunt fugit. Quo officiis voluptatum sapiente ex? Facere!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum aut accusamus maiores sequi. Illum optio temporibus sapiente quaerat, nesciunt vitae assumenda impedit aperiam dolorem laboriosam adipisci corporis voluptates voluptatibus autem!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fuga delectus quam magni cum nulla dolor necessitatibus reprehenderit repudiandae! Recusandae ducimus facilis tempore, deserunt neque obcaecati sint sit eveniet soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et perferendis quae provident tenetur rem! Nostrum nam sunt, corrupti, aspernatur magnam esse ut enim, laboriosam laborum rerum exercitationem asperiores accusamus.
        </p>
        
      </div>
      
      <div className={styles.button_container}>
        <span className={styles.link_button}>
          {" "}
          <Link href="/hizmetlerimiz">
            <a></a>
          </Link>{" "}
        </span>
      </div>
    </>
  );
}
