import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Project from "../components/projects/Project";
import ChevronIcon from "../components/icons/ChevronIcon";
import projects from "../assets/projects";
import { fadeInScale } from "../utils/animations";
import styles from "../styles/pages/Projects.module.scss";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);

    const slideAnimations = fadeInScale;

    const handleProjectChange = (inc) => {
        if (inc && activeProject < projects.length - 1)
            setActiveProject(activeProject + 1);
        else if (!inc && activeProject > 0) setActiveProject(activeProject - 1);
    };

    return (
        <div className={styles.Projects}>
            <Head>
                <title>makucode/projects</title>
                <meta
                    name="description"
                    content="Hey, I'm Maku, a Web Developer. These are some of the projects I worked on."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.ProjectsContainer}>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={activeProject}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={slideAnimations}
                    >
                        <Project {...projects[activeProject]} />
                    </motion.div>
                </AnimatePresence>
                <div className={styles.ProjectsNav}>
                    <div
                        className={styles.ProjectsNavL}
                        onClick={() => handleProjectChange(false)}
                    >
                        <ChevronIcon />
                    </div>
                    {projects.map((project, idx) => (
                        <span
                            className={
                                activeProject === idx ? styles.Active : ""
                            }
                            key={idx}
                            onClick={() => setActiveProject(idx)}
                        ></span>
                    ))}
                    <div
                        className={styles.ProjectsNavR}
                        onClick={() => handleProjectChange(true)}
                    >
                        <ChevronIcon />
                    </div>
                </div>
            </main>
        </div>
    );
}
