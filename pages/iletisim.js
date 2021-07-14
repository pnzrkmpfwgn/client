import styles from '../styles/iletisim.module.css';
export default function Contact() {
  return (
    <div className={styles.container} >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199967.4113909729!2d27.21664928751582!3d38.453228975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWlyLCBUw7xya2l5ZQ!5e0!3m2!1str!2s!4v1626264366673!5m2!1str!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className={styles.contact_container}>
        <div className={styles.contact_info_container}>
          <h3 title="İletişim" id="iletişim" className={styles.heading}>
            {" "}
            İletişim{" "}
          </h3>
          <p
            title="Telefon Numarası"
            id="telefon_numarasi"
            className={styles.title}
          >
            Telefon Numarası :{" "}
            <span className={styles.info}> 0232 435 50 51 </span>
          </p>
          <p title="GSM" id="gsm" className={styles.title}>
            GSM : <span className={styles.info}>0533 302 03 72</span>{" "}
          </p>
          <p title="E-Posta" id="e_posta" className={styles.title}>
            {" "}
            E-Posta :<span className={styles.info}>
              karbelcelik@gmail.com
            </span>{" "}
          </p>
          <p title="Adres" id="adres" className={styles.title}>
            {" "}
            Adres :{" "}
            <span className={styles.info}>
              {" "}
              5032 Sokak No. 9 kat 4 Çınar Mahallesi Çamdibi Bornova{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
