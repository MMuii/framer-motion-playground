import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Switch = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);

    const transition = {
        duration: .2
    }

    const variants = {
        enter: {
            y: -30,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: 30,
            opacity: 0
        }
    }

    return (
        <div 
            className="switch background"
            data-darkmode={isOn}
        >
            <div 
                className="switch-container" 
                onClick={toggleSwitch}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
            >
                <motion.div 
                    layout 
                    className="handle"
                >
                    <AnimatePresence exitBeforeEnter initial={false}>
                        {isOn 
                        ? (
                            <motion.i 
                                className="icon far fa-moon"
                                key="moon"
                                variants={variants}
                                initial="enter"
                                animate="animate"
                                exit="exit" 
                                transition={transition}
                            />
                        )
                        : (
                            <motion.i 
                                className="icon far fa-sun"
                                key="sun"
                                variants={variants}
                                initial="enter"
                                animate="animate"
                                exit="exit" 
                                transition={transition}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>

    )
}

export default Switch;