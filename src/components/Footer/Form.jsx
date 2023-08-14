import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div
      id="contactForm"
      className={styles.overlayContact}
      style={{ height: "100%" }}
    >
      <div className={styles.overlayFormContent}>
        <form
          className={styles.formSection}
          action="https://formspree.io/f/mzbygdjk"
          method="post"
        >
          <div className={styles.inputSections}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              // style="margin-bottom: 15px;"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              // style="outline: none;"
              name="textarea"
              cols="40"
              rows="10"
              required
              placeholder="What's the Beef?"
            />
            <button type="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
