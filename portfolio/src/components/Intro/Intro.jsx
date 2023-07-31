import React, { useEffect } from "react";
import styles from "./Intro.module.css";
import { gsap } from "gsap";

const Intro = () => {
  return (
    <section id={styles.intro}>
      <div className={styles.side1}>
        <p id="side1" className={styles.introParagraph}>
          Raul Davila
          <br />
          Frontend Developer:
          <br />
          <br />
          As a Frontend Developer I make it my priority to implement visual and
          interactive elements to increase user engagement when working with web
          application. Currently, I am looking for a position that will allow me
          to put my skills into practice while helping your company reach new
        </p>
      </div>
      {/* <div class={styles.floatIntro}>
        <h1>
          WEL
          <br />
          COME.
        </h1>
      </div> */}
      <div class={styles.side2}></div>
    </section>
  );
};

export default Intro;
