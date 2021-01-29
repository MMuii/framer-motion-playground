import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import OpenedApp from './OpenedApp';
import MusicApp from './MusicApp';
import WeatherApp from './WeatherApp';
import ContactsApp from './ContactsApp';
import ChatsApp from './ChatsApp';

const apps = [
    {
        id: "app0",
        key: 0,
        appStyle: { backgroundImage: 'radial-gradient(circle at 68.3% -18.3%, #6a6b6f 0, #1f3259 50%, #000043 100%' },
        iconStyle: { background: '#ffffff', color: 'violet' },
        iconClass: 'fab fa-itunes-note fa-3x',
        component: <MusicApp />,
        homeBarColor: '#fff',
        closeBarColor: '#fff'
    },
    {
        id: "app1",
        key: 1,
        appStyle: { backgroundImage: 'radial-gradient(circle at 71.95% -10.32%, #bbf8ff 0, #a0ecfa 12.5%, #80dff5 25%, #5ad1f1 37.5%, #0cc1ed 50%, #00b1ea 62.5%, #00a2e7 75%, #0094e4 87.5%, #0087e2 100%)'},
        iconStyle: { background: '#7bd8ed', color: '#fff' },
        iconClass: 'fas fa-cloud-sun fa-3x',
        component: <WeatherApp />,
        homeBarColor: '#666',
        closeBarColor: '#666'
    },
    {
        id: "app2",
        key: 2,
        appStyle: { background: '#fff' },
        iconStyle: { background: '#69db67', color: '#fff'},
        iconClass: 'fas fa-phone-alt fa-3x',
        component: <ContactsApp />,
        homeBarColor: '#fff',
        closeBarColor: '#666'
    },
    {
        id: "app3",
        key: 3,
        appStyle: { background: '#fff' },
        iconStyle: { background: '#69db67', color: '#fff'},
        iconClass: 'fas fa-comment fa-3x',
        component: <ChatsApp />,
        homeBarColor: '#fff',
        closeBarColor: '#666'
    }
];

const IphoneAnimation = () => {
    const [canOpenApp, setCanOpenApp] = useState(true);
    const [openedApp, setOpenedApp] = useState(null);

    const closeApp = () => {
        setOpenedApp(null);
        setCanOpenApp(false);
        setTimeout(() => {
            setCanOpenApp(true);
        }, 500);
    }

    return (
        <div className="iphone-animation">
            <motion.div className="home-bar" animate={{ color: openedApp ? openedApp.homeBarColor : '#fff' }}>
                <span>10:52</span>
                <div className="home-bar__icons">
                    <i className="fas fa-wifi"/>
                    <i className="fas fa-battery-three-quarters"/>
                </div>
            </motion.div>
            <div className="wrapper">
                <AnimateSharedLayout type="crossfade">
                    {apps.map((app) => (
                        <motion.div
                            className="app-icon__bg"
                            key={app.key}
                            layoutId={app.id}
                            onClick={() => canOpenApp && setOpenedApp(app)}
                            style={app.iconStyle}
                        >
                            <i className={app.iconClass} />
                        </motion.div>
                    ))}
                    <AnimatePresence>
                        {openedApp && (
                            <>
                                <OpenedApp 
                                    app={openedApp}
                                    closeApp={() => closeApp()}
                                    content={openedApp.component}
                                />
                                <motion.div 
                                    className="close-bar" 
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 8, opacity: 0 }}
                                    transition={{ ease: 'linear' }}
                                    style={{ background: openedApp.closeBarColor }}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </div>
        </div>
    )
}

export default IphoneAnimation;