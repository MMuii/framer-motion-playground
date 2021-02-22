import React, { useState, useContext } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { WindowSizeContext } from '../../contexts/WindowSizeContext';

const colors = ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF'];

const randomColor = current => {
    while (true) {
        const index = Math.floor(Math.random() * colors.length);
        if (current != colors[index]) {
            return colors[index];
        } 
    }
}

const Card = ({ card, style, onDirectionLock, onDragEnd, animate }) => (    
    <motion.div
        className="card"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock
        onDirectionLock={onDirectionLock}
        onDragEnd={onDragEnd}
        animate={animate}
        style={{ ...style, background: card.background }}
        transition={{ ease: [.6, .05, -.01, .9] }}
        whileTap={{ scale: .85 }}
    >
        <span>{card.text}</span>
    </motion.div>
)

const InfiniteCards = () => {
    const { width } = useContext(WindowSizeContext) || 0; 

    const [cards, setCards] = useState([
        { text: 'Up or down', background: colors[0] }, 
        { text: 'Left or right', background: colors[1] }, 
        { text: 'Swipe me!', background: colors[2] }
    ]);

    const [dragStart, setDragStart] = useState({
        axis: null,
        animation: { x: 0, y: 0 }
    });

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [1, .5, 1]);
    const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, 25, 0]);
    const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-175, 0, 175], [0, .2, 0]);
    const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;

    const onDirectionLock = axis => setDragStart({ ...dragStart, axis: axis });
    const animateCardSwipe = animation => {
        setDragStart({ ...dragStart, animation });
        
        setTimeout(() => {
            setDragStart({ axis: null, animation: { x: 0, y: 0 } });
            x.set(0);
            y.set(0);
            const firstCardColor = cards[0].background;
            setCards([{ text: 'just an another card', background: randomColor(firstCardColor) }, ...cards.slice(0, cards.length - 1)]);
        }, 200);
    }

    const onDragEnd = info => {
        const xDistance = width >= 768 ? 175 : 250;

        if (dragStart.axis === 'x') {
            if (info.offset.x >= 100) 
                animateCardSwipe({ x: xDistance, y: 0 });
            else if (info.offset.x <= -100)
                animateCardSwipe({ x: -xDistance, y: 0 }); 
        } else {
            if (info.offset.y >= 100)
                animateCardSwipe({ x: 0, y: 175 }); 
            else if (info.offset.y <= -100)
                animateCardSwipe({ x: 0, y: -175 }); 
        }
    }

    const renderCards = () => {
        return cards.map((card, index) => {
            if (index === cards.length - 1) {
                return (
                    <Card 
                        card={card}
                        key={index}
                        style={{ x, y, zIndex: index }}
                        onDirectionLock={axis => onDirectionLock(axis)}
                        onDragEnd={(e, info) => onDragEnd(info)}
                        animate={dragStart.animation}
                    />
                )
            } else return (
                <Card 
                    card={card}
                    key={index}
                    style={{
                        scale, 
                        boxShadow,
                        zIndex: index
                    }}
                />
            )
        })
    }

    return (
        <div className="infinite-cards">
            {renderCards()}
        </div>
    )
}

export default InfiniteCards
