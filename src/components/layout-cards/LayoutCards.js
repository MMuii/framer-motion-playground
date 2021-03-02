import React, { useState, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { WindowSizeContext } from '../../contexts/WindowSizeContext';

const cards = [1, 2, 3, 4];

const LayoutCards = () => {
    const { width } = useContext(WindowSizeContext) || 0;
    const [selectedId, setSelectedId] = useState(null);
    const [canDrag, setCanDrag] = useState(false);
    const containerRefs = useRef(new Array());

    const handlePanEnd = (e, info, card) => {
        if (selectedId) {
            if (Math.abs(info.offset.x) < 5) {
                const styles = getComputedStyle(containerRefs.current[card]);
                const timeout = styles.transform.split(',')[4] * -.6;

                setCanDrag(false);
                setTimeout(() => {
                    setSelectedId(null);
                }, timeout);
            }
        } else {
            setCanDrag(true);
            setSelectedId(card);
        }
    }

    const leftDrag = width < 768 ? -425 : -850;

    return (
        <div className="layout-cards">
            {cards.map((card, i) => (
                <motion.div 
                    className={selectedId === card ? 'opened-card' : 'card' }
                    key={i}
                    layout
                    drag={selectedId === card ? 'x' : false}
                    dragConstraints={{ left: canDrag ? leftDrag : 0, right: 0 }}
                    dragElastic={.2}
                    onPanEnd={(e, info) => handlePanEnd(e, info, card)}
                    ref={el => containerRefs.current[card] = el}
                >
                    {selectedId === card && (
                        <>
                            <div />
                            <div />
                            <div />
                        </>
                    )}
                </motion.div>
            ))}
            <motion.div 
                className="dim-layer" 
                animate={{ opacity: selectedId ? .3 : 0 }}
            />
        </div>
    )
}

export default LayoutCards;