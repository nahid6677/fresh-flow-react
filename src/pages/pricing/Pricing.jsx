import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import PricingMain from '../../sections/pricing/PricingMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import FooterTow from '../../sections/footer/FooterTow';

const Pricing = () => {
    return (
        <>
            <FreshHelmet title={"Pricing"} />
            <div className="page-wrapper">
                <BannerOne title='Pricing' secondTitle='Pricing' />
                <PricingMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />
            </div>
        </>
    );
};

export default Pricing;