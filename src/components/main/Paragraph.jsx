import React from "react";
import styles from "../../styles/main/Paragraph.module.scss";

const Paragraph = ({ texts }) => {
    return (
        <div className={styles.Paragraph}>
            <span className={styles.IndexHtml}>{"<p>"}</span>
            <p className={styles.IndexCaptionText}>
                {texts.map((text, idx) => (
                    <span key={idx}>{text}</span>
                ))}
            </p>
            <span className={styles.IndexHtml2}>{"</p>"}</span>
        </div>
    );
};

export default Paragraph;
