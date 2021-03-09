import React from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import { WindowSizeContext } from '../contexts/WindowSizeContext';
import { useWindowSize } from '../hooks/useWindowSize';
import useDeviceDetect from '../hooks/useDeviceDetect';

const variants = {
    initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' //NIEWIDOCZNY LEWO
    },
    animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    },
    exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' //NIEWIDOCZNY PRAWO
    }
}

const PageLayout = ({ children, location }) => {
    const { height, width } = useWindowSize();
    const { isMobile } = useDeviceDetect();

    if (isMobile) {
        return (
            <WindowSizeContext.Provider value={{ height, width }}>
                {children}
            </WindowSizeContext.Provider>
        )
    }

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <motion.main 
                key={location.pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: .5 }}
            >
                <WindowSizeContext.Provider value={{ height, width }}>
                    {children}
                </WindowSizeContext.Provider>
            </motion.main>
        </AnimatePresence>
    )
}

export default PageLayout;