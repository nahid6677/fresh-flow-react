import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import GalleryMain from '../../sections/gallery/GalleryMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const Gallery = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title={"Gallery"} />
            <BannerOne title='Gallery' secondTitle='Gallery' />
            <GalleryMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default Gallery;