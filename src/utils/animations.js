export const fadeInUp = {
    pageInitial: {
        opacity: 0,
        transform: "translateY(50px)",
    },
    pageAnimate: {
        opacity: 1,
        transform: "translateY(0px)",
    },
    pageExit: {
        opacity: 0,
        transform: "translateY(50px)",
    },
};

export const fadeInBlur = {
    pageInitial: {
        opacity: 0,
        filter: "blur(3px)",
    },
    pageAnimate: {
        opacity: 1,
        filter: "blur(0px)",
    },
    pageExit: {
        opacity: 0,
        filter: "blur(3px)",
    },
};

export const fadeInScale = {
    pageInitial: {
        opacity: 0,
        filter: "blur(0)",
        transform: "scale(0.9)",
    },
    pageAnimate: {
        opacity: 1,
        filter: "blur(0)",
        transform: "scale(1)",
    },
    pageExit: {
        opacity: 0,
        filter: "blur(3px)",
        transform: "scale(0.9)",
    },
};
