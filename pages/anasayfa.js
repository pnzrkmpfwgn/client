import styles from "../styles/anasayfa.module.css";
import Link from "next/link";
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
      <motion.div className={styles.heading}>
        <h1> Karbel Çelik'e Hoşgeldiniz...</h1>
      </motion.div>
      <div className={styles.container}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
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
          Karbel Çelik Hakkında
        </h2>
        <p>
          {" "}
          İzmir merkezli Karbel Çelik, çelik konstrüksiyon projelerinde büyük
          bir deneyime sahip olan firmamız kurulduğu yıldan bu yana, kısa sürede
          dünyanın prestijli markaları birlikte çalışarak bir çok projeye
          başarıyla imza atmış ve alanında lider konuma gelmiştir. Firmamız
          alanındaki diğer kollar olan makina imalatı, taşeronluk hizmetleri ve
          bakım, onarım inşaat alanlarında da kaliteli hizmet sunmaktadır.
        </p>
        <p>
          {" "}
          Alanında bulunduğu projeler arasında firmamız: otel inşaatları, sanayi
          tesisleri, köprüler, gökdelenler, fabrikalar gibi değişik mekanların
          çelik konstrüksiyon hizmetlerini, taşeronluk hizmetlerini,
          bakım-onarım inşaat hizmetleri ve bunun yanında makina imalatlarını
          kusursuz ve güvenilir ekip personeli ile birlikte yapmaktadır.
          Firmamız geçmişte olduğu gibi gelecekte de güvenilir ve kaliteli bir
          hizmet vermekten mutluluk duymaktadır.{" "}
        </p>
      </div>
      <div ref={ref} className={styles.why_us}>
        <h3 title="Neden Karbel?" id="neden_karbel?" className={styles.heading}>
          {" "}
          Neden Karbel ?{" "}
        </h3>

        <hr />
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            <div className={styles.icon}>
              <i className={"fas fa-hourglass fa-3x"}></i>
            </div>
            <h3
              title="Verimlilik ve Zaman Yönetimi"
              id="verimlilik_ve_zaman_yönetimi"
            >
              Verimlilik ve Zaman Yönetimi
            </h3>
            <p>
              {" "}
              Kalite, hizmet, verimlilik ve zaman yönetiminin sürekli
              iyileştirilmesi yoluyla müşteri beklentilerini aşma.
            </p>
          </div>

          <div className={styles.grid_item}>
            <div className={styles.icon}>
              {" "}
              <i className={"fas fa-chart-bar fa-3x"}></i>{" "}
            </div>
            <h3 title="Sektörümüzde Liderlik" id="sektörümüzde_liderlik">
              Sektörümüzde Liderlik
            </h3>
            <p>Sektörümüzde liderlik ve başarma azmi. </p>
          </div>

          <div className={styles.grid_item}>
            <div className={styles.icon}>
              {" "}
              <i className={"fas fa-users fa-3x"}></i>{" "}
            </div>
            <h3 title="Nitelikli İnsan Kaynağı" id="nitelikli_insan_kaynağı">
              Nitelikli İnsan Kaynağı
            </h3>
            <p>Uzmanlaşmış ve nitelikli insan kaynağı.</p>
          </div>

          <div className={styles.grid_item}>
            <div className={styles.icon}>
              {" "}
              <i className={"fas fa-laptop fa-3x"}></i>{" "}
            </div>
            <h3
              title="Yeni Teknolojilerin Takibi"
              id="yeni_teknolojilerin_takibi"
            >
              {" "}
              Yeni Teknolojilerin Takibi
            </h3>
            <p>Bilgi paylaşımı ve sektörümüzdeki yeni teknolojilerin takibi.</p>
          </div>

          <div className={styles.grid_item}>
            <div className={styles.icon}>
              {" "}
              <i className={"fas fa-chess-rook fa-3x"}></i>{" "}
            </div>
            <h3 title="Güvenirlik" id="güvenirlik">
              Güvenilirlik
            </h3>
            <p> Güvenirlik, şeffaflık ve açıklık. </p>
          </div>

          <div className={styles.grid_item}>
            <div className={styles.icon}>
              {" "}
              <i className={"fas fa-leaf fa-3x"}></i>{" "}
            </div>
            <h3 title="Çevreye Saygı" id="çevreye_saygı">
              Çevreye Saygı
            </h3>
            <p>Çevremize saygıdan kaçınmıyoruz.</p>
          </div>
        </div>
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
