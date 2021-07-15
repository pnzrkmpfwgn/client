import styles from "../styles/referanslarimiz.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Referances() {
  return (
    <>
      <Head>
        <title>Referanslarımız</title>
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
      <div className={styles.suppliers_container}>
        <h3
          title="Tedarikçilerimiz Başlık"
          id="tedarikcilerimiz_baslik"
          className={styles.heading}
        >
          {" "}
          Tedarikçilerimiz{" "}
        </h3>
        <div className={styles.icon_container}>
          <i className={"fas fa-truck fa-3x " + styles.icon}></i>
        </div>
        <hr />
        <div
          title="Tedarikçilerimiz Logoları"
          id="tedarikcilerimiz_logolari"
          className={styles.image_container + " " + styles.image}
        >
          <Image
            width={800}
            height={600}
            alt="Tedarikçilerimiz"
            src={"/images/assets/suppliers/suppliers.png"}
          ></Image>
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
