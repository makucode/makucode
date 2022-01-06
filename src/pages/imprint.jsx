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
                    <div>&#123;</div>
                    <p>
                        <span className={styles.Sub}>
                            <span className={styles.Name}>
                                &quot;name&quot;
                            </span>
                            :
                        </span>{" "}
                        &quot;Maximilian Friedrich&quot;
                    </p>
                    <p>
                        <span className={styles.Sub}>
                            {" "}
                            <span className={styles.Name}>
                                &quot;address&quot;
                            </span>
                            :
                        </span>{" "}
                        &quot;Kötnerholzweg 38&quot;
                    </p>
                    <p>
                        <span className={styles.Sub}>
                            {" "}
                            <span className={styles.Name}>
                                &quot;postCode&quot;
                            </span>
                            :
                        </span>{" "}
                        &quot;30451&quot;
                    </p>
                    <p>
                        <span className={styles.Sub}>
                            {" "}
                            <span className={styles.Name}>
                                &quot;city&quot;
                            </span>
                            :
                        </span>{" "}
                        &quot;Hannover&quot;
                    </p>
                    <Link href="mailto:makucode@gmail.com">
                        <a>
                            <span className={styles.Sub}>
                                {" "}
                                <span className={styles.Name}>
                                    &quot;email&quot;
                                </span>
                                :
                            </span>{" "}
                            &quot;makucode@gmail.com&quot;
                        </a>
                    </Link>
                    <Link href="tel:+4917664633526">
                        <a>
                            <span className={styles.Sub}>
                                {" "}
                                <span className={styles.Name}>
                                    &quot;tel&quot;
                                </span>
                                :{" "}
                            </span>
                            &quot;+49 176 646 335 26&quot;
                        </a>
                    </Link>
                    <span>&#10101;</span>
                </div>
            </main>
        </div>
    );
}
