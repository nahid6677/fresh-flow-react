import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import TestimonialsMain from '../../sections/testimonials/TestimonialsMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const Testimonials = () => {
    return (
        <>
            <FreshHelmet title={"Testimonials"} />
            <div className="page-wrapper">
                <BannerOne title='Testimonials' secondTitle='Testimonials' />
                <TestimonialsMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />
            </div>
        </>
    );
};

export default Testimonials;