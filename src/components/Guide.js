import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disqus } from 'gatsby-plugin-disqus';

const Guide = ({ children, url, identifier, title }) => {
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
                    opacity: showScrollTop ? 1 : 0 
                }}
                transition={{ duration: .2 }}
            >
                <i className="fas fa-chevron-up fa-4x" />
            </motion.div>
            <div className="guide__content">
                {children}
                <Disqus config={{ url, identifier, title }} />
            </div>
        </div>
    )
}

export default Guide;