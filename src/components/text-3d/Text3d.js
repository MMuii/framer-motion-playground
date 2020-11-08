import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Text3d = () => {
    const [text, setText] = useState('');
    const [isFocused, setFocused] = useState(false);

    useEffect(() => {
        console.log('focused:', isFocused);
    }, [isFocused]);

    const renderText = arr => {
        return arr.split('').map((letter, index) => {
            return (
                <motion.span
                    key={index}
                    data-text={letter}
                    initial={{ x: -75, y: 75, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: letter === ' ' ? 0 : 1 }}
                    exit={{ x: -75, y: 75, opacity: 0, width: 0, transition: { duration: .15 } }}
                    style={{ zIndex: -index, opacity: letter === ' ' ? 0 : 1 }}
                >
                    {letter === ' ' ? 'a' : letter}
                </motion.span>
            )
        })
    }

    return (
        <div className="text-3d" onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <div className="perspective">
                <div className="dynamic-text">
                    <AnimatePresence>
                        {renderText(text)}
                    </AnimatePresence>
                </div>

                <div className="placeholders">
                    {[...Array(7).keys()].map(index => (
                        <motion.div 
                            className="placeholder" 
                            key={index}
                            style={{ top: -90 + index * 90 }}
                            animate={
                                isFocused 
                                    ? { 
                                        opacity: .2,
                                        fontSize: '35px',
                                        letterSpacing: '5px'
                                    }
                                    : {
                                        opacity: 1,
                                        fontSize: '40px',
                                        letterSpacing: '0px'
                                    }
                            }
                            transition={{ duration: .5 }}
                        >
                            <p className="marquee marquee1" >
                                <span>click and write anything click and write anything &nbsp;</span>
                            </p>
                            <p className="marquee marquee2">
                                <span>click and write anything click and write anything &nbsp;</span>
                            </p>
                        </motion.div>
                    ))}
                </div>

                {isFocused && <span className="pointer" />}
            </div>
        </div>
    )
}

export default Text3d;
