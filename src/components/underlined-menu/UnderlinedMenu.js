import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = ['Lorem', 'ipsum', 'dolor', 'sit'];

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
