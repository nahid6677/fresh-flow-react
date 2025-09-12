import React, { useState } from 'react';

import thumbImg1 from '../../assets/images/shop/product-thumb-1.jpg'
import thumbImg2 from '../../assets/images/shop/product-thumb-2.jpg'
import thumbImg3 from '../../assets/images/shop/product-thumb-3.jpg'
import thumbImg4 from '../../assets/images/shop/product-thumb-4.jpg'
const SideBar = ({ setProducts = [], defaultProducts1 = [] }) => {
    const [selectedRating, setSelectedRating] = useState('fivestar');
    const [valueRange, setValueRange] = useState(10)
    const min = 10;
    const max = 100;
    const percentage = ((valueRange - min) / (max - min)) * 100;


    const categories = [
        { name: 'House Cleaning', active: false },
        { name: 'Office Cleaning', active: true },
        { name: 'Commercial Cleaning', active: false },
        { name: 'Window Cleaning', active: false },
        { name: 'Carpet Cleaning', active: false }
    ];

    const recentProducts = [
        {
            id: 1,
            image: thumbImg1,
            title: 'White Detergent',
            price: '$33.00',
            rating: 5
        },
        {
            id: 2,
            image: thumbImg2,
            title: 'bucket cleaning',
            price: '$39.00',
            rating: 4
        },
        {
            id: 3,
            image: thumbImg3,
            title: 'Dalli Activ Cleaner',
            price: '$54.00',
            rating: 4
        },
        {
            id: 4,
            image: thumbImg4,
            title: 'Vacuum cleaner',
            price: '$44.00',
            rating: 5
        }
    ];

    const productTags = [
        'Cleaning', 'Moping', 'Commercial', 'DeepClean', 'Dusting', 'House Cleaning'
    ];

    const ratingOptions = [
        { id: 'fivestar', stars: 5 },
        { id: 'fourstar', stars: 4 },
        { id: 'threestar', stars: 3 },
        { id: 'twostar', stars: 2 },
        { id: 'onestar', stars: 1 }
    ];
    const renderStar = (rating, totalStars = 5) => {
        return Array.from({ length: totalStars }, (_, index) => (
            <span
                key={index}
                className={`icon-star ${index >= rating ? 'gray' : ''}`}
            ></span>
        ));
    };
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleFilter = () => {

        setProducts(defaultProducts1.filter((item) => item?.price <= valueRange))
    }

    return (
        <div className="col-xl-3 col-lg-12">
            <div className="product__sidebar style2">
                {/* Search Section */}
                <div className="shop-search product__sidebar-single">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

                {/* Price Range Section */}
                <div className="product__price-ranger product__sidebar-single">
                    <h3 className="product__sidebar-title">Price</h3>
                    <div className="price-ranger">
                        <div id="slider-range"></div>
                        <div className="ranger-min-max-block">
                            <input
                                type="range"
                                min={min}
                                max={max}
                                value={valueRange}
                                onChange={(e) => setValueRange(Number(e.target.value))}
                                className="custom-range"
                                style={{
                                    background: `linear-gradient(to right, blue ${percentage}%, #ddd ${percentage}%)`
                                }}
                            />
                            <div className="range-value-control">
                                <div className="range-value">
                                    <p>$5</p>
                                    <span>-</span>
                                    <p>${valueRange}</p>
                                </div>
                                <button onClick={handleFilter}>FILTER</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="shop-category product__sidebar-single">
                    <h3 className="product__sidebar-title">Categories</h3>
                    <ul className="list-unstyled">
                        {categories.map((category, index) => (
                            <li key={index} className={category.active ? 'active' : ''}>
                                <a href="#">{category.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Products Section */}
                <div className="shop-product-recent-products product__sidebar-single">
                    <h3 className="product__sidebar-title">Recent Products</h3>
                    <ul className="clearfix">
                        {recentProducts.map((product) => (
                            <li key={product.id}>
                                <div className="img">
                                    <img src={product.image} alt="Product" />
                                    <a href="#">
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <h5><a href="#">{product.title}</a></h5>
                                    </div>
                                    <div className="price">
                                        <p>{product.price}</p>
                                    </div>
                                    <div className="review">
                                        {renderStar(product.rating)}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Tags Section */}
                <div className="shop-product-tags product__sidebar-single">
                    <h3 className="product__sidebar-title">Product Tags</h3>
                    <div className="shop-product__tags-list">
                        {productTags.map((tag, index) => (
                            <a key={index} href="#">{tag}</a>
                        ))}
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="shop-product-reviews product__sidebar-single style">
                    <h3 className="product__sidebar-title">Reviews</h3>
                    <div className="sidebar-rating-box sidebar-rating-box--style2">
                        <ul>
                            {ratingOptions.map((option) => (
                                <li key={option.id}>
                                    <input
                                        type="radio"
                                        id={option.id}
                                        name="rating"
                                        checked={selectedRating === option.id}
                                        onChange={() => setSelectedRating(option.id)}
                                    />
                                    <label htmlFor={option.id}>
                                        <i></i>
                                        {renderStar(option.stars)}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;