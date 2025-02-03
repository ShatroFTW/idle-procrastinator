export const variants = {
    container: {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    },
    page: {
        initial: {
            opacity: 0,
            y: "10vh"
        },
        exit: {
            opacity: 0,
            y: "10vh"
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .4,
                ease: "easeOut",
                staggerChildren: 5
            }
        },
    },
    h3: {
        animate: {
            opacity: 0,
            y: ["-2vh", "-6vh"],
            transition: {
                duration: .4,
                ease: "easeOut",
                times: [0, 1]
            }
        }
    }
};