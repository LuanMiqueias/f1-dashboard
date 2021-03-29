import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            F1 <span>Dashboard</span>
          </h1>
          <p className={styles.sub_title}>
            Acompanhe seus jogadores preferidos
          </p>
          <Link href="dashboard">
            <button className={styles.btn_goDashboard}>Go to dashboard</button>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Desenvlvido por{" "}
        <a href="https://luanmiqueias.com.br" target="blank">
          Luan Miqueias
        </a>
      </footer>
    </div>
  );
}
