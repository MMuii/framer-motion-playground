import React from "react";
import { Link } from 'gatsby';
import GalleryCard from '../components/GalleryCard';
import Switch from '../components/Switch';
import ClipPathTransition from '../components/ClipPathTransition';
import CustomCursor from '../components/custom-cursor/CustomCursor';
import InfiniteCards from '../components/infinite-cards/InfiniteCards';
import Text3d from '../components/text-3d/Text3d';
import RotatingCard from '../components/rotating-card/RotatingCard';
import IphoneAnimation from '../components/iphone-animation/IphoneAnimation';

const IndexPage = () => (
    <div className="gallery">
        <div className="gallery__info">
            <h1>framer motion<br />playground</h1>
            <button><Link to="/tutorial">about</Link></button>
        </div>
        <div className="gallery__container">
            <GalleryCard>
                <Switch />
            </GalleryCard>

            <GalleryCard>
                <InfiniteCards />
            </GalleryCard>

            <GalleryCard className="c3 r2">
                <ClipPathTransition />
            </GalleryCard>

            {/* <GalleryCard className="r3">
                <ElementScroll />
            </GalleryCard> */}
            
            <GalleryCard className="c2 r2">
                <CustomCursor />
            </GalleryCard>

            <GalleryCard className="c3 r2">
                <Text3d />
            </GalleryCard>

            <GalleryCard className="c2 r3">
                <RotatingCard />
            </GalleryCard>

            <GalleryCard className="c2 r3">
                <IphoneAnimation />
            </GalleryCard>

            {/* <GalleryCard className="c2 r2">
                <TimeOfDay />
            </GalleryCard> */}

            {/* <GalleryCard className="c2 r2">
                <Rain />
            </GalleryCard>

            <GalleryCard>
                <Test />
            </GalleryCard> */}

        </div>
    </div>
)

export default IndexPage
