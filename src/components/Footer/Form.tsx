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
          action="https://formspree.io/f/mzbygdjk"
          method="post"
          className={styles.formSection}
        >
          <div className={styles.inputSections} id="ove">
            <input type="text" name="name" placeholder="Name" required />
            <br />
            <br />
            <input type="email" name="email" placeholder="Email" required />
            <br />
            <br />
            <input
              // style="margin-bottom: 15px;"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              // style="outline: none;"
              name="textarea"
              cols={40}
              rows={10}
              required
              placeholder="What's the Beef?"
            />
          </div>
          <button className={styles.submit} type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
