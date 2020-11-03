import React from 'react';
import { Link } from 'gatsby';

const GalleryCard = props => {
    const { children, className, noOverflow, ...restOfProps} = props;

    return (
        <div className={`gallery-card container ${className || ''}`} {...restOfProps}>
            <div className="gallery-card__content-wrapper">
                {children}
            </div>
            <div className="gallery-card__buttons-wrapper">
                <Link to="/tutorial">
                    <span>Tutorial</span> 
                    <i className="fas fa-code"/>
                </Link>
            </div>
        </div>
    )
}

export default GalleryCard;