import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Guide = ({ children }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const wrapperRef = useRef();

    const onScroll = () => {
        if (wrapperRef.current.scrollTop >= 600 && !showScrollTop) setShowScrollTop(true);
        else if (wrapperRef.current.scrollTop < 600 && showScrollTop) setShowScrollTop(false);  
    }   

    return (
        <div className="guide guide__wrapper" ref={wrapperRef} onScroll={onScroll}>
            <motion.div 
                className="guide__scroll-top" 
                key="scroll-top"
                onClick={() => wrapperRef.current.scrollTop = 0}
                animate={{ 
                    y: showScrollTop ? 0 : -30, 
                    x: '-250%', 
                    opacity: showScrollTop ? 1 : 0 
                }}
                transition={{ duration: .2 }}
            >
                <i className="fas fa-chevron-up fa-3x" />
            </motion.div>
            <div className="guide__content">
                {children}
            </div>
        </div>
    )
}

export default Guide;