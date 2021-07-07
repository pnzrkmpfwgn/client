import classes from "./nav.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav({ visible }) {
  const [logoStyle, setLogoStyle] = useState({});
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (!visible) {
      setStyle({
        padding: "0",
        fontSize: "20px",
        height: "100px",
        transition: "0.4s"
      });
      setLogoStyle({
        transform: "scale(0.6)",
        transition: "0.4s",
      });
    } else {
      setStyle({
        padding: "10px 5px",
        fontSize: "24px",
        transition: "0.4s"
      });
      setLogoStyle({
        transform: "scale(1)",
        transition: "0.4s",
      });
    }
  }, [visible]);

  return (
    <nav style={style} className={classes.Nav}>
      <Link href="/">
        <a style={logoStyle}>
          <Image
            title="Karbel Çelik"
            id="logo"
            src={"/images/Logo.png"}
            width={300}
            height={200}
            alt="logo"
            className={classes.logo}
          />
        </a>
      </Link>
      <ul className={classes.links_container}>
        <li>
          <Link href="/">
            <a
              className={classes.link}
              title="Hakkımızda Linki"
              id="hakkımızda_linki_nav"
              href="#Hakkımızda"
            >
              Anasayfa
            </a>
          </Link>
        </li>
        <li>
          <Link href="/hizmetlerimiz">
            <a
              className={classes.link}
              title="Hizmetlerimiz Linki"
              id="hizmetlerimiz_linki_nav"
              href="#Hizmetlerimiz"
            >
              Hizmetlerimiz
            </a>
          </Link>
        </li>
        <li>
          <Link href="referanslarimiz">
            <a
              className={classes.link}
              title="Referanslarımız Linki"
              id="referanslarımız_linki_nav"
              href="#Referanslarımız"
            >
              Referanslarımız ve Tedarikçilerimiz
            </a>
          </Link>
        </li>
        <li>
          <Link href="/iletisim">
            <a
              href="#İletişim"
              title="İletişim Linki"
              id="iletişim_linki_nav"
              className={classes.link}
            >
              İletişim
            </a>
          </Link>
        </li>
      </ul>
      <div className={classes.social_icons}>
        <a
          href="https://twitter.com/KarbelC"
          title="Twitter Linki"
          id="twitter_linki_nav"
        >
          <i className={"fab fa-twitter-square fa-lg " + classes.icon}></i>
        </a>
        <a
          href="https://www.facebook.com/Karbel-%C3%87elik-107643741432544"
          title="Facebook Linki"
          id="facebook_linki_nav"
        >
          <i className={"fab fa-facebook-square fa-lg " + classes.icon}></i>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/fikret-yi%C4%9Fit-24518a20a/"
          title="Linkedin Linki"
          id="linkedin_linki_nav"
        >
          <i className={"fab fa-linkedin fa-lg " + classes.icon}></i>{" "}
        </a>
      </div>
    </nav>
  );
}
