import Link from "next/link";
import styles from "../styles/components/Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <img src="logo-f1.svg" alt="logo" className={styles.logo} />
        </Link>
        <p className={styles.year}>{new Date().getFullYear()}</p>
      </div>
    </header>
  );
};

export default Header;
