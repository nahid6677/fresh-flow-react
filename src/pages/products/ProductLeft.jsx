import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import ProductLeftMain from '../../sections/products/ProductLeftMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const ProductLeft = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Products Left' />
            <BannerOne title='Products Left' secondTitle='Products' />
            <ProductLeftMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default ProductLeft;