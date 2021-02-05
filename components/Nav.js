import Link from "next/link";
import styles from "../styles/Nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">home</Link>
      <Link href="/works"> works</Link>
      <Link href="/about">about </Link>
      <Link href="/contact">contact </Link>
    </nav>
  );
}

export default Nav;
