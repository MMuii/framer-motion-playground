import React, { useEffect, useRef } from 'react';
import { motion, useElementScroll, useTransform } from 'framer-motion';

const ElementScroll = () => {
    const ref = useRef();
    const { scrollYProgress } = useElementScroll(ref);

    const top = useTransform(scrollYProgress, [0, .5, 1], [40, 80, 120]);
    const rotateZ = useTransform(scrollYProgress, [0, .5, 1], [0, 90, 180]);
    
    scrollYProgress.onChange(y => console.log(y));

    return (
        <div ref={ref} className="element-scroll">
            <div className="element-scroll__content">
                <motion.div 
                    className="bloczek"
                    style={{ rotateZ, top }}
                >
                    bloczek
                </motion.div>
            </div>
        </div>
    )
};

export default ElementScroll;