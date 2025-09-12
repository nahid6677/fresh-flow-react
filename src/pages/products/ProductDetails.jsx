import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import ProductDetailsMain from '../../sections/products/ProductDetailsMain';

const ProductDetails = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Product Details' />
            <BannerOne title='Product Details' secondTitle='Product Details' />
            <ProductDetailsMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default ProductDetails;