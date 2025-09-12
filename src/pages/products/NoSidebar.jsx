import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import NoSidebarMain from '../../sections/products/NoSidebarMain';
const NoSidebar = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Products' />
            <BannerOne title='Products' secondTitle='Products' />
            <NoSidebarMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />

        </div>
    );
};

export default NoSidebar;