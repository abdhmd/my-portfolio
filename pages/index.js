import styles from "../styles/Home.module.css";
import Logo from "../components/Logo"

export default function Home() {
  return (
    <section className={styles.hero}>
      <Logo/>
      <h1>abdelhamid</h1>
      <h3>frontend  developer</h3>
    </section>
  );
}
