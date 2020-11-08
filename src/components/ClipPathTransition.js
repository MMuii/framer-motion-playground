import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const transition = { duration: .3 };

const variants = {
    initial: {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
        transition
    },
    animate: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: {
            ...transition,
            staggerChildren: .05
        }
    },
    exit: {
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition
    }
}

const squareVariants = {
    initial: {
        opacity: 0,
        scale: .3
    },
    animate: {
        opacity: 1,
        scale: 1
    }
}

const squares = ['yellow', 'green', 'blue', 'violet'];

const ClipPathTransition = () => {
    const [selectedSquare, setSelectedSquare] = useState(null);

    useEffect(() => {
        const onkeypress = () => setSelectedSquare(null);
        document.addEventListener('keydown', onkeypress);

        return () => document.removeEventListener('keydown', onkeypress);
    });

    const renderSquares = () => squares.map((color, index) => (
        <motion.div 
            key={index}
            className={`square square--${color}`} 
            onClick={() => setSelectedSquare(color)}
            whileHover={{ scale: 1.05 }}
            variants={squareVariants}
            transition={{ duration: .2, type: 'spring', mass: 1 }}
        />
    ));

    return (
        <div className={`cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}>
            <AnimatePresence exitBeforeEnter initial={false}>
                {selectedSquare 
                    ? (
                        <motion.div 
                            className={`card card__wrapper 
                                        card__wrapper--${selectedSquare}`}
                            key="card"
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: .3 }}
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea neque quidem exercitationem possimus explicabo a recusandae ex, culpa consequuntur deleniti cumque, tenetur repellat mollitia!
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
                            transition={{ duration: .3, staggerChildren: 2 }}
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