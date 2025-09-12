import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import {
    FaArrowLeft,
    FaArrowRight
} from "react-icons/fa";
import detailsimg1 from "../../assets/images/shop/product-details-img-1.jpg";
import detailsimg2 from "../../assets/images/shop/product-details-img-2.jpg";
import detailsimg3 from "../../assets/images/shop/product-details-img-3.jpg";

import thimbimg1 from "../../assets/images/shop/product-details-thumb-img-1.jpg";
import thimbimg2 from "../../assets/images/shop/product-details-thumb-img-2.jpg";
import thimbimg3 from "../../assets/images/shop/product-details-thumb-img-3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Component
const CustomPrevArrow = ({ onClick }) => (
    <button
        className="custom-arrow prev"
        onClick={onClick}
        aria-label="Previous Slide"
    >
        <FaArrowLeft />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        className="custom-arrow next"
        onClick={onClick}
        aria-label="Next Slide"
    >
        <FaArrowRight />
    </button>
);
const NavForSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    // Main Slider Settings
    const mainSettings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipe: true,
        fade: false, // ✅ fade off
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        accessibility: false,
    };

    // Thumbnail Slider Settings
    const thumbSettings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
        accessibility: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            {/* Main Slider */}
            <Slider {...mainSettings} asNavFor={nav2} ref={sliderRef1}>
                <div className="product-details__img">
                    <img src={detailsimg1} alt="Product 1" />
                </div>
                <div className="product-details__img">
                    <img src={detailsimg2} alt="Product 2" />
                </div>
                <div className="product-details__img">
                    <img src={detailsimg3} alt="Product 3" />
                </div>
                <div className="product-details__img">
                    <img src={detailsimg3} alt="Product 3" />
                </div>
            </Slider>

            {/* Thumbnail Slider */}
            <div className="" style={{ width: '300px', margin: '0 auto' }}>
                <Slider {...thumbSettings} asNavFor={nav1} ref={sliderRef2}>
                    <div className="product-details__thumb-img">
                        <img src={thimbimg3} alt="Thumb 3" />
                    </div>
                    <div className="product-details__thumb-img">
                        <img src={thimbimg1} alt="Thumb 1" />
                    </div>
                    <div className="product-details__thumb-img">
                        <img src={thimbimg2} alt="Thumb 2" />
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default NavForSlider;