import { useState, useEffect, useRef } from "react";

//utils
import { useOnClickOutside } from "../../../utils/hooks";

//components
import Nav from "../nav/nav";

import Image from "next/image";

export default function Header({visible}) {
  //Ref
  const node =useRef();

  //state
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

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
     <Nav visible={visible} />
    </header>
  );
}
