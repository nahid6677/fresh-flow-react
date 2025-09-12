import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import ContactMain from '../../sections/contact/ContactMain';
const Contact = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Contact' />
            <BannerOne title='Contact' secondTitle='Contact' />
            <ContactMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default Contact;