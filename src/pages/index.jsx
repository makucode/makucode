import { useRef } from "react";
import Head from "next/head";
import MongoIcon from "../components/icons/MongoIcon";
import NextIcon from "../components/icons/NextIcon";
import NodeIcon from "../components/icons/NodeIcon";
import ReactIcon from "../components/icons/ReactIcon";
import SassIcon from "../components/icons/SassIcon";
import useOnScreen from "../hooks/useOnScreen";
import styles from "../styles/pages/Index.module.scss";
import Scrollbar from "../components/main/Scrollbar";
import Paragraph from "../components/main/Paragraph";
import AlocasiaIcon from "../components/icons/AlocasiaIcon";

export default function Home() {
    const headingRef = useRef(null);
    const headingVisible = useOnScreen(headingRef);
    const captionRef = useRef(null);
    const captionVisible = useOnScreen(captionRef);
    const aboutRef = useRef(null);
    const aboutVisible = useOnScreen(aboutRef);

    return (
        <div className={styles.Index}>
            <Head>
                <title>makucode // home</title>
                <meta
                    name="description"
                    content="Hey, I'm Maku, a Web Developer from Germany. I love working with JavaScript and stuff like React and Node.js."
                />
            </Head>

            <main className={styles.IndexContainer}>
                <section id="Heading" className={styles.IndexHeadingWrapper}>
                    <div
                        className={
                            styles.IndexHeading +
                            " " +
                            (headingVisible ? styles.Visible : "")
                        }
                        ref={headingRef}
                    >
                        <span className={styles.IndexHtml}>{"<h1>"}</span>
                        <h1>
                            <span>I&apos;m Maku,</span>
                            <span>a Web Developer</span>
                        </h1>
                        <span className={styles.IndexHtml2}>{"</h1>"}</span>
                    </div>
                </section>
                <section
                    id="Caption"
                    className={
                        styles.IndexCaption +
                        " " +
                        (captionVisible ? styles.Visible : "")
                    }
                    ref={captionRef}
                >
                    <div>
                        <div className={styles.IndexCaptionP}>
                            <Paragraph
                                texts={[
                                    "These are some of the technologies I love working with,",
                                    "but I also love to try out new ones.",
                                ]}
                            />
                        </div>
                        <div className={styles.IndexTechnologies}>
                            {captionVisible && (
                                <>
                                    <div
                                        className={styles.IndexTechnologiesIcon}
                                        style={{ animationDelay: "0.2s" }}
                                    >
                                        <ReactIcon />
                                    </div>
                                    <div
                                        className={styles.IndexTechnologiesIcon}
                                        style={{ animationDelay: "0.4s" }}
                                    >
                                        <NodeIcon />
                                    </div>
                                    <div
                                        className={styles.IndexTechnologiesIcon}
                                        style={{ animationDelay: "0.6s" }}
                                    >
                                        <SassIcon />
                                    </div>
                                    <div
                                        className={styles.IndexTechnologiesIcon}
                                        style={{ animationDelay: "0.8s" }}
                                    >
                                        <NextIcon />
                                    </div>
                                    <div
                                        className={styles.IndexTechnologiesIcon}
                                        style={{ animationDelay: "1s" }}
                                    >
                                        <MongoIcon />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
                <section
                    id="About"
                    className={
                        styles.IndexAbout +
                        " " +
                        (aboutVisible ? styles.Visible : "")
                    }
                    ref={aboutRef}
                >
                    <div className={styles.IndexAboutContent}>
                        <AlocasiaIcon />
                        <Paragraph
                            texts={[
                                "When I'm not coding, I like to look at and take care of my collection of exotic houseplants.",
                                "Since I spend most of my time in front of a computer screen,",
                                "having a piece of nature right next to me helps me grounding myself in a way.",
                            ]}
                        />
                    </div>
                </section>
            </main>

            <Scrollbar
                sections={[
                    { id: "Heading", isVisible: headingVisible },
                    { id: "Caption", isVisible: captionVisible },
                    { id: "About", isVisible: aboutVisible },
                ]}
            />
        </div>
    );
}
