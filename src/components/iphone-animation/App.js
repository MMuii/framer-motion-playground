import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = ({ app, opened, openApp, closeApp, onMouseMove }) => {
    const [isDragged, setIsDragged] = useState(false);

    const onDragEnd = (event, info) => {
        if (info.offset.y < 0) closeApp(app);
        setIsDragged(false);
    }

    return (
        <motion.div
            layout
            className={`app ${opened ? "opened" : ""} ${app === -1 ? "placeholder" : ""}`}
            style={{
              background: opened ? "orangered" : "orange",
              pointerEvents: isDragged ? 'none' : 'all',
            }}
            onClick={() => openApp(app)}
            whileTap={{
                // height: '90%',
                // width: '90%',
                scale: .9,  
                borderRadius: '5px',
            }}
            drag={opened}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}
            dragElastic={.02}
            onDragStart={() => setIsDragged(true)}
            onDragEnd={onDragEnd}
            // onMouseMove={(e) => onMouseMove(e)}
        >
            <motion.div 
                layout
                className="content"
            >
              {opened && (<>
                  <h1>content</h1>
                  <h2>subtitle</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti nesciunt nulla atque iste. Distinctio quaerat velit natus obcaecati ab pariatur!</p>
              </>)}
            </motion.div>
        </motion.div>
    )
};

export default App;
