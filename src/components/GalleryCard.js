import React, { useState } from 'react';
import { Link } from 'gatsby';

const GalleryCard = props => {
    const [hovering, setHovering] = useState(false);
    const { children, className, noOverflow, ...restOfProps} = props;

    return (
        <div 
            className={`gallery-card container ${className || ''}`} {...restOfProps}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            style={{ zIndex: hovering ? 10 : 1 }}
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