import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const IphoneAnimationTut = () => {
    const [canOpenApp, setCanOpenApp] = useState(true);
    const [openedApp, setOpenedApp] = useState(null);

    const closeApp = () => {
        setOpenedApp(null);
        setCanOpenApp(false);
        setTimeout(() => {
            setCanOpenApp(true);
        }, 500);
    }

    const onDragEnd = (event, info) => {
        if (info.offset.y < 0) closeApp();
    }

    return (
        <div className="iphone-animation-tut">
            <div className="wrapper">
                <AnimateSharedLayout>
                    {[1, 2, 3, 4].map((app) => (
                        <motion.div
                            className="app-icon__bg"
                            key={app}
                            layoutId={app}
                            onClick={() => canOpenApp && setOpenedApp(app)}
                        />
                    ))}
                    <AnimatePresence>
                        {openedApp && (
                            <>
                                <motion.div 
                                    className="app-opened"
                                    layoutId={openedApp}
                                    drag
                                    dragConstraints={{ 
                                        left: 0, 
                                        right: 0, 
                                        top: 0, 
                                        bottom: 0
                                    }}
                                    dragElastic={.03}
                                    onDragEnd={onDragEnd}
                                    whileTap={{
                                        scale: .9,  
                                        borderRadius: '15px',
                                    }}
                                />
                                <motion.div 
                                    className="close-bar" 
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 8, opacity: 0 }}
                                    transition={{ ease: 'linear' }}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </div>
        </div>
    )
}

export default IphoneAnimationTut;