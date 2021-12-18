import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/main/Header.module.scss";

const Header = () => {
    const router = useRouter();

    const [stopBlink, setStopBlink] = useState(false);

    console.log(router.pathname);

    const links = [
        { title: "Home", url: "/" },
        { title: "Projects", url: "/projects" },
        { title: "Contact", url: "/contact" },
    ];

    useEffect(() => {
        setTimeout(() => setStopBlink(true), 3500);
    }, []);

    return (
        <nav className={styles.Header}>
            <Link href="/" passHref>
                <a className={styles.HeaderTitle}>
                    <span>$</span>
                    <h1 className={stopBlink ? styles.StopBlink : ""}>
                        makucode
                    </h1>
                </a>
            </Link>
            <ul className={styles.HeaderLinks}>
                {links.map((link, idx) => (
                    <li
                        key={link.title}
                        style={{ animationDelay: "1." + idx + "s" }}
                        className={
                            router.pathname === link.url ? styles.NavActive : ""
                        }
                    >
                        <Link href={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
