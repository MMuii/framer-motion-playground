import React, { useState, useRef } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const cards = [1, 2, 3, 4];

const SharedLayoutCards = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [canDrag, setCanDrag] = useState(true);
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

    return (
        <div className="shared-layout-cards">
            <AnimateSharedLayout>
                {cards.map((card, i) => (
                    <motion.div 
                        className={selectedId === card ? 'opened-card' : 'card' }
                        key={i}
                        layout
                        drag={selectedId === card ? 'x' : false}
                        dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
                        dragElastic={.2}
                        onPanEnd={(e, info) => handlePanEnd(e, info, card)}
                        ref={el => containerRefs.current[card] = el}
                    >
                        <div />
                        <div />
                        <div />
                    </motion.div>
                ))}
                <motion.div 
                    className="dim-layer" 
                    animate={{ opacity: selectedId ? .3 : 0 }}
                />
            </AnimateSharedLayout>
        </div>
    )
}

export default SharedLayoutCards;