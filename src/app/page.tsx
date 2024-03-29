import { Pacifico } from "next/font/google";
import styles from "./page.module.scss";
import Link from "next/link";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <section className={styles.homepage}>
      <p className={styles.text1}>I&#39;m</p>
      <h1 className={styles.text2}>Dimo Hristov</h1>
      <p className={styles.text3}>Full Stack Developer</p>
      <div className={styles.links}>
        <Link
          className={styles.link1}
          href={"/pdf/Dimo-Hristov-CV.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </Link>
        <Link className={styles.link1} href={"/portfolio"}>
          Previous Projects
        </Link>
      </div>
      <p className={`${pacifico.className} ${styles.text4}`}>
        Code With Passion
      </p>
    </section>
  );
}
