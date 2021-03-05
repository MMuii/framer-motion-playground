import React from 'react';
import { Link } from 'gatsby';

const GalleryCardMobile = props => {
    const {
        children,
        tutorial: { slug, name, description, forDesktop },
    } = props;

    return (
        <div className="gallery-card--mobile container">
            <div className="gallery-card--mobile__content-wrapper">
                {children}
            </div>
            <div className="gallery-card--mobile__info-wrapper">
                <h2>{name}</h2>
                <h3>{description}</h3>
                {forDesktop && (
                    <div className="desktop-warning">Component designed for desktop cursor. Not working correctly on mobile!</div>
                )}
                <Link to={`/tutorial/${slug}`}>
                    <i className="fas fa-chevron-right" />
                    See tutorial
                </Link>
            </div>
        </div>
    )
}

export default GalleryCardMobile
