import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const icons = [
    {
        iconClass: 'fa-facebook-f',
        cursorStyle: 'fb'
    },
    {
        iconClass: 'fa-instagram',
        cursorStyle: 'insta'
    },
    {
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
    const [[rotateX, rotateY, scaleX, scaleY], setMovementAnimation] = useState([0, 0, 1, 1]);

    const containerRef = useRef();
    const iconRefs = useRef(new Array());

    const onMouseMove = (e) => {
        if (hoveringIcon) return;

        const { left, top } = containerRef.current.getBoundingClientRect();

        const newX = e.clientX - left;
        const newY = e.clientY - top;
        const absDeltaX = Math.abs(mousePosition.x - newX);
        const absDeltaY = Math.abs(mousePosition.y - newY);

        setMovementAnimation([
            absDeltaX * .5,
            absDeltaY * .5,
            1 - absDeltaY * 0.005,
            1 - absDeltaX * 0.005
        ]);

        setMousePosition( { x: newX, y: newY });
    }

    const hoverIcon = (iconRef, cursorStyle) => {
        const { left, top } = iconRef.getBoundingClientRect();
        const { left: leftContainer, top: topContainer } = containerRef.current.getBoundingClientRect();
        
        setHoveringIcon(cursorStyle);
        setMovementAnimation([0, 0, 1, 1]);
        setMousePosition({ x: left - leftContainer + 24, y: top - topContainer + 24 });
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
                <motion.div 
                    className={`cursor ${hoveringIcon ? hoveringIcon : ''}`} 
                    style={{ 
                        left: mousePosition.x,
                        top: mousePosition.y 
                    }}
                    animate={{ 
                        translateX: hoveringIcon ? -30 : -16,
                        translateY: hoveringIcon ? -30 : -16,
                        rotateX,
                        rotateY,
                        scaleX,
                        scaleY
                    }}
                />
            )}

            <div className="icons-wrapper">
                {icons.map(({ cursorStyle, iconClass }, i) => (
                    <span
                        key={i}
                        ref={el => iconRefs.current.push(el)}
                        onMouseEnter={() => hoverIcon(iconRefs.current[i], cursorStyle)}
                        onMouseLeave={() => setHoveringIcon(null)}
                    >
                        <i className={`fab ${iconClass}`}/>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default CustomCursor
