import React, { useState, useContext } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { WindowSizeContext } from '../../contexts/WindowSizeContext';

const MenuItem = ({ text, selected, onClick }) => (
    <motion.div 
        className="menu-item" 
        onClick={onClick} 
        animate={{ opacity: selected ? 1 : .5}}
    >
        {text}
        {selected && (
            <motion.div 
                className="underline" 
                layoutId="test" 
            />
        )}
    </motion.div>
)

const UnderlinedMenu = () => {
    const [selected, setSelected] = useState(0);
    const { width } = useContext(WindowSizeContext) || 0;

    const menuItems = width >= 768 
        ? ['Lorem', 'ipsum', 'dolor', 'sit']
        : ['Lorem', 'ipsum', 'dolor'];

    return (
        <div className="underlined-menu">
            <div className="wrapper">
                <AnimateSharedLayout>
                    {menuItems.map((el, i) => (
                        <MenuItem 
                            text={el} 
                            key={i}
                            selected={selected === i}
                            onClick={() => setSelected(i)}
                        /> 
                    ))}
                </AnimateSharedLayout>
            </div>
        </div>
    )
}

export default UnderlinedMenu;
