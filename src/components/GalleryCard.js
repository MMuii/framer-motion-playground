import React, { useState } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const GalleryCard = props => {
    const [hovering, setHovering] = useState(false);
    const { children, className, noOverflow, ...restOfProps} = props;

    return (
        <div 
            className={`gallery-card container ${className || ''}`} 
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            {...restOfProps}
        >
            <div className="gallery-card__content-wrapper">
                {children}
            </div>
            <div className="gallery-card__buttons-wrapper">
                <Link to="/tutorial/switch-button">
                    <span>Tutorial</span> 
                    <i className="fas fa-code"/>
                </Link>
            </div>
        </div>
    )
}

export default GalleryCard;