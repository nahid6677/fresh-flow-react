import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import ServiceMain from '../../sections/services/ServiceMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const Service = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title={"Service"} />
            <BannerOne title="Services" secondTitle="Services" />
            <ServiceMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />

        </div>
    );
};

export default Service;