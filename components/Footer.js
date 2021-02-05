import Social from "./Social";
import styles from "../styles/Footer.module.css"
function Footer() {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <Social />
      <p>All copyrights reserved &copy; abdelhamid {date.getUTCFullYear()}</p>
    </footer>
  );
}

export default Footer;
