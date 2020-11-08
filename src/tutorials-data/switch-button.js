export const files = [
{
    id: 0,
    name: 'Switch', 
    language: 'javascript',
    extension: 'js',
    code: `import React, { useState } from 'react';
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
            className="switch background dark"
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
}`
},
{
    id: 1,
    name: 'switch', 
    language: 'css',
    extension: 'scss',
    code: `.switch {
    transition: all .3s;

    &.background {
        height: 100%;
        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .switch-container {
        height: 40px;
        width: 100px;
        background-image: radial-gradient(circle farthest-corner at 10% 20%, 
                                            rgba(253,203,50,1) 0%, 
                                            rgba(244,56,98,1) 100.2%);
        border-radius: 25px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 5px;
        cursor: pointer;
    }

    .handle {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: #fff;
        overflow: hidden;
    }

    .icon {
        color: #f88748;
    }

    &[data-darkmode="true"] {
        background-color: #52527a;

        .switch-container {
            background-image: linear-gradient(109.8deg,
                                                rgba(62,5,116,1) -5.2%, 
                                                rgba(41,14,151,1) -5.2%, 
                                                rgba(216,68,148,1) 103.3%);
        }
        
        .icon {
            color: #501a96;
        }
    }
}`
    }
]