import Head from "next/head";
import Link from "next/link";
import CopyIcon from "../components/icons/CopyIcon";
import styles from "../styles/pages/Imprint.module.scss";

export default function Imprint() {
    const copyMail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("makucode@gmail.com");
    };

    const copyTel = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("+4917664633526");
    };

    return (
        <div className={styles.Imprint}>
            <Head>
                <title>makucode // imprint</title>
                <meta
                    name="description"
                    content="makuco.de/Imprint - Impressum"
                />
            </Head>

            <main className={styles.ImprintContainer}>
                <div className={styles.ImprintImprint}>
                    <div>
                        <span className={styles.Const}>const</span>{" "}
                        <span className={styles.Name}>imprint</span>{" "}
                        <span>= &#10100;</span>
                    </div>
                    <p>
                        <span className={styles.Sub}>name:</span>{" "}
                        &apos;Maximilian Friedrich&apos;
                    </p>
                    <p>
                        <span className={styles.Sub}>address:</span>{" "}
                        &apos;Kötnerholzweg 38&apos;
                    </p>
                    <p>
                        <span className={styles.Sub}>postCode:</span>{" "}
                        &apos;30451&apos;
                    </p>
                    <p>
                        <span className={styles.Sub}>city:</span>{" "}
                        &apos;Hannover&apos;
                    </p>
                    <Link href="mailto:makucode@gmail.com">
                        <a>
                            <span className={styles.Sub}>email:</span>{" "}
                            &apos;makucode@gmail.com&apos;
                            <CopyIcon click={copyMail} />
                        </a>
                    </Link>
                    <Link href="tel:+4917664633526">
                        <a>
                            <span className={styles.Sub}>tel:</span> &apos;+49
                            176 646 335 26&apos;
                            <CopyIcon click={copyTel} />
                        </a>
                    </Link>
                    <span>&#10101;</span>
                </div>
            </main>
        </div>
    );
}
