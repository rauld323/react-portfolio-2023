import React, { useState } from "react";
import styles from "./Footer.module.css";
import Form from "./Form";

const Footer = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <footer className={styles.footer} id="form">
      <h1>
        LETS GET IN CONTACT <em>!</em>
      </h1>
      <span id={styles.contact}>
        <button onClick={handleClick}>Cool</button>
        {isOpen && <Form />}
      </span>
    </footer>
  );
};

export default Footer;
