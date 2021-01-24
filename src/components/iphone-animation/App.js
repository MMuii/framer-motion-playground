import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const App = ({ app, opened, openApp, closeApp }) => {
    const [isDragged, setIsDragged] = useState(false);

    const onDragEnd = (event, info) => {
        if (info.offset.y < 0) closeApp(app);
        setIsDragged(false);
    }

    return (
        <>
            <motion.div
                layout
                className={`app ${opened ? "opened" : ""} ${app === -1 ? "placeholder" : ""}`}
                style={{
                background: opened ? "white" : "orange",
                pointerEvents: isDragged ? 'none' : 'all',
                }}
                onClick={() => openApp(app)}
                whileTap={{
                    scale: .9,  
                    borderRadius: '5px',
                }}
                drag={opened}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}
                dragElastic={.02}
                onDragStart={() => setIsDragged(true)}
                onDragEnd={onDragEnd}
            >
                <motion.div className="content__container">
                    <motion.div className="content__wrapper content__wrapper--outer">
                        {/* {opened && (<>
                            <h1>content</h1>
                            <h2>subtitle</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nesciunt nulla atque iste. Distinctio quaerat velit natus obcaecati ab pariatur!</p>
                        </>)}
                        */}
                        <AnimatePresence>
                            {opened && (
                                <motion.div 
                                    className="content__wrapper content__wrapper--inner"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}   
                                >
                                    <h1>content</h1>
                                    <h2>subtitle</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nesciunt nulla atque iste. Distinctio quaerat velit natus obcaecati ab pariatur!</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {opened && (
                    <motion.div 
                        className="close-bar" 
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ ease: 'linear' }}
                    />
                )}
            </AnimatePresence>
        </>
    )
};

export default App;
