import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' WIDOCZNY
// polygon(0 0, 0 0, 0 100%, 0% 100%) NIEWIDOCZNY LEWO
// polygon(100% 0, 100% 0, 100% 100%, 100% 100%) NIEWIDOCZNY PRAWO

const variants = {
    initial: {
        // clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' //poziomo
        // clipPath: 'circle(0.0% at 50% 50%)' //kółko
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' //NIEWIDOCZNY LEWO
    },
    animate: {
        // clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
        // clipPath: 'circle(70.7% at 50% 50%)'
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    },
    exit: {
        // clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        // clipPath: 'circle(0.0% at 50% 50%)'
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' //NIEWIDOCZNY PRAWO
    }
}

const PageLayout = ({ children, location }) => {
    console.log('location', location)
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <motion.main 
                key={location.pathname}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: .3 }}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    )
}

export default PageLayout;