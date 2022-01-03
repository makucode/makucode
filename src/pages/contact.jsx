import Head from "next/head";
import Link from "next/link";
import CopyIcon from "../components/icons/CopyIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import XingIcon from "../components/icons/XingIcon";
import styles from "../styles/pages/Contact.module.scss";

export default function Contact() {
    const copyMail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("makucode@gmail.com");
    };

    const copyTel = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("+4917664633526");
    };

    return (
        <div className={styles.Contact}>
            <Head>
                <title>makucode // contact</title>
                <meta
                    name="description"
                    content="Hey, I'm Maku, a Web Developer. I love to get to know new people, so feel free to contact me in any way you like."
                />
            </Head>

            <main className={styles.ContactContainer}>
                <div className={styles.ContactContact}>
                    <div>
                        <span className={styles.Const}>const</span>{" "}
                        <span className={styles.Name}>maku</span>{" "}
                        <span>= &#10100;</span>
                    </div>
                    <p>
                        <span className={styles.Sub}>name:</span>{" "}
                        &apos;Maximilian Friedrich&apos;
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
                            <span className={styles.Sub}>tel:</span> &apos;0176
                            646 335 26&apos;
                            <CopyIcon click={copyTel} />
                        </a>
                    </Link>
                    <span>&#10101;</span>
                </div>
                <div className={styles.Imprint}>
                    <Link href="/imprint">Imprint</Link>
                </div>
                <div className={styles.ContactIcons}>
                    <Link href="https://github.com/makucode" passHref>
                        <a
                            className={styles.ContactIcon}
                            style={{ animationDelay: "0.2s" }}
                        >
                            <GithubIcon />
                        </a>
                    </Link>
                    <Link
                        href="https://www.xing.com/profile/Maximilian_Friedrich53/cv"
                        passHref
                    >
                        <a
                            className={styles.ContactIcon}
                            style={{ animationDelay: "0.4s" }}
                        >
                            <XingIcon />
                        </a>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/maximilian-friedrich-266168226/"
                        passHref
                    >
                        <a
                            className={styles.ContactIcon}
                            style={{ animationDelay: "0.6s" }}
                        >
                            <LinkedInIcon />
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
