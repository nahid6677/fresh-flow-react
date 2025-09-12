import pricingShape from '../../assets/images/shapes/pricing-two-shape-1.png';
import Slider from 'react-slick';
const EmptyArrow = () => null;
const PricingCarouselMain = () => {
    const pricingData = [
        {
            id: 1,
            packageName: "Standard",
            price: "220.00",
            validity: "/Monthly",
            description: "Achieve a Pristine Office Environment in Just 4 Hours!",
            badge: "Recommended",
            isHighlighted: false,
            features: [
                "Eco-Friendly Cleaning Products",
                "Flexible Scheduling",
                "Highly Trained Professionals",
                "Customized Cleaning Plans",
                "Flexible Scheduling"
            ]
        },
        {
            id: 2,
            packageName: "PREMIUM",
            price: "240.00",
            validity: "/Yearly",
            description: "Transform Your Home Into a Fresh Haven in Just 2 Hours!",
            badge: "Recommended",
            isHighlighted: true,
            features: [
                "Advanced Cleaning Equipment",
                "Affordable Service Packages",
                "Satisfaction Guaranteed Results",
                "Quick Response Team",
                "Trusted Local Professionals"
            ]
        },
        {
            id: 3,
            packageName: "BUSINESS",
            price: "350.00",
            validity: "/Weekly",
            description: "Get Spotless Interiors and a Perfect Shine in Only 3 Hours!",
            badge: "Recommended",
            isHighlighted: false,
            features: [
                "Pet-Friendly Cleaning Solutions",
                "Non-Toxic Cleaning Supplies",
                "Experienced Cleaning Experts",
                "24/7 Customer Support in the",
                "Flexible Scheduling"
            ]
        },
        {
            id: 4,
            packageName: "Standard",
            price: "220.00",
            validity: "/Monthly",
            description: "Achieve a Pristine Office Environment in Just 4 Hours!",
            badge: "Recommended",
            isHighlighted: false,
            features: [
                "Eco-Friendly Cleaning Products",
                "Flexible Scheduling",
                "Highly Trained Professionals",
                "Customized Cleaning Plans",
                "Flexible Scheduling"
            ]
        },
        {
            id: 5,
            packageName: "PREMIUM",
            price: "240.00",
            validity: "/Yearly",
            description: "Transform Your Home Into a Fresh Haven in Just 2 Hours!",
            badge: "Recommended",
            isHighlighted: true,
            features: [
                "Advanced Cleaning Equipment",
                "Affordable Service Packages",
                "Satisfaction Guaranteed Results",
                "Quick Response Team",
                "Trusted Local Professionals"
            ]
        },
        {
            id: 6,
            packageName: "BUSINESS",
            price: "350.00",
            validity: "/Weekly",
            description: "Get Spotless Interiors and a Perfect Shine in Only 3 Hours!",
            badge: "Recommended",
            isHighlighted: false,
            features: [
                "Pet-Friendly Cleaning Solutions",
                "Non-Toxic Cleaning Supplies",
                "Experienced Cleaning Experts",
                "24/7 Customer Support in the",
                "Flexible Scheduling"
            ]
        },
        {
            id: 7,
            packageName: "PREMIUM",
            price: "240.00",
            validity: "/Yearly",
            description: "Transform Your Home Into a Fresh Haven in Just 2 Hours!",
            badge: "Recommended",
            isHighlighted: true,
            features: [
                "Advanced Cleaning Equipment",
                "Affordable Service Packages",
                "Satisfaction Guaranteed Results",
                "Quick Response Team",
                "Trusted Local Professionals"
            ]
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
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
        <section className="pricing-carousel-page">
            <div className="container">
                <div className="pricing-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <Slider {...settings}>
                        {
                            pricingData.map((pricing) => (
                                <div key={pricing.id} className="item">
                                    <div className={`pricing-two__single ${pricing.isHighlighted ? 'pricing-two__single--two' : ''}`}>
                                        <div className="pricing-two__shape-1">
                                            <img src={pricingShape} alt="Shape" />
                                        </div>
                                        <div className="pricing-two__badge">
                                            <p>{pricing.badge}</p>
                                        </div>
                                        <div className="pricing-two__pack-name">
                                            <p>{pricing.packageName}</p>
                                        </div>
                                        <h3 className="pricing-two__price-box">
                                            <span className="dolar">$</span> {pricing.price}
                                            <span className="validity">{pricing.validity}</span>
                                        </h3>
                                        <p className="pricing-two__text">{pricing.description}</p>
                                        <div className="pricing-two__btn-box">
                                            <a href="#" className="thm-btn">
                                                Choose Plan<span><i className="icon-plus"></i></span>
                                            </a>
                                        </div>
                                        <div className="pricing-two__points-box">
                                            <ul className="list-unstyled pricing-two__points">
                                                {pricing.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <div className="icon">
                                                            <span className="icon-check-1"></span>
                                                        </div>
                                                        <div className="text">
                                                            <p>{feature}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PricingCarouselMain;