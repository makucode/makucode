import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/main/Header.module.scss";

const Header = () => {
    const router = useRouter();
    const { width } = useWindowDimensions();

    const [navOpen, setNavOpen] = useState(false);
    const [stopBlink, setStopBlink] = useState(false);

    const links = [
        { title: "Home", url: "/" },
        { title: "Projects", url: "/projects" },
        { title: "Contact", url: "/contact" },
    ];

    useEffect(() => {
        if (navOpen) document.querySelector("body").style.overflow = "hidden";
        else document.querySelector("body").style.overflow = "auto";
    }, [navOpen]);

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
            {width <= 600 &&
                (!navOpen ? (
                    <div
                        className={styles.HeaderBurger}
                        onClick={() => setNavOpen(true)}
                    >
                        <div className={styles.HeaderBurgerButton}></div>
                    </div>
                ) : (
                    <div
                        className={styles.HeaderClose}
                        onClick={() => setNavOpen(false)}
                    >
                        <div className={styles.HeaderCloseButton}></div>
                    </div>
                ))}
            <div
                className={
                    styles.HeaderLinksContainer +
                    " " +
                    (navOpen ? styles.NavOpen : "")
                }
            >
                <ul className={styles.HeaderLinks}>
                    {links.map((link, idx) => (
                        <li
                            key={link.title}
                            style={{ animationDelay: "1." + idx + "s" }}
                            className={
                                router.pathname === link.url
                                    ? styles.NavActive
                                    : ""
                            }
                            onClick={() => setNavOpen(false)}
                        >
                            <Link href={link.url}>
                                <a className={styles.HeaderLink}>
                                    <span>{link.title}</span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
