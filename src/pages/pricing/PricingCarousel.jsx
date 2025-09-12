import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import PricingCarouselMain from '../../sections/pricing/PricingCarouselMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const PricingCarousel = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title={"Pricing Carousel"} />
            <BannerOne title='Pricing Carousel' secondTitle='Pricing Carousel' />
            <PricingCarouselMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default PricingCarousel;