import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WindowSizeContext } from '../contexts/WindowSizeContext';
import { useWindowSize } from '../hooks/useWindowSize';
import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
import { use100vh } from 'react-div-100vh';

// 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' WIDOCZNY
// polygon(0 0, 0 0, 0 100%, 0% 100%) NIEWIDOCZNY LEWO
// polygon(100% 0, 100% 0, 100% 100%, 100% 100%) NIEWIDOCZNY PRAWO

const variants = {
    initial: {
        // clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' //poziomo
        // clipPath: 'circle(0.0% at 50% 50%)' //kółko
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' //NIEWIDOCZNY LEWO
        // opacity: 0
    },
    animate: {
        // clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
        // clipPath: 'circle(70.7% at 50% 50%)'
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        // opacity: 1
    },
    exit: {
        // clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        // clipPath: 'circle(0.0% at 50% 50%)'
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' //NIEWIDOCZNY PRAWO
        // opacity: 0
    }
}

const PageLayout = ({ children, location }) => {
    const { height, width } = useWindowSize();
    
    return (
        <>
            <BrowserView>
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
            </BrowserView>

            <MobileView>
                <WindowSizeContext.Provider value={{ height, width }}>
                    {children}
                </WindowSizeContext.Provider>
            </MobileView>
        </>
    )
}

export default PageLayout;