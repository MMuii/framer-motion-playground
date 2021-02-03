import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Disqus } from 'gatsby-plugin-disqus';

//TODO - w templatce dodać url, title i identifier (chyba zrobione ale disqus może dalej nie działać)
const Guide = (/*{ children, url, identifier, title, isMobile }*/ props) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const wrapperRef = useRef();

    const onScroll = () => {
        if (wrapperRef.current.scrollTop >= 600 && !showScrollTop) setShowScrollTop(true);
        else if (wrapperRef.current.scrollTop < 600 && showScrollTop) setShowScrollTop(false);  
    }   

    return (
        <div className="guide guide__wrapper" ref={wrapperRef} onScroll={onScroll}>
            {!props.isMobile && (
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
            )}
            <div className="guide__content">
                {props.children}
                <Disqus config={{ url: props.url , identifier: props.identifier, title: props.title }} />
            </div>
        </div>
    )
}

export default Guide;