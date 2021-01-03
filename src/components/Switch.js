import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Switch = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div 
            className="switch background"
            data-darkmode={isOn}
        >
            <div 
                className="switch-container" 
                onClick={() => setIsOn(!isOn)}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
            >
                <motion.div 
                    layout 
                    className="handle"
                >
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <motion.i
                            className={`icon far fa-${isOn ? 'moon' : 'sun'}`}
                            key={isOn ? 'moon' : 'sun'}
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }} 
                            transition={{ duration: .2 }}
                        />
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default Switch;