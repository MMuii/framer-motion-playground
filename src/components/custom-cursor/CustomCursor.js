import React, { useState, useRef } from 'react';

const icons = [
    {
        id: 0,
        iconClass: 'fa-facebook-f',
        cursorStyle: 'fb'
    },
    {
        id: 1,
        iconClass: 'fa-instagram',
        cursorStyle: 'insta'
    },
    {
        id: 2,
        iconClass: 'fa-twitter',
        cursorStyle: 'twitter'
    }
]

const CustomCursor = () => {
    //cursor is shown only when user hovers the component
    const [showCursor, setShowCursor] = useState(false);
    
    //if user is hovering an icon, cursor locks at it
    const [hoveringIcon, setHoveringIcon] = useState(false);
    
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorStyle, setCursorStyle] = useState('');

    const containerRef = useRef();
    const iconRefs = useRef([]);
    iconRefs.current = [];

    const onMouseMove = ({ clientX, clientY }) => {
        if (hoveringIcon) return;

        const { left, top } = containerRef.current.getBoundingClientRect();
        setMousePosition( { x: clientX - left, y: clientY - top });
    }

    const hoverIcon = (iconRef) => {
        const { left, top } = iconRef.getBoundingClientRect();
        const { left: leftContainer, top: topContainer } = containerRef.current.getBoundingClientRect();
        
        setHoveringIcon(true);
        setMousePosition({ x: left - leftContainer + 24, y: top - topContainer + 24 });
    }

    const addToRefs = el => {
        if (el && !iconRefs.current.includes(el)) iconRefs.current.push(el);
    }

    return (
        <div 
            className="custom-cursor"
            ref={containerRef}
            onMouseMove={onMouseMove}
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
        >
            {showCursor && (
                <div 
                    className={`cursor ${cursorStyle}`} 
                    style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
                />
            )}

            <div className="icons-wrapper">
                {icons.map(({ id, cursorStyle, iconClass }) => (
                    <span
                        key={id}
                        ref={addToRefs}
                        onMouseEnter={() => {
                            setCursorStyle(cursorStyle);
                            hoverIcon(iconRefs.current[id]);
                        }}
                        onMouseLeave={() => {
                            setCursorStyle('');
                            setHoveringIcon(false);
                        }}
                    >
                        <i className={`fab ${iconClass}`}/>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default CustomCursor
