import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryCard = props => {
    const {
        children,
        tutorial, 
        tutorial: { className, slug, name, description, direction },
        hovering,
        setHovering
    } = props;

    const [hoveringLink, setHoveringLink] = useState(false);
    const [hoverable, setHoverable] = useState(true);

    const variants = {
        initial: {
            x: direction === 'left' ? -15 : 15,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: .07
            }
        },
        exit: {
            x: direction === 'left' ? -15 : 15,
            opacity: 0,
            transition: {
                staggerChildren: .07
            }
        }
    }

    const linkHover = direction === 'left' 
        ? { paddingRight: '30px' }
        : { paddingLeft: '30px' };

    return (
        <div 
            className={`gallery-card container ${className || ''}`} 
            onMouseEnter={() => setHovering(tutorial)}
            onMouseLeave={() => {
                setHovering(false);
                setHoverable(false);
            }}
            style={{ zIndex: hovering ? 10 : 1, pointerEvents: hoverable ? 'all' : 'none' }}
        >
            <div className="gallery-card__content-wrapper">
                {children}
            </div>

            <AnimatePresence onExitComplete={() => setHoverable(true)}>
                {hovering && (
                    <motion.div 
                        className={`gallery-card__description-wrapper gallery-card__description-wrapper--${direction}`}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                    >
                        <motion.h1 variants={variants}>{name}</motion.h1>
                        <motion.p variants={variants}>{description}</motion.p>
                        <Link to={`/tutorial/${slug}`} >
                            <motion.div
                                whileHover={linkHover}
                                onMouseEnter={() => setHoveringLink(true)}
                                onMouseLeave={() => setHoveringLink(false)}
                            >
                                <motion.div variants={variants}>See tutorial</motion.div>
                                {hoveringLink && (
                                    <motion.i 
                                        className="fas fa-chevron-right"
                                        initial={{ x: direction === 'left' ? 15 : -30, opacity: 0 }}
                                        animate={{ x: direction === 'left' ? 15 : -30, opacity: 1 }}
                                        exit={{ x: direction === 'left' ? 15 : -30, opacity: 0 }}
                                    />
                                )}
                            </motion.div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default GalleryCard;