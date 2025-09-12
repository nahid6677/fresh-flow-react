import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';

import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import WishlistMain from '../../sections/wishlist/WishlistMain';
const Wishlist = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Wishlist' />
            <BannerOne title='Wishlist' secondTitle='Wishlist' />
            <WishlistMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default Wishlist;