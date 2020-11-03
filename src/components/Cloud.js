import React from 'react';
import { motion } from 'framer-motion';

const variants = ({ size, y, duration, delay, scale }) => {
    return {
        initial: {
            y,
            scale: scale || 1,
            zIndex: size
        },
        animate: {
            x: [-225, 225],
            transition: {
                delay,
                duration,
                repeat: Infinity,
                ease: 'linear'
            }
        },
        exit: {
            x: 600,
            transition: {
                duration: 1.5
            }
        }
    }
}

const Cloud = (props) => {
    return (
        <motion.div 
            className={`cloud cloud--size-${props.size}`} 
            variants={variants(props)}
            initial="initial"
            animate="animate"
            exit="exit"
        />
    )
}

export default Cloud;