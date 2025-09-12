import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import ResidentialMain from '../../sections/services/ResidentialMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const ResidentialCleaning = () => {
    return (
        <div className='page-wrapper'>
            <FreshHelmet title={"Residential Cleaning"} />
            <BannerOne title='Residential Cleaning' secondTitle='services' secondTitleLink='/services' thirdTitle='Residential Cleaning' />
            <ResidentialMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />


        </div>
    );
};

export default ResidentialCleaning;