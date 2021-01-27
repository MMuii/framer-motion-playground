import React from 'react';
import { motion } from 'framer-motion';

const beamsArr = [0, 1, 2, 3];
const days = [
    {
        day: 'Monday',
        temp: 24,
        icon: 'fas fa-sun',
        color: '#fdb813'
    },
    {
        day: 'Tuesday',
        temp: 20,
        icon: 'fas fa-cloud',
        color: '#8a8a8a'
    },
    {
        day: 'Wednesday',
        temp: 21,
        icon: 'fas fa-smog',
        color: '#8a8a8a'
    },
    {
        day: 'Thursday',
        temp: 22,
        icon: 'fas fa-bolt',
        color: '#fdb813'
    }
]

const WeatherApp = () => {
    return (
        <div className="iphone-weather-app">
            <motion.div 
                className="sun__wrapper sun__wrapper--big" 
                animate={{ rotate: 180 }}
                transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
            >
                {beamsArr.map(i => (
                    <div className="light__wrapper light__wrapper--big" key={i}>
                        <div className="light__beam light__beam--big" />
                        <div className="light__beam light__beam--big" />
                    </div>
                ))}

                <div className="sun__wrapper sun__wrapper--small">
                    {beamsArr.map(i => (
                        <div className="light__wrapper light__wrapper--small" key={i}>
                            <div className="light__beam light__beam--small" />
                            <div className="light__beam light__beam--small" />
                        </div>
                    ))}
                </div>
            </motion.div>
            <h1>Sunny</h1>
            <h2>24°</h2>
            <div className="forecast__wrapper">
                <div className="forecast__location"><span>Warsaw</span>, Poland</div>
                <div className="forecast__days-wrapper">
                    {days.map(({ day, temp, icon, color }, i) => (
                        <div className="forecast__day-wrapper" key={i}> 
                            <div className="forecast__day">{day}</div>
                            <div className="forecast__temp-wrapper">
                                <div>{temp}°</div>
                                <i className={icon} style={{ color }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;