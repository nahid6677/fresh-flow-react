import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import CommercialMain from '../../sections/services/CommercialMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const CommercialCleaning = () => {
    return (
        <div className='page-wrapper'>
            <FreshHelmet title={"Commercial Cleaning"} />
            <BannerOne title='Commercial Cleaning' secondTitle='services' secondTitleLink='/services' thirdTitle='Commercial Cleaning' />
            <CommercialMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />

        </div>
    );
};

export default CommercialCleaning;