import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {
    
    return (
        <motion.div 
            className="test-3"
            whileHover={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
        ></motion.div>
    )
}

export default Test;