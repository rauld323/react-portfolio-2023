import React from "react";

const Projects = () => {
  return (
    <section id="project1">
      <br />
      <br />
      <div class="paralax-container-left">
        <div class="parallax-section1">
          <div class="paralax-intro">
            <h1 style={{ fontFamily: "Signika, sans-serif", fontSize: "75px" }}>
              PR
            </h1>
            <h1 style={{ fontFamily: "Signika, sans-serif", fontSize: "75px" }}>
              OJECTS.
            </h1>
          </div>
          <div class="parallax"></div>
        </div>

        <div class="paralax-section2">
          <div class="paralax-info">
            <h1 style={{ fontFamily: "Montserrat, sans-serif" }}>
              Address Book
            </h1>
            <p>
              JQuery, DOM, JS, HTML, CSS <br />▪ Produced an address book
              application that allowed users to create, find and delete
              contacts. ▪ Employing the JQuery library I was able add dynamic
              elements to the DOM.
            </p>
            <div class="links">
              <a
                href="https://github.com/rauld323/address-book"
                target="_blank"
              >
                <em>GitHub</em>
              </a>
              <a href="#">
                <em>Live</em>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br id="project2" />

      <div class="paralax-container-right">
        <div class="paralax-section2-right">
          <div class="paralax-info-right">
            <h1 style={{ fontFamily: "Montserrat, sans-serif" }}>Alien Blog</h1>
            <p>
              Alien Blog React, JavaScript, HTML, CSS, Express, Node, RestAPI,
              MongoDB
              <br />▪ Developed a full stack project using React for frontend
              and Node for Backend. ▪ Using Multer and Mongoose, the app is able
              to dynamically upload images, a form and new blogs.
            </p>
            <div class="links">
              <a
                href="https://github.com/rauld323/react-ufo-blog"
                target="_blank"
              >
                <em>GitHub</em>
              </a>
              <a href="#" target="_blank">
                <em>Live</em>
              </a>
            </div>
          </div>
        </div>

        <div class="parallax-section1-right">
          <div class="parallax2"></div>
        </div>
      </div>

      <div class="paralax-container-left">
        <div class="parallax-section1">
          <div class="parallax3"></div>
        </div>

        <div class="paralax-section2">
          <div class="paralax-info3">
            <h1 style={{ fontFamily: "Montserrat, sans-serif" }}>Short API</h1>
            <p>
              JQuery, DOM, JS, API, HTML CSS <br />▪ Created a landing page that
              can cut URL length to a fraction using the shrtAPI. ▪ Designed an
              interface that displayed results dynamically.
            </p>
            <div class="links">
              <a
                href="https://github.com/rauld323/api-landing-page"
                target="_blank"
              >
                <em>GitHub</em>
              </a>
              <a href="#" target="_blank">
                <em>Live</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
