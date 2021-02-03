import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = ['Lorem', 'ipsum', 'dolor', 'sit'];
const backgrounds = [
    'radial-gradient(circle at 85.36% -11.24%, #ffffaf 0, #ffffab 16.67%, #f9f9a2 33.33%, #f2f29d 50%, #e6e899 66.67%, #ccd490 83.33%, #bfca8b 100%)',
    'radial-gradient(circle at 85.36% -11.24%, #ffffa7 0, #ffffa4 16.67%, #eaffa1 33.33%, #d5f29d 50%, #c1e499 66.67%, #afd896 83.33%, #a0cd93 100%)',
    'radial-gradient(circle at 85.36% -11.24%, #fdffa0 0, #e6ff9f 16.67%, #d0ff9f 33.33%, #b9f29d 50%, #a4e49b 66.67%, #92d89a 83.33%, #82cd99 100%)',
    'radial-gradient(circle at 85.36% -11.24%, #eeffd0 0, #deffc9 16.67%, #cbfdc0 33.33%, #b5f2b5 50%, #9ee7ab 66.67%, #88dda5 83.33%, #74d6a1 100%)'
]

const MenuItem = ({ text, selected, onClick }) => (
    <div className="menu-item" onClick={onClick}>
        {text}
        {selected && (
            <motion.div className="underline" layoutId="test"/>
        )}
    </div>
)

const UnderlinedMenu = () => {
    const [selected, setSelected] = useState(0);

    return (
        <motion.div 
            className="underlined-menu"
            animate={{ backgroundImage: backgrounds[selected] }}
        >
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
        </motion.div>
    )
}

export default UnderlinedMenu;
