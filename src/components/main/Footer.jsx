import React from "react";
import Link from "next/link";
import styles from "../../styles/main/Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Link href="/" passHref>
                <a>
                    <span>Imprint</span>
                </a>
            </Link>
        </footer>
    );
};

export default Footer;
