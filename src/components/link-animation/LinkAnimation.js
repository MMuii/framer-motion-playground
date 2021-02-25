import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LinkAnimation = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="link-animation">
            <div className="container">
                {'hover'.split('').map((letter, i) => (
                    <div 
                        className="letter-container" 
                        key={i}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                    >
                        <div>{letter}</div>
                        <motion.div
                            initial={{ left: '-100%' }}
                            animate={{ left: isHovered ? '0%' : '-100%' }}
                            transition={{ duration: isHovered ? .6 : .4, ease: [.7, 0, .3, 1] }}
                        >
                            {letter.toUpperCase()}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LinkAnimation
