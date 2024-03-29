import React from 'react';
import { motion } from 'framer-motion';

const OpenedApp = ({ app, closeApp, content }) => {
    const onDragEnd = (event, info) => {
        if (info.offset.y < 0) closeApp();
    }

    return (
        <motion.div
            layoutId={app.id}
            className="app-opened"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}
            dragElastic={.03}
            onDragEnd={onDragEnd}
            whileTap={{
                scale: .9,  
                borderRadius: '15px',
            }}
            style={app.appStyle}
        >
            <motion.div
                className="content-wrapper"
                exit={{ opacity: 0 }}
            >
                {content}
            </motion.div>
        </motion.div>
    )
}

export default OpenedApp;
