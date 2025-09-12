import { Link } from 'react-router-dom'
import products1img1 from '../../assets/images/shop/shop-product-1-1.jpg'
import products1img2 from '../../assets/images/shop/shop-product-1-2.jpg'
import products1img3 from '../../assets/images/shop/shop-product-1-3.jpg'
import products1img4 from '../../assets/images/shop/shop-product-1-4.jpg'
import products1img5 from '../../assets/images/shop/shop-product-1-6.jpg'
import products1img6 from '../../assets/images/shop/shop-product-1-7.jpg'
import products1img7 from '../../assets/images/shop/shop-product-1-8.jpg'
import products1img8 from '../../assets/images/shop/shop-product-1-9.jpg'

import Slider from 'react-slick';
const defaultProducts1 = [
    {
        id: 1,
        name: 'bucket cleaning',
        price: 33.00,
        originalPrice: null,
        image: products1img1,
        rating: 4.9,
        badges: ['New'],
        link: '/product-details'
    },
    {
        id: 2,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 3,
        name: 'White Detergent',
        price: 28.00,
        originalPrice: 33.00,
        image: products1img3,
        rating: 4.5,
        badges: ['5% Off'],
        link: '/product-details'
    },
    {
        id: 4,
        name: 'washing machine',
        price: 40.00,
        originalPrice: null,
        image: products1img4,
        rating: 4.8,
        badges: [],
        link: '/product-details'
    },
    {
        id: 5,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 6,
        name: 'xtra Window Cleaner',
        price: 27.00,
        originalPrice: null,
        image: products1img6,
        rating: 4.6,
        badges: ['New'],
        link: '/product-details'
    },
    {
        id: 7,
        name: 'bucket cleaning',
        price: 44.00,
        originalPrice: null,
        image: products1img7,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 8,
        name: 'Vacuum cleaner',
        price: 52.00,
        originalPrice: 56.0,
        image: products1img8,
        rating: 4.9,
        badges: ['3% Off'],
        link: '/product-details'
    },

]
const EmptyArrow = () => null;
const ProductDetailsCarousel = () => {
    const handleWishlist1 = () => {
        // console.log('Added to wishlist:', productId);
    };

    const handleAddToCart1 = () => {
        // console.log('Added to cart:', productId);
    };

    const handleQuickView1 = () => {
        // console.log('Quick view:', productId);
    };

    const handleCompare1 = () => {
        // console.log('Compare:', productId);
    };

    const renderPrice1 = (product) => {
        if (product.originalPrice) {
            return (
                <p>
                    <del>${product.originalPrice.toFixed(2)}</del> ${product.price.toFixed(2)}
                </p>
            );
        }
        return <p>${product.price.toFixed(2)}</p>;
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <EmptyArrow />,
        prevArrow: <EmptyArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="related-products">
            <div className="container">
                <div className="related-products__title">
                    <h3>Related Products</h3>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
                <div className="row">
                    <div className="related-products__carousel owl-carousel owl-theme owl-dot-style1">
                        <Slider {...settings}>
                            {defaultProducts1.map((product) => (
                                <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-product-style1">
                                        <div className="single-product-style1__img">
                                            <img src={product.image} alt={product.name} />
                                            <img src={product.image} alt={product.name} />

                                            {/* Badges/Overlay */}
                                            {product.badges.length > 0 && (
                                                <ul className="single-product-style1__overlay">
                                                    {product.badges.map((badge, index) => (
                                                        <li key={index}>
                                                            <p>{badge}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Action Buttons */}
                                            <ul className="single-product-style1__info">
                                                <li>
                                                    <a
                                                        href="#"
                                                        title="Add to Wishlist"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleWishlist1(product.id);
                                                        }}
                                                    >
                                                        <i className="fa fa-regular fa-heart"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        title="Add to cart"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleAddToCart1(product.id);
                                                        }}
                                                    >
                                                        <i className="fa fa-solid fa-cart-plus"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        title="Quick View"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleQuickView1(product.id);
                                                        }}
                                                    >
                                                        <i className="fa fa-regular fa-eye"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        title="Compare"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleCompare1(product.id);
                                                        }}
                                                    >
                                                        <i className="fa fa-solid fa-repeat"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Product Content */}
                                        <div className="single-product-style1__content">
                                            <div className="single-product-style1__content-left">
                                                <h4>
                                                    <Link to={product?.link}>{product?.name}</Link>
                                                </h4>
                                                {renderPrice1(product)}
                                            </div>
                                            <div className="single-product-style1__content-right">
                                                <div className="single-product-style1__review">
                                                    <i className="icon-star"></i>
                                                    <p>{product.rating}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsCarousel;