import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import CatyMain from '../../sections/cart/CatyMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const Cart = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Cart' />
            <BannerOne title='Cart' secondTitle='Cart' />
            <CatyMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default Cart;