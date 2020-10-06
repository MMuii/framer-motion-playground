import React from "react";
import { Link } from 'gatsby';
import GalleryCard from '../components/GalleryCard';
import Switch from '../components/Switch';
import Test from '../components/Test';

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
                <Test />
            </GalleryCard>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
            <div className="gallery__card">Karta 1</div>
        </div>
    </div>
)

export default IndexPage
