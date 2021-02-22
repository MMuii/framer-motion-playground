import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';

const bubbleVariants = {
    opened: {
        y: -115,
        opacity: 1
    },
    closed: {
        y: 0,
        opacity: 0
    }
}

const BouncingBar = () => {
    const [clicked, setClicked] = useState(false);
    const [isTapping, setIsTapping] = useState(false);
    const svgControls = useAnimation();

    const handleTapStart = () => {
        if (!clicked) {
            setIsTapping(true);
            svgControls.start({
                d: 'M 0 100 Q 200 125 400 100 L 400 200 L 0 200 Z'
            });
        }
    }

    const handleTapEnd = () => {
        if (!clicked) {
            setIsTapping(false);
            svgControls.start({
                d: [
                    'M 0 100 Q 200 125 400 100 L 400 200 L 0 200 Z',
                    'M 0 100 Q 200 75 400 100 L 400 200 L 0 200 Z',
                    'M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z'
                ],
                transition: {
                    ease: [1, .14, .45, .86],
                    duration: .5
                }
            });
        } 
    }

    const handleTapCancel = () => {
        setIsTapping(false);
        svgControls.start({
            d: 'M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z'
        })
    }

    return (
        <div className="bouncing-bar">
            <div className="bar-container">
                <div className="icons-container">
                    <motion.i 
                        className="fas fa-home" 
                        animate={{ 
                            x: isTapping ? 8 : 0,
                            y: isTapping ? 4 : 0
                        }}
                    />
                    <motion.div 
                        className="icon-background"
                        animate={{ 
                            rotate: clicked ? 45 : 0,
                            y: isTapping ? 7 : 0
                        }}
                        onClick={() => setClicked(!clicked)}
                        onTapStart={handleTapStart}
                        onTap={handleTapEnd}
                        onTapCancel={handleTapCancel}
                        whileTap={{ backgroundColor: '#ffcdcc' }}
                    >
                        <i className="fas fa-plus" />
                    </motion.div>
                    <motion.i 
                        className="fas fa-cog" 
                        animate={{ 
                            x: isTapping ? -8 : 0,
                            y: isTapping ? 4 : 0
                        }}
                    />
                </div>

                <svg viewBox="0 0 400 200" className="bar">
                    <motion.path 
                        d="M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z"
                        animate={svgControls}
                    />
                </svg>

                <motion.div 
                    className="bubbles-container"
                    animate={clicked ? "opened" : "closed"}
                >
                    <motion.div 
                        className="bubble"
                        variants={bubbleVariants}
                    >
                        <i className="fas fa-image"/>
                    </motion.div>
                    <motion.div 
                        className="bubble"
                        variants={bubbleVariants}
                        transition={{ delay: clicked ? .07 : .05 }}
                    >
                        <i className="fas fa-camera"/>
                    </motion.div>
                    <motion.div 
                        className="bubble"
                        variants={bubbleVariants}
                    >
                        <i className="fas fa-folder"/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default BouncingBar
