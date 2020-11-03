import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Rain = () => {
    const [[offsetX, offsetY], setOffset] = useState([0, 0]);
    const [[mx, my], setMouse] = useState([0, 0]);
    const containerRef = useRef();

    useEffect(() => {
        const x = window.pageXOffset + containerRef.current.getBoundingClientRect().left;
        const y = window.pageYOffset + containerRef.current.getBoundingClientRect().top;

        setOffset([x, y]);
    }, [containerRef]);

    return (
        <div className="rain" ref={containerRef} onMouseMove={e => {
            const { offsetTop, offsetLeft } = e.currentTarget;
            setMouse([(e.pageX - offsetLeft - offsetX) * .03, (e.pageY - offsetTop - offsetY) * .03]);
        }}>
            <div className="rain__clouds">
                {Array.from({ length: 3 }, (item, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -800, zIndex: (index+1) * 10 }}
                        animate={{ x: 0 }}
                        exit={{ x: 800 }}
                        transition={{ duration: 1.5, delay: index * .3 }}
                    >
                        <motion.div
                            className={`cloud-group__clouds-wrapper cloud-group__clouds-wrapper--${index + 1}`}
                            animate={{ x: mx * (index + 1), y: my * (index + 1)}}
                            transition={{ ease: 'linear' }}
                        >
                            {Array.from({ length: 3 }, (item, index) => <div className="cloud" key={index} />)}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <motion.div 
                className="rain__container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: .7, delay: 1 } }}
                exit={{ opacity: 0 }}
            >
                {Array.from({ length: 21 }, (item, index) => <div className="rain__stream" key={index} />)}
            </motion.div>
        </div>
    )
}

export default Rain;
