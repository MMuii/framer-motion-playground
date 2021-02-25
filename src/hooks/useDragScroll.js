import { useState, useEffect, useRef } from 'react';

export const useDragScroll = () => {
    const ref = useRef();
    const [{ 
        startX, 
        startScrollLeft, 
        isDragging
    }, setDragStart] = useState({ startX: undefined, startScrollLeft: undefined, isDragging: false })

    useEffect(() => {
        const handleMouseDown = e => {
            setDragStart({
                startX: e.pageX - ref.current.offsetLeft,
                startScrollLeft: ref.current.scrollLeft,
                isDragging: true
            });
        }

        const handleMouseMove = e => {
            if (!ref.current.contains(e.target)) return;
            // if (!ref.current.contains(e.target) || !isDragging) return;

            e.preventDefault();

            const mouseX = e.pageX - ref.current.offsetLeft;
            const walkX = mouseX - startX;
            ref.current.scrollLeft = startScrollLeft - walkX;
        }

        // const handleDragEnd = e => setDragStart(prev => ({ ...prev, isDragging: false }));
        

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
        }
    });

    return ref;
}