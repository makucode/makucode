import React from "react";
import Link from "next/link";
import styles from "../../styles/main/Scrollbar.module.scss";

const Scrollbar = ({ sections }) => {
    return (
        <div className={styles.Scrollbar}>
            {sections.map((section, idx) => (
                <Link key={section.id} href={"#" + section.id} passHref>
                    <a>
                        <span
                            className={section.isVisible ? styles.Active : ""}
                            style={{
                                animationDelay:
                                    "1." + (idx + 1) + "s !important",
                            }}
                        ></span>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default Scrollbar;
