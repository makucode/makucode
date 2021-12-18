import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";
import Background from "../components/main/Background";
import Header from "../components/main/Header";
import useKeepStyles from "../hooks/useKeepStyles";
import { fadeInScale } from "../utils/animations";
import "../styles/main.scss";

function App({ Component, pageProps }) {
    const router = useRouter();

    const animations = fadeInScale;

    //FIX FOR FLASHING UNSTYLED COMPONENTS ON PAGE CHANGE
    useKeepStyles();

    return (
        <MouseParallaxContainer>
            <MouseParallaxChild
                factorX={0.02}
                factorY={0.025}
                className="Header Parallax"
            >
                <Header />
            </MouseParallaxChild>
            <MouseParallaxChild
                factorX={0.03}
                factorY={0.05}
                className="Content Parallax"
            >
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={router.route}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                    >
                        <div className="Page">
                            <div className="Wrapper">
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </MouseParallaxChild>

            {/*             <MouseParallaxChild factorX={0.02} factorY={0.025}>
                <Footer />
            </MouseParallaxChild> */}

            <MouseParallaxChild
                factorX={0.01}
                factorY={0.0125}
                inverted
                className="Background Parallax"
            >
                <Background />
            </MouseParallaxChild>
        </MouseParallaxContainer>
    );
}

export default App;
