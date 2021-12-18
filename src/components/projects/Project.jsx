import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";
import styles from "../../styles/projects/Project.module.scss";

const Project = ({ name, text, imgs, alts, icons, url }) => {
    const [isHover, setIsHover] = useState(false);
    const imgAnimations = fadeInUp;

    const [sectionsIn, setSectionsIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSectionsIn(true);
        }, 100);
    }, []);

    return (
        <div className={styles.Project}>
            <div
                className={
                    styles.ProjectInfo +
                    " " +
                    (sectionsIn ? styles.SectionsIn : "")
                }
            >
                <h3>{name}</h3>
                <p>{text}</p>
                <div className={styles.ProjectTechnologies}>
                    {icons.map((Icon, idx) => (
                        <div
                            key={idx}
                            className={styles.ProjectTechnologiesIcon}
                        >
                            {Icon}
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={
                    styles.ProjectImg +
                    " " +
                    (sectionsIn ? styles.SectionsIn : "")
                }
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={isHover}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                        }}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={imgAnimations}
                    >
                        {!isHover && (
                            <Image
                                src={imgs[0]}
                                alt={alts[0]}
                                layout="responsive"
                                objectFit="contain"
                                loading="eager"
                                priority
                            />
                        )}
                        {isHover && (
                            <Image
                                src={imgs[1]}
                                alt={alts[1]}
                                layout="responsive"
                                objectFit="contain"
                                loading="eager"
                                priority
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Project;
