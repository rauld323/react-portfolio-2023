import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.logo}>
        <a className={styles.logoText} href="#Intro">
          Raul Davila Campos
        </a>
      </div>
    </>
  );
};

export default Header;
