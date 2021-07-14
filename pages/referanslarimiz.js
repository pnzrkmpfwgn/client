import styles from "../styles/referanslarimiz.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Referances() {
  return (
    <>
      <div className={styles.references_container}>
        <h3
          title="Referanslarımız"
          id="referanslarimiz"
          className={styles.heading}
        >
          Referanslarımız
        </h3>
        <div className={styles.icon_container}>
          {" "}
          <i className={"far fa-handshake fa-3x " + styles.icon}></i>{" "}
        </div>
        <hr />
        <div className={styles.image_container + " " + styles.image}>
          <Image
            title="Referanslarımız logoları"
            id="referanslarimiz_logolari"
            
            src={"/images/assets/references/references.jpg"}
            width={1080}
            height={1080}
            alt="Referanslarımız"
          />
        </div>
      </div>
      <div className={styles.suppliers_container} >
        <h3 title="Tedarikçilerimiz Başlık" id="tedarikcilerimiz_baslik" className={styles.heading}> Tedarikçilerimiz </h3>
        <div className={styles.icon_container}>
          <i className={"fas fa-truck fa-3x " + styles.icon}></i>
        </div>
        <hr />
        <div title="Tedarikçilerimiz Logoları" id="tedarikcilerimiz_logolari" className={styles.image_container + " " + styles.image}>
          <Image width={800} height={600} alt="Tedarikçilerimiz" src={"/images/assets/suppliers/suppliers.png"} ></Image>
        </div>
      </div>
      <div className={styles.button_container}>
        <span className={styles.link_button}>
          {" "}
          <Link href="/iletisim">
            <a></a>
          </Link>{" "}
        </span>
      </div>
    </>
  );
}
