import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";
import Background from "../components/main/Background";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import { fadeInBlur } from "../utils/animations";
import "../styles/main.scss";

function App({ Component, pageProps }) {
    const router = useRouter();

    const animations = fadeInBlur;

    return (
        <MouseParallaxContainer>
            <MouseParallaxChild
                factorX={0.02}
                factorY={0.025}
                className="Header"
            >
                <Header />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.03} factorY={0.05}>
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
                className="Background"
            >
                <Background />
            </MouseParallaxChild>
        </MouseParallaxContainer>
    );
}

export default App;
