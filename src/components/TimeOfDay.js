import React, { useState, useEffect } from 'react';
import Sun from './Sun';
import Moon from './Moon';
import Cloud from './Cloud';
import Rain from './Rain';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
    {
        hour: '08:00',
        time: 'am',
        temp: 13,
        weather: 'cloudy'
    },
    {
        hour: '01:00',
        time: 'pm',
        temp: 20,
        weather: 'clear sky'
    },
    {
        hour: '06:00',
        time: 'pm',
        temp: 27,
        weather: 'raining'
    },
    {
        hour: '11:00',
        time: 'pm',
        temp: 14,
        weather: 'clear sky'
    }
]

const backgrounds = ['#e0ffff', '#b3d9ff', '#e1e1e8', '#001f33'];
const fontColors = ['#272727', '#272727', '#272727', '#fff']

const TimeOfDay = () => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const listener = () => console.log('slide:', slide); 
        document.addEventListener('keydown', listener);

        return () => document.removeEventListener('keydown', listener);
    });

    const renderInfo = () => {
        const { hour, time, temp, weather } = data[slide];

        return (
            <>
                <div className="info__hour">{hour}<span> {time}</span></div>
                <div className="info__temp">{temp}<span>°</span></div>
                <div className="info__weather">{weather}</div>
            </>
        )
    }

    const renderWeatherEffects = () => {
        switch (slide) {
            case 0: return (
                <>
                    <Cloud size="1" y={20} duration={60} delay={2.5} scale={.6}/>
                    <Cloud size="1" y={50} duration={50} delay={1.5} scale={.65}/>
                    <Cloud size="1" y={80} duration={40} delay={1.5} scale={.55}/>
                    <Cloud size="2" y={150} duration={35} delay={1} scale={.75}/>
                    <Cloud size="2" y={180} duration={30} delay={.5} scale={.85}/>
                    <Cloud size="3" y={240} duration={20} delay={0}/>
                </>
            )

            case 2: return <Rain />;

            case 3: return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                </motion.div>
            )

            default: return null;
        }
    }

    return (
        <motion.div 
            className="time-of-day"
            animate={{ backgroundColor: backgrounds[slide], color: fontColors[slide] }}    
            transition={{ duration: 2 }}
        >
            <div className="info">
                {renderInfo()}
            </div>
            
            <AnimatePresence>
                {renderWeatherEffects()}
            </AnimatePresence>

            <motion.div 
                className="spinning__container"
                animate={{ rotate: `-${slide * 90}deg` }}
                transition={{ ease: 'easeInOut', duration: 2 }}
            >
                <div className="spinning__wrapper">
                    <Sun className="cloudy"/>
                </div>
                <div className="spinning__wrapper">
                    <Sun className="clear-sky"/>
                </div>
                <div className="spinning__wrapper"> {/* goes 4th */}
                    <Moon />
                </div>
                <div className="spinning__wrapper"> {/* goes 3rd */}
                    {/* <Sun /> */}
                </div>
            </motion.div>

            <input 
                type="range" 
                min={0} 
                max={3} 
                step={1} 
                onChange={e => setSlide(Number(e.target.value))} 
                defaultValue={0}
            />
        </motion.div>
    )
}

export default TimeOfDay;