import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const parentVariants = {
    wave: {
        transition: {
            staggerChildren: .04
        }
    }
}

const childVariants = {
    wave: {
        y: [0, -80, 0],
        color: ['#ff6698', '#ffb366', '#ffff66', '#98ff66', '#6698ff'],
        transition: {
            duration: 1
        }
    }
}

const TextWave = () => {
    const [{ isHovering, background, hasAnimationEnded }, setState] = useState({ 
        isHovering: false, 
        background: 'hover', 
        hasAnimationEnded: true 
    });

    const waveControls = useAnimation();

    const wave = async () => {
        setState(prevState => ({ ...prevState, background: '', hasAnimationEnded: false }));
        await waveControls.start("wave");
        setState(prevState => ({ 
            ...prevState, 
            background: prevState.isHovering ? 'repeat' : 'hover', 
            hasAnimationEnded: true 
        }));
    }

    return (
        <div 
            className="text-wave"
            onMouseEnter={() => {
                setState(prevState => ({ ...prevState, isHovering: true }));
                if (hasAnimationEnded) wave();
            }}
            onMouseLeave={() => {
                setState(prevState => ({ ...prevState, isHovering: false, background: 'hover' }));
            }}
        >
            <AnimatePresence exitBeforeEnter>
                {background === 'hover' && (
                     <motion.div 
                        className="text-wave__hover"
                        initial={{ scale: 0 }}
                        animate={{ 
                            scale: 1,
                            transition: {
                                delay: (!hasAnimationEnded && !isHovering) ? .9 : 0
                            } 
                        }}
                        exit={{ scale: 0, transition: { duration: .3 } }}
                    >Hover!</motion.div>
                )}
                {background === 'repeat' && (
                    <motion.i 
                        className="fas fa-redo-alt text-wave__hover" 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, transition: { duration: .3 } }}
                        onClick={() => wave()}
                    />
                )}
            </AnimatePresence>
            <motion.div 
                className="text-wave__wrapper"
                animate={waveControls}
                variants={parentVariants}
            >
                <motion.span variants={childVariants}>Y</motion.span>
                <motion.span variants={childVariants}>a</motion.span>
                <motion.span variants={childVariants}>a</motion.span>
                <motion.span variants={childVariants}>a</motion.span>
                <motion.span variants={childVariants}>a</motion.span>
                <motion.span variants={childVariants}>a</motion.span>
                <motion.span variants={childVariants}>a</motion.span>
                <motion.span variants={childVariants}>y</motion.span>
                <motion.span variants={childVariants}>y</motion.span>
                <motion.span variants={childVariants}>y</motion.span>
                <motion.span variants={childVariants}>y</motion.span>
                <motion.span variants={childVariants}>!</motion.span>
            </motion.div>
        </div>
    )
}

export default TextWave;
