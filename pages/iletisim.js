import styles from "../styles/iletisim.module.css";
import Head from "next/head";
export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>İletişim</title>
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
