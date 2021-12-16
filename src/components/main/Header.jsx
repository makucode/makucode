import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/main/Header.module.scss";

const Header = () => {
    const router = useRouter();

    console.log(router.pathname);

    const links = [
        { title: "Home", url: "/" },
        { title: "Projects", url: "/projects" },
        { title: "Contact", url: "/contact" },
    ];

    return (
        <nav className={styles.Header}>
            <Link href="/" passHref>
                <a className={styles.HeaderTitle}>
                    <span>$</span>
                    <h1>makucode</h1>
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
