import React, { useState } from "react";
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { use100vh } from 'react-div-100vh';
import GalleryCard from '../components/GalleryCard';
import Switch from '../components/Switch';
import ClipPathTransition from '../components/ClipPathTransition';
import CustomCursor from '../components/custom-cursor/CustomCursor';
import InfiniteCards from '../components/infinite-cards/InfiniteCards';
// import TextWave from '../components/text-wave/TextWave';
// import Text3d from '../components/text-3d/Text3d';
import UnderlinedMenu from '../components/underlined-menu/UnderlinedMenu';
import Checkbox from '../components/checkbox/Checkbox';
// import RotatingCard from '../components/rotating-card/RotatingCard';
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
        direction: 'left'
    },
    {
        slug: 'bouncing-bar',
        name: 'Bouncing bar',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
        className: 'c2 r2',
        component: <BouncingBar />,
        direction: 'right'
    },
    {
        slug: 'flashcards',
        name: 'Flashcards',
        description: 'Card flip animation, which you might have seen on Framer Motion landing page.',
        className: 'c2 r1',
        component: <Flashcards />,
        direction: 'right'
    },
    {
        slug: 'infinite-cards',
        name: 'Infinite cards',
        description: 'You can swipe them all day long and they never end!',
        className: 'c1 r1',
        component: <InfiniteCards />,
        direction: 'right'
    },
    {
        slug: 'custom-cursor',
        name: 'Custom cursor',
        description: 'Even though it\'s Framer Motion Playground, this cursor is pure, plain CSS!',
        className: 'c2 r2',
        component: <CustomCursor />,
        direction: 'left'
    },
    {
        slug: 'app-opening-animation',
        name: 'App opening animation',
        description: 'AnimateSharedLayout can do magic in just few lines of code. Click one of the icons if you don\'t believe!',
        className: 'c2 r3',
        component: <IphoneAnimation />,
        direction: 'right'
    },
    {
        slug: 'clip-path-transition',
        name: 'Clip Path Transition',
        description: 'Nice transition made possible with animating clip path. Same mechanism as this site\'s page transition.',
        className: 'c3 r2',
        component: <ClipPathTransition />,
        direction: 'right'
    },
    {
        slug: 'underlined-menu',
        name: 'Underlined Menu',
        description: 'Great example of very basic AnimateSharedLayout usage.',
        className: 'c4 r1',
        component: <UnderlinedMenu />,
        direction: 'left'
    },
    {
        slug: 'checkbox',
        name: 'Checkbox',
        description: 'You can animate SVGs easier than you\'d think.',
        className: 'c1 r1',
        component: <Checkbox />,
        direction: 'left'
    },
    {
        slug: 'upload-button',
        name: 'Upload button',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
        className: 'c1 r1',
        component: <UploadButton />,
        direction: 'right'
    },
    {
        slug: 'side-menu',
        name: 'Side menu',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
        className: 'c2 r3',
        component: <SideMenu />,
        direction: 'left'
    },
    {
        slug: 'layout-cards',
        name: 'Layout cards',
        description: 'A little bit trickier usage of layout animations',
        className: 'c3 r2',
        component: <LayoutCards />,
        direction: 'left'
    },
    {
        slug: 'link-animation',
        name: 'Link hover animation',
        description: 'Simple, yet cool effect. More of CSS trick, but still there\'s some Framer Motion magic.',
        className: 'c1 r1',
        component: <LinkAnimation />,
        direction: 'left'
    },
    {
        slug: 'star-rating',
        name: 'Star rating',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
        className: 'c2 r1',
        component: <StarRating />,
        direction: 'left'
    }
]

// const tutorials = [
//     {
//         slug: 'switch-button',
//         name: 'Switch button',
//         description: 'Simple switch button, powered by layout animations.',
//         className: 'c1 r1',
//         component: <Switch />,
//         direction: 'left'
//     },
//     {
//         slug: 'infinite-cards',
//         name: 'Infinite cards',
//         description: 'You can swipe them all day long and they never end!',
//         className: 'c1 r1',
//         component: <InfiniteCards />,
//         direction: 'right'
//     },
//     {
//         slug: '3d-text',
//         name: '3D text effect',
//         description: 'You can achieve much more with CSS box shadow than you\'d think!',
//         className: 'c3 r2',
//         component: <Text3d />,
//         direction: 'right'
//     },
//     {
//         slug: 'wave',
//         name: 'Text wave',
//         description: 'You didn\'t hovered it just once, did you?',
//         className: 'c2 r1',
//         component: <TextWave />,
//         direction: 'left'
//     },
//     {
//         slug: 'underlined-menu',
//         name: 'Underlined Menu',
//         description: 'Great example of very basic AnimateSharedLayout usage.',
//         className: 'c4 r1',
//         component: <UnderlinedMenu />,
//         direction: 'left'
//     },
//     {
//         slug: 'checkbox',
//         name: 'Checkbox',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
//         className: 'c1 r1',
//         component: <Checkbox />,
//         direction: 'left'
//     },
//     {
//         slug: 'clip-path-transition',
//         name: 'Clip Path Transition',
//         description: 'Nice transition made possible with animating clip path. Same mechanism as this site\'s page transition.',
//         className: 'c3 r2',
//         component: <ClipPathTransition />,
//         direction: 'right'
//     },
//     {
//         slug: 'rotating-card',
//         name: 'Rotating Card',
//         description: 'There is less math than you would think!',
//         className: 'c2 r3',
//         component: <RotatingCard />,
//         direction: 'left'
//     },
//     {
//         slug: 'app-open',
//         name: 'App opening animation',
//         description: 'AnimateSharedLayout can do magic in just few lines of code. Click one of the icons if you don\'t believe!',
//         className: 'c2 r3',
//         component: <IphoneAnimation />,
//         direction: 'right'
//     },
//     {
//         slug: 'upload-button',
//         name: 'Upload button',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
//         className: 'c1 r1',
//         component: <UploadButton />,
//         direction: 'right'
//     },
//     {
//         slug: 'custom-cursor',
//         name: 'Custom cursor',
//         description: 'Even though it\'s Framer Motion Playground, this cursor is pure, plain CSS!',
//         className: 'c2 r2',
//         component: <CustomCursor />,
//         direction: 'left'
//     },
//     {
//         slug: 'flashcards',
//         name: 'Flashcards',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
//         className: 'c2 r1',
//         component: <Flashcards />,
//         direction: 'right'
//     },
//     {
//         slug: 'bouncing-bar',
//         name: 'Bouncing bar',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, in!',
//         className: 'c2 r2',
//         component: <BouncingBar />,
//         direction: 'right'
//     },
// ]

const IndexPage = () => {
    const [hovering, setHovering] = useState(null);

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

    return (
        <div className="gallery">
            <div className="gallery__info">
                <h1>framer motion<br />playground</h1>
                <button><Link to="/tutorial">about</Link></button>
            </div>
            
            <div className="gallery__container">
                {renderTutorials()}
            </div>

            <motion.div 
                className="gallery__dim-layer" 
                style={{ height: use100vh() }} 
                animate={{ opacity: hovering ? .8 : 0 }}
                transition={{ duration: .15 }}
            />
        </div>
    )
}

export default IndexPage
