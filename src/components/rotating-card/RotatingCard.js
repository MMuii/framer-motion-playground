import React, { useState, useRef, useEffect } from 'react';
import { useMousePositionWithinElement } from '../../hooks/useMousePositionWithinElement';

const mountains = [4, 3, 2, 1];

const RotatingCard = () => {
    const containerRef = useRef();
    const [isHovering, setIsHovering] = useState(false);
    const [[x, y], onMouseMove, setPosition] = useMousePositionWithinElement(
        containerRef,
        containerRef.current 
            ? [containerRef.current.clientWidth / 2, containerRef.current.clientHeight / 2]
            : [0, 0]
    );

    useEffect(() => {
        console.log('isHovering', isHovering);
    }, [isHovering]);

    return (
        <div 
            className="rotating-card"
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setPosition([0, 0]);
            }}
            onMouseMove={e => onMouseMove(e)}
            style={{ transform: `translateX(-50%) translateY(-50%) scale(${isHovering ? 1.05 : 1})` }}
        >
            <div
                className="card"
                style={{ 
                    transform: `translateX(-50%) translateY(-50%) rotateX(${y*0.03}deg) rotateY(${-x*0.03}deg)`,
                    boxShadow: isHovering ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
                }}
            >
                {mountains.map(num => (
                    <div className={`mountain mountain--${num}`} key={num}>
                        <svg viewBox="0 0 100 100">
                            <path d="M 0 100 L 50 0 L 100 100 Z" />
                            <path d="M 29 42 L 36 37 L 45 45 L 53 33 L 60 49 L 71 42 L 50 0 L 29 42" />
                        </svg>
                    </div>
                ))}

                <div className="cloud"></div>
            </div>

            <div
                className="title"
                style={{ 
                    transform: `rotateX(${y*0.03}deg) rotateY(${-x*0.03}deg)`,
                    top: isHovering ? '20px' : '25px',
                }}
            >
                    Mountain<br/>trip
            </div>
            
            <div
                className="subtitle"
                style={{ 
                    transform: `rotateX(${y*0.03}deg) rotateY(${-x*0.03}deg)`,
                    bottom: isHovering ? '25px' : '20px',
                }}
            >
                    Starts from $500
            </div>
        </div>
    )
}

export default RotatingCard;