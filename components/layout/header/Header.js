import { useState, useEffect, useRef } from "react";
import Image from "next/image";
//utils
import { useOnClickOutside, useMediaQuery } from "../../../utils/hooks";

//components
import Nav from "../nav/nav";
import Menu from "../menu/Menu";
import classes from "../menu/menu.module.css";

export default function Header({ visible }) {
  //Ref
  const node = useRef();

  //state
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const width = useMediaQuery(768);
  //Handlers
  useOnClickOutside(node, setOpen);
  //Effects

  //In nextJS some code runs on server side which doesn't get the browser instances it's possible to get into client side by using
  //class lifecylces or effect hooks to access to document instance and its properties.
  useEffect(() => {
    setSize(document.body.clientWidth);
  }, []);

  useEffect(() => {
    const onResize = (e) => {
      setSize(e.target.outerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header ref={node} title="Başlık" id="başlık">
      {width ? (
        <div >
          <Menu /> <div className={classes.logo} ><Image src={"/images/Logo.png"} width={400} height={200} /> </div>{" "}
        </div>
      ) : (
        <Nav visible={visible} />
      )}
    </header>
  );
}
