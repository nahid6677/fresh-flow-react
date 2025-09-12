import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow'; 
import ProductRightMain from '../../sections/products/ProductRightMain';
const ProductRight = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title={"Products Right"} />
            <BannerOne title='Products Right' secondTitle='Products' />
            <ProductRightMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default ProductRight;