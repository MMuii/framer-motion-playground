import React, { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { WindowSizeContext } from '../../contexts/WindowSizeContext';

const starVariants = {
    initial: {
        scale: 0
    },
    animate: i => ({
        scale: 1,
        transition: {
            delay: i * .04,
            duration: .25,
            type: 'spring',
            stiffness: 175
        }
    }),
    exit: i => ({
        scale: 0,
        transition: {
            duration: .25,
            delay: .2 - i * .04,
        }
    }),
    hovered: {
        scale: .8,
        transition: {
            duration: .2
        }
    }
}

const Star = ({ i, isVisible, isRated }) => {
    const [isHovering, setIsHovering] = useState(false);
    const starControls = useAnimation();
    const backgroundControls = useAnimation();
    const { width } = useContext(WindowSizeContext) || 0;

    useEffect(() => {
        if (isRated && isHovering && width >= 768) starControls.start('hovered');
        else if (isRated) starControls.start('animate');
        else starControls.start('exit');
    }, [isRated, isHovering]);

    useEffect(() => {
        if (isVisible) backgroundControls.start({ background: '#ffd700' });
        else backgroundControls.start({ background: '#aaaaaa' });
    }, [isVisible]);

    return (
        <>
            <motion.div 
                className="star-background" 
                initial={{ background: '#aaaaaa' }}
                animate={backgroundControls}
            />
            <motion.i 
                className="fas fa-star" 
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
                variants={starVariants}
                initial="initial"
                animate={starControls}
                custom={i}
            />
        </>
    )
}

const StarRating = () => {
    const [isRated, setIsRated] = useState(0);
    const [isHovering, setIsHovering] = useState(0);
    
    return (
        <div className="star-rating">
            <div className="stars-container">
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div 
                        className="star-wrapper"
                        onMouseOver={() => setIsHovering(i)}
                        onClick={() => setIsRated(i)}
                        key={i}
                    >
                        <Star 
                            i={i} 
                            isVisible={isHovering >= i} 
                            isRated={isRated >= i}    
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default StarRating
