import React from "react";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <section id={styles.aboutMe}>
      <div className={styles.aboutPadding}>
        <div>
          <h1 className={styles.aboutHead1}>
            Who
            <br />
            am I?
          </h1>
          <h2 className={styles.aboutHead2}>
            I am the developer you <br />
            and currently
            <br /> looking for work
          </h2>
          <p className={styles.aboutParagraph}>
            I’ve been living in Germany since October 2020 and have been living
            internationally for 6 years. I am originally from Los Angeles,
            California and began my career as an English teacher and
            transitioned into FrontEnd Development.
          </p>
        </div>
      </div>

      <div className={styles.techContent}>
        <div className={styles.techBox}>
          <div className={styles.techBox1}>
            <ul>
              <li style={{ borderBottom: "solid white" }}>Language/Tools</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>BootStrap</li>
              <li>Node</li>
            </ul>
          </div>
          <div className={styles.techBox2}>
            <ul>
              <li>GSAP</li>
              <li>Git/Github</li>
              <li>Jquery</li>
              <li>Responsive Design</li>
              <li>REST Apis</li>
              <li>yarn</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
