import { useRef } from 'react'
import aboutSec8 from "../../assets/images/testimonial/testimonial-client-1-1.jpg"
import aboutSec9 from "../../assets/images/testimonial/testimonial-client-1-2.jpg"
import aboutSec10 from "../../assets/images/testimonial/testimonial-client-1-3.jpg"
import aboutSec11 from "../../assets/images/testimonial/testimonial-client-1-3.jpg"
import aboutSec12 from "../../assets/images/shapes/testimonial-two-shape-1.png"
import aboutSec13 from "../../assets/images/shapes/testimonial-two-shape-2.png"
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
const Arrows = () => null;
const testimonialCarosel = [
    {
        topTitle: "Awesome Services",
        text: `The cleaning team has been an absolute lifesaver! They go 
            above and beyond to make sure my home looks immaculate. Every surface sparkles, and they
            even take care of the small details that most services overlook. I can’t recommend them enough!`,
        clientName: `– David R.`,
        subTitle: `Founder & CEO`,
        igame: aboutSec8
    },
    {
        topTitle: "Excellent Convesation",
        text: `I’ve been using their services for over a year, and they’ve
            never let me down. The cleaners are punctual, friendly, and incredibly professional.
            It’s such a relief knowing I can rely on them to take care of my home while I focus on
            my busy schedule.`,
        clientName: `– James T.`,
        subTitle: `Ui/Ux Designer`,
        igame: aboutSec9
    },
    {
        topTitle: "Awesome Services",
        text: `I needed a deep cleaning before hosting a big family event,
            and they delivered beyond my expectations! The team asked about my specific needs and
            ensured every corner of my home was spotless. They truly care about their customers and
            it shows`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        igame: aboutSec10
    },
    {
        topTitle: "Awesome Services",
        text: `The cleaning team has been an absolute lifesaver! They go 
            above and beyond to make sure my home looks immaculate. Every surface sparkles, and they
            even take care of the small details that most services overlook. I can’t recommend them enough!`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        igame: aboutSec11
    },
    {
        topTitle: "Awesome Services",
        text: `I needed a deep cleaning before hosting a big family event,
            and they delivered beyond my expectations! The team asked about my specific needs and
            ensured every corner of my home was spotless. They truly care about their customers and
            it shows`,
        clientName: `- Sophia L.`,
        subTitle: `Web Developer`,
        igame: aboutSec10
    },

]
const TestimonialTow = () => {
    const sliderRefTesti = useRef(null);
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false,
        nextArrow: <Arrows />,
        prevArrow: <Arrows />,
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
    const testiNextSlide = () => {
        if (sliderRefTesti.current) {
            sliderRefTesti.current.slickNext();
        }
    }
    const testiPrevSlide = () => {
        if (sliderRefTesti.current) {
            sliderRefTesti.current.slickPrev();
        }
    }

    return (
        <section className="testimonial-two">
            <div className="testimonial-two__shape-bg-1"
            ></div>
            <div className="testimonial-two__shape-1">
                <img src={aboutSec12} alt="" />
            </div>
            <div className="testimonial-two__shape-2">
                <img src={aboutSec13} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">Hear from our <span>satisfied</span> <br />
                        <span>clients who praise</span></h2>
                </div>
                <div className="testimonial-two__carousel  owl-theme owl-carousel">
                    <Slider {...settings2} ref={sliderRefTesti}>
                        {
                            testimonialCarosel.map((item, idx) => <div key={idx} className="item" style={{ margin: "20px" }}>
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__top">
                                        <div className="testimonial-two__top-title">
                                            <h4>{item?.topTitle}</h4>
                                        </div>
                                        <div className="testimonial-two__top-quote">
                                            <span className="icon-left"></span>
                                        </div>
                                    </div>
                                    <p className="testimonial-two__text">{item?.text}</p>
                                    <div className="testimonial-two__bottom">
                                        <div className="testimonial-two__star">
                                            <span className="icon-star"></span>
                                            <span className="icon-star"></span>
                                            <span className="icon-star"></span>
                                            <span className="icon-favorite"></span>
                                            <span className="icon-favorite"></span>
                                        </div>
                                        <div className="testimonial-two__client-info">
                                            <div className="testimonial-two__client-img-box">
                                                <div className="testimonial-two__client-img">
                                                    <img src={item?.igame} alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-two__client-content">
                                                <h3 className="testimonial-two__client-name">
                                                    <Link to={"/testimonials"}>{item?.clientName}</Link> 
                                                </h3>
                                                <p className="testimonial-two__client-sub-title">{item?.subTitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Slider>
                    <div className="owl-nav" style={{ zIndex: "111" }}>
                        <button onClick={testiNextSlide}
                            className="owl-prev"
                            aria-label="Previous Slide"
                            type="button">
                            <span className="icon-diagonal-arrow"></span>
                        </button>
                        <button onClick={testiPrevSlide}
                            className="owl-next"
                            aria-label="Next Slide"
                            type="button">
                            <span className="icon-diagonal-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialTow;