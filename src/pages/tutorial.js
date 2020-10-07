import React, { useState, useEffect } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'gatsby';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FullPageContainer from '../components/FullPageContainer';
import { data } from '../tutorials-data/switch-button';
import ScrollIcon from '../icons/mousewheel.inline.svg';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const Tutorial = props => {
    const { files, slides } = data;
    const [swiper, setSwiper] = useState(null);
    const [selectedFile, setSelectedFile] = useState(files[0]);

    useEffect(() => {
        return () => document.removeEventListener('mousewheel', onMousewheel);
    })

    const onMousewheel = ({ deltaY }) => {
        if (deltaY > 0) swiper.slideNext();
        else swiper.slidePrev();
    }

    const renderFiles = () => {
        return files.map(({id, name, extension}, index) => {
            const isSelected = selectedFile.id === id ? 'selected' : '';

            return (
                <div 
                    key={index} 
                    className={`code__file code__file--${extension} ${isSelected}`}
                    onClick={() => setSelectedFile(files[index])}
                >
                    {name}<span>.{extension}</span>
                </div>
            )
        });
    }

    const renderSlides = () => {
        return slides.map(({ id, content }, index) => {
            return (
                <SwiperSlide key={index}>
                    <FullPageContainer className="slide">
                        <div className="slide__content">
                           {content}
                        </div>
                        <div className="slide__scroll-icon-wrapper">
                            <motion.div
                                className="slide__scroll-icon-animated"
                                animate={{ y: [0, 15] }}
                                transition={{ duration: 1.2, yoyo: Infinity }}
                            >
                                <ScrollIcon />
                            </motion.div>
                        </div>
                    </FullPageContainer>
                </SwiperSlide>
            )
        });
    }
    
    return (
        <FullPageContainer className="tutorial">
            <div 
                className="guide guide__wrapper" 
                // onMouseEnter={() => document.addEventListener('mousewheel', onMousewheel)}
                // onMouseLeave={() => document.removeEventListener('mousewheel', onMousewheel)}
            >
                <Swiper
                    onSwiper={swiper => setSwiper(swiper)}
                    speed={500}
                    direction="vertical"
                    pagination={{ clickable: true }}
                >
                    {renderSlides()}
                </Swiper>
            </div>
            <div className="code__wrapper">
                <div className="code__navbar">
                    {renderFiles()}
                </div>
                <SyntaxHighlighter 
                    language={selectedFile.language}
                    style={atomOneDark} 
                    showLineNumbers
                    className="code__content"
                >
                    {slides[0].code[selectedFile.id]}
                </SyntaxHighlighter>
            </div>
        </FullPageContainer>
    )
}

export default Tutorial;