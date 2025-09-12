import React, { useState } from 'react';
import products1img1 from '../../assets/images/shop/shop-product-1-1.jpg'
import products1img2 from '../../assets/images/shop/shop-product-1-2.jpg'
import products1img3 from '../../assets/images/shop/shop-product-1-3.jpg'
import products1img4 from '../../assets/images/shop/shop-product-1-4.jpg'
import products1img5 from '../../assets/images/shop/shop-product-1-6.jpg'
import products1img6 from '../../assets/images/shop/shop-product-1-7.jpg'
import products1img7 from '../../assets/images/shop/shop-product-1-8.jpg'
import products1img8 from '../../assets/images/shop/shop-product-1-9.jpg'

import SideBar from "./SideBar"
import { Link } from 'react-router-dom';
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
    {
        id: 9,
        name: 'Clin Kitchen Cleaner',
        price: 43.00,
        originalPrice: 50.0,
        image: products1img5,
        rating: 4.9,
        badges: ['New', '7% Off'],
        link: '/product-details'
    },
    {
        id: 10,
        name: 'bucket cleaning',
        price: 44.00,
        originalPrice: null,
        image: products1img7,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
    {
        id: 11,
        name: 'ariel liquid detergent',
        price: 35.00,
        originalPrice: null,
        image: products1img5,
        rating: 4.7,
        badges: [],
        link: '/product-details'
    },
    {
        id: 12,
        name: 'Dalli Activ Cleaner',
        price: 50.00,
        originalPrice: null,
        image: products1img2,
        rating: 5.0,
        badges: [],
        link: '/product-details'
    },
]
const ProductRightMain = () => {
    const [sortBy, setSortBy] = useState("popular");
    const [isHorizontal, setHorizontal] = useState(false)
    const [products, setProducts] = useState(defaultProducts1 || [])

    const handleWishlist = (productId) => {
        console.log('Added to wishlist:', productId);
    };

    const handleAddToCart = (productId) => {
        console.log('Added to cart:', productId);
    };

    const handleQuickView = (productId) => {
        console.log('Quick view:', productId);
    };

    const handleCompare = (productId) => {
        console.log('Compare:', productId);
    };

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <i key={index} className="icon-star"></i>
        ));
    };

    const renderPrice = (product) => {
        if (product.originalPrice) {
            return (
                <p>
                    <del>${product.originalPrice.toFixed(2)}</del>${product.price.toFixed(2)}
                </p>
            );
        }
        return <p>${product.price.toFixed(2)}</p>;
    };




    // for products 1
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


    const handleSort = (e) => {
        const value = e.target.value;
        setSortBy(value);
        if (value === "Price") {
            const sorted = [...products].sort((a, b) => a.price - b.price);
            setProducts(sorted);
        } else if (value === "Ratings") {
            const sorted = [...products].sort((a, b) => b.rating - a.rating);
            setProducts(sorted);
        } else if (value === "Popular") {
            setProducts(defaultProducts1); // reset to original
        }
    }

    return (
        <section className="product">
            <div className="container">
                <div className="row">

                    <div className="col-xl-9 col-lg-12">
                        <div className="product__items">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="product__showing-result">
                                        <div className="product__showing-text-box">
                                            <p className="product__showing-text">Showing 1–12/14 of 14 results</p>
                                        </div>
                                        <div className="product__showing-sort">
                                            <select
                                                className="form-select form-select-lg py-3 select-box"
                                                aria-label="Sort Options"
                                                value={sortBy}
                                                onChange={(e) => handleSort(e)}
                                            >
                                                <option value="Popular">Sort by popular</option>
                                                <option value="Price">Sort by Price</option>
                                                <option value="Ratings">Sort by Ratings</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product__all">
                                <div className="product__all-tab">
                                    <div className="product__all-tab-button">
                                        <ul className="tabs-button-box clearfix">
                                            <li data-tab="#grid" onClick={() => setHorizontal(false)} className={`tab-btn-item ${!isHorizontal ? 'active-btn-item' : ''}`}>
                                                <div className="product__all-tab-button-icon one">
                                                    <i className="fa fa-solid fa-bars"></i>
                                                </div>
                                            </li>
                                            <li data-tab="#list" onClick={() => setHorizontal(true)} className={`tab-btn-item ${isHorizontal ? 'active-btn-item' : ''}`}>
                                                <div className="product__all-tab-button-icon">
                                                    <i className="fa fa-solid fa-list-ul"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/*Start Tabs Content Box*/}
                                    <div className="tabs-content-box">
                                        {/*Start Tab*/}
                                        <div className={`tab-content-box-item ${!isHorizontal ? 'tab-content-box-item-active' : ''}`} id="grid">
                                            <div className="product__all-tab-content-box-item">
                                                <div className="product__all-tab-single">
                                                    <div className="row">

                                                        {products.map((product) => (
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Tab*/}
                                        {/*Start Tab*/}
                                        <div className={`tab-content-box-item ${isHorizontal ? 'tab-content-box-item-active' : ''}`} id="list">
                                            <div className="product__all-tab-content-box-item">
                                                <div className="product__all-tab-single">
                                                    <div className="row">

                                                        {products.map((product) => (
                                                            <div key={product.id} className="col-xl-6 col-lg-6">
                                                                <div className="single-product-style2">
                                                                    <div className="row">
                                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                                            <div className="single-product-style2__img">
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
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                                            <div className="single-product-style2__content">
                                                                                {/* Star Rating */}
                                                                                <div className="single-product-style2__review">
                                                                                    {renderStars(product.rating)}
                                                                                </div>

                                                                                {/* Product Info */}
                                                                                <div className="single-product-style2__text">
                                                                                    <h4>
                                                                                        <a href={product.link}>{product.name}</a>
                                                                                    </h4>
                                                                                    {renderPrice(product)}
                                                                                </div>

                                                                                {/* Action Buttons */}
                                                                                <ul className="single-product-style2__info">
                                                                                    <li>
                                                                                        <a
                                                                                            href="#"
                                                                                            title="Add to Wishlist"
                                                                                            onClick={(e) => {
                                                                                                e.preventDefault();
                                                                                                handleWishlist(product.id);
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
                                                                                                handleAddToCart(product.id);
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
                                                                                                handleQuickView(product.id);
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
                                                                                                handleCompare(product.id);
                                                                                            }}
                                                                                        >
                                                                                            <i className="fa fa-solid fa-repeat"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Tab*/}
                                    </div>
                                    {/*End Tabs Content Box*/}
                                </div>
                                <ul className="styled-pagination text-center clearfix">
                                    <li className="arrow prev active"><a href="#"><span className="fas fa-arrow-left"></span></a> </li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li className="arrow next"><a href="#"><span className="fas fa-arrow-right"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*Start Product Sidebar*/}
                    <SideBar setProducts={setProducts} defaultProducts1={defaultProducts1} />
                    {/*End Product Sidebar*/}
                </div>
            </div>
        </section>
    );
};

export default ProductRightMain;