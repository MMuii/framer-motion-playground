import React, { useState } from "react";
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { use100vh } from 'react-div-100vh';
import useDeviceDetect from '../hooks/useDeviceDetect';
import GalleryCard from '../components/GalleryCard';
import GalleryCardMobile from '../components/GalleryCardMobile';
import Switch from '../components/Switch';
import ClipPathTransition from '../components/clip-path-transition/ClipPathTransition';
import CustomCursor from '../components/custom-cursor/CustomCursor';
import InfiniteCards from '../components/infinite-cards/InfiniteCards';
import UnderlinedMenu from '../components/underlined-menu/UnderlinedMenu';
import Checkbox from '../components/checkbox/Checkbox';
import UploadButton from '../components/upload-button/UploadButton';
import IphoneAnimation from '../components/iphone-animation/IphoneAnimation';
import Flashcards from '../components/flashcards/Flashcards';
import BouncingBar from '../components/bouncing-bar/BouncingBar';
import SideMenu from '../components/side-menu/SideMenu';
import LayoutCards from '../components/layout-cards/LayoutCards';
import LinkAnimation from '../components/link-animation/LinkAnimation';
import StarRating from "../components/star-rating/StarRating";

const tutorials = [
    {
        slug: 'switch-button',
        name: 'Switch button',
        description: 'Simple switch button, powered by layout animations.',
        className: 'c1 r1',
        component: <Switch />,
        direction: 'left',
        forDesktop: false
    },
    {
        slug: 'bouncing-bar',
        name: 'Bouncing bar',
        description: 'Morphing SVG paths? Why not!',
        className: 'c2 r2',
        component: <BouncingBar />,
        direction: 'right',
        forDesktop: false
    },
    {
        slug: 'flashcards',
        name: 'Flashcards',
        description: 'Card flip animation, which you might have seen on Framer Motion landing page.',
        className: 'c2 r1',
        component: <Flashcards />,
        direction: 'right',
        forDesktop: false
    },
    {
        slug: 'infinite-cards',
        name: 'Infinite cards',
        description: 'You can swipe them all day long and they never end!',
        className: 'c1 r1',
        component: <InfiniteCards />,
        direction: 'right',
        forDesktop: false
    },
    {
        slug: 'custom-cursor',
        name: 'Custom cursor',
        description: 'It\'s almost pure CSS. Almost!',
        className: 'c2 r2',
        component: <CustomCursor />,
        direction: 'left',
        forDesktop: true
    },
    {
        slug: 'app-opening-animation',
        name: 'App opening animation',
        description: 'AnimateSharedLayout can do magic in just few lines of code. Click one of the icons if you don\'t believe!',
        className: 'c2 r3',
        component: <IphoneAnimation />,
        direction: 'right',
        forDesktop: false
    },
    {
        slug: 'clip-path-transition',
        name: 'Clip Path Transition',
        description: 'Nice transition made possible with animating clip path. Same mechanism as this site\'s page transition.',
        className: 'c3 r2',
        component: <ClipPathTransition />,
        direction: 'right',
        forDesktop: false
    },
    {
        slug: 'underlined-menu',
        name: 'Underlined Menu',
        description: 'Great example of very basic AnimateSharedLayout usage.',
        className: 'c4 r1',
        component: <UnderlinedMenu />,
        direction: 'left',
        forDesktop: false
    },
    {
        slug: 'checkbox',
        name: 'Checkbox',
        description: 'You can animate SVGs easier than you\'d think.',
        className: 'c1 r1',
        component: <Checkbox />,
        direction: 'left',
        forDesktop: false
    },
    {
        slug: 'upload-button',
        name: 'Upload button',
        description: 'The power of AnimationControls!',
        className: 'c1 r1',
        component: <UploadButton />,
        direction: 'right',
        forDesktop: false
    },
    {
        slug: 'side-menu',
        name: 'Side menu',
        description: 'Many tiny animations combined into one, nice side menu.',
        className: 'c2 r3',
        component: <SideMenu />,
        direction: 'left',
        forDesktop: false
    },
    {
        slug: 'layout-cards',
        name: 'Layout cards',
        description: 'A little bit trickier usage of layout animations.',
        className: 'c3 r2',
        component: <LayoutCards />,
        direction: 'left',
        forDesktop: false
    },
    {
        slug: 'link-animation',
        name: 'Link hover animation',
        description: 'Simple, yet cool effect. More of CSS trick, but still there\'s some Framer Motion magic.',
        className: 'c1 r1',
        component: <LinkAnimation />,
        direction: 'left',
        forDesktop: true
    },
    {
        slug: 'star-rating',
        name: 'Star rating',
        description: 'Simple and common design implemented with Framer Motion.',
        className: 'c2 r1',
        component: <StarRating />,
        direction: 'left',
        forDesktop: false
    }
]

const IndexPage = () => {
    const [hovering, setHovering] = useState(null);
    const { isMobile } = useDeviceDetect();

    const renderTutorials = () => {
        return tutorials.map((tut, i) => (
            <GalleryCard
                key={i}
                tutorial={tut}
                hovering={hovering === tut}
                setHovering={setHovering}
            >
                {tut.component}
            </GalleryCard>
        ));
    }

    const renderTutorialsMobile = () => {
        return tutorials.map((tut, i) => (
            <GalleryCardMobile key={i} tutorial={tut}>
                {tut.component}
            </GalleryCardMobile>
        ))
    }

    const height = use100vh();

    if (isMobile) {
        return (
            <div className="gallery--mobile">
                <div className="gallery__info">
                    <h1>framer motion<br />playground</h1>
                    <Link to="/about">about</Link>
                </div>

                <div className="gallery--mobile__container">
                    {renderTutorialsMobile()}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="gallery">
                <div className="gallery__info">
                    <h1>framer motion<br />playground</h1>
                    <Link to="/about">about</Link>
                </div>

                <div className="gallery__container">
                    {renderTutorials()}
                </div>

                <motion.div 
                    className="gallery__dim-layer" 
                    style={{ height }} 
                    animate={{ opacity: hovering ? .8 : 0 }}
                    transition={{ duration: .15 }}
                />
            </div>
            <div className="footer">
                <span>made by</span> <Link to="https://github.com/MMuii">mmuii</Link>
            </div>
        </>
    )
}

export default IndexPage
