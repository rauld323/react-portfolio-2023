import React from "react";
import styles from "./Projects.module.css";
import { formatDescription } from "../../helpers/formatDescription";

const Projects = ({
  key,
  image,
  imageOnTheRight,
  gitHubLink,
  title,
  liveLink,
  techUsed,
  description,
  projectNumber,
}) => {
  let projectDescription = formatDescription(description);

  return (
    <section id={styles.project1}>
      <div className={styles.paralaxContainerLeft}>
        {projectNumber === 1 && (
          <div>
            <div>
              <h1
                style={{ fontFamily: "Signika, sans-serif", fontSize: "75px" }}
              >
                PR
              </h1>
              <h1
                style={{ fontFamily: "Signika, sans-serif", fontSize: "75px" }}
              >
                OJECTS.
              </h1>
            </div>
          </div>
        )}

        <div className={styles.paralaxSection2}>
          <div
            className={styles.projectImage}
            style={{
              order: imageOnTheRight ? 1 : 0,
            }}
          >
            <img className={styles.parallax} src={image} alt={image} />
          </div>

          <div class={styles.paralaxInfo}>
            <h1 style={{ fontFamily: "Montserrat, sans-serif" }}>{title}</h1>
            <p>{techUsed}</p>

            {projectDescription}
            {key}
            {gitHubLink !== "" ? (
              <div class="links">
                <a href={gitHubLink} target="_blank">
                  <em>GitHub</em>
                </a>
                <a href={liveLink} target="_blank">
                  <em>Live</em>
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
