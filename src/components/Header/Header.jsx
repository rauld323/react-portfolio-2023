import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.logo}>
      <a className={styles.logoText} href="#Intro">
        Raul Davila Campos
      </a>
    </header>
  );
};

export default Header;
