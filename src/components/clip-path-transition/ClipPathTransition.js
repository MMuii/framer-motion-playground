import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WindowSizeContext } from '../../contexts/WindowSizeContext';

const variants = {
    initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
        transition: { duration: .4 }
    },
    animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: .4, staggerChildren: .1 }
    },
    exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: .4 }
    }
}

const squareVariants = {
    initial: {
        opacity: 0,
        scale: .3,
    },
    animate: {
        opacity: 1,
        scale: 1,
    }
}

const ClipPathTransition = () => {
    const [selectedSquare, setSelectedSquare] = useState(null);
    const { width } = useContext(WindowSizeContext) || 0;

    const renderSquares = () => {
        const squares = width >= 768 
            ? ['yellow', 'green', 'blue', 'violet']
            : ['yellow', 'green', 'blue'];

        return squares.map((color, i) => (
            <motion.div 
                key={i}
                className={`square square--${color}`} 
                onClick={() => setSelectedSquare(color)}
                variants={squareVariants}
                transition={{ duration: .2, type: 'spring' }}
            />    
        ));
    }

    return (
        <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
            <AnimatePresence exitBeforeEnter initial={false}>
                {selectedSquare 
                    ? (
                        <motion.div 
                            className={`card card__wrapper card__wrapper--${selectedSquare}`}
                            key="card"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <div className="card__header">
                                <h2>Lorem ipsum</h2>
                                <button onClick={() => setSelectedSquare(null)}>
                                    <i className="fas fa-times fa-2x"/>
                                </button>
                            </div>
                            <div className="card__content">
                                <div className="card__img-placeholder" />
                                <div className="card__text-placeholder">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea neque quidem exercitationem possimus.
                                </div>
                            </div>
                        </motion.div>
                    )
                    : (
                        <motion.div 
                            className="cp-transition__squares-wrapper"
                            key="squares"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {renderSquares()}
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default ClipPathTransition;