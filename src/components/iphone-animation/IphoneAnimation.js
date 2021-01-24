import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import App from './App';

let apps = [0, 1, 2, 3, 4, 5, 6];

const IphoneAnimation = () => {
    const [opened, setOpened] = useState(null);

    const closeApp = app => {
        apps = apps.filter(app => app !== -1);
        setOpened(null);
    }

    const openApp = app => {
        const appIndex = apps.indexOf(app);
        apps.splice(appIndex, 0, -1);
        setOpened(app);
    }
  
    const renderApps = () => {
      return apps.map((app, i) => {
        return (
            <App
                key={app}
                app={app}
                opened={opened === app}
                openApp={openApp}
                closeApp={closeApp}
            />
        );
      });
    };
  
    return (
        <div className="iphone-animation">
            <div className="wrapper">
                {/* <AnimateSharedLayout> */}
                    {renderApps()}
                {/* </AnimateSharedLayout> */}
            </div>
        </div>
    );
};

export default IphoneAnimation;