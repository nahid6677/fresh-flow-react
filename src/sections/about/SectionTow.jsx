import aboutSec1 from "../../assets/images/shapes/team-one-shape-1.png"
import aboutSec2 from "../../assets/images/shapes/team-one-shape-2.png"
import aboutSec3 from "../../assets/images/team/team-1-1.jpg"
import aboutSec4 from "../../assets/images/team/team-1-2.jpg"
import aboutSec5 from "../../assets/images/team/team-1-3.jpg"
import aboutSec6 from "../../assets/images/team/team-1-4.jpg"
import aboutSec7 from "../../assets/images/team/team-1-2.jpg"
import aboutSec8 from "../../assets/images/testimonial/testimonial-client-1-1.jpg"
import aboutSec9 from "../../assets/images/testimonial/testimonial-client-1-2.jpg"
import aboutSec10 from "../../assets/images/testimonial/testimonial-client-1-3.jpg"
import aboutSec11 from "../../assets/images/testimonial/testimonial-client-1-3.jpg"
import aboutSec12 from "../../assets/images/shapes/testimonial-two-shape-1.png"
import aboutSec13 from "../../assets/images/shapes/testimonial-two-shape-2.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom"
import AdvanceCountUp from "../../components/common/AdvanceCountUp"
import { useRef } from "react"
const Arrows = () => {
    return null
}
const SectionTow = () => {
    const sliderRefTeam = useRef(null);
    const sliderRefTesti = useRef(null);
    const [animationRef, animationInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    // const isMobile = window.innerWidth <= 768; // Simple mobile check
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
    const carouselItems = [
        {
            imgURL: aboutSec3,
            title: "Emily Carter",
            subTitle: "Operations Manager",
        },
        {
            imgURL: aboutSec4,
            title: "Michael Bennett",
            subTitle: "Team Leader",
        },
        {
            imgURL: aboutSec5,
            title: "Sophia Ramirez",
            subTitle: "Quality Control Supervisor",
        },
        {
            imgURL: aboutSec6,
            title: "Ethan Collins",
            subTitle: "Customer Service Coordinator",
        },
        {
            imgURL: aboutSec7,
            title: "Ethan Collins",
            subTitle: "Customer Service Coordinator",
        },
    ];
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
    const teamNextSlide = () => {
        if (sliderRefTeam.current) {
            sliderRefTeam.current.slickNext();
        }
    }
    const teamPrevSlide = () => {
        if (sliderRefTeam.current) {
            sliderRefTeam.current.slickPrev();
        }
    }
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
        <>
            <section className="counter-two">
                <div className="container">
                    <ul className="row list-unstyled">
                        <li className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__bg"
                                ></div>
                                <div className="counter-two__icon">
                                    <span className="icon-cleaning-cart"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div ref={animationRef} className="counter-two__count-box">
                                        <p className="odometer" >{animationInView && <AdvanceCountUp ending={100} dependOn={animationInView} />}</p>
                                        <span>+</span>
                                    </div>
                                    <p className="counter-two__count-text">Projects Done per month </p>
                                </div>
                            </div>
                        </li>
                        <li className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__bg"
                                ></div>
                                <div className="counter-two__icon">
                                    <span className="icon-costumer"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count-box">
                                        <p className="odometer">{animationInView && <AdvanceCountUp ending={98} dependOn={animationInView} />}</p>
                                        <span>%</span>
                                    </div>
                                    <p className="counter-two__count-text">Trusted by happy Customer!</p>
                                </div>
                            </div>
                        </li>
                        <li className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__bg"
                                ></div>
                                <div className="counter-two__icon">
                                    <span className="icon-review"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count-box">
                                        <p className="odometer">{animationInView && <AdvanceCountUp ending={12} dependOn={animationInView} />}</p>
                                        <span>k</span>
                                        <span>+</span>
                                    </div>
                                    <p className="counter-two__count-text">Positive Rating in Trustpilot</p>
                                </div>
                            </div>
                        </li>
                        <li className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__bg"
                                ></div>
                                <div className="counter-two__icon">
                                    <span className="icon-work-schedule"></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count-box">
                                        <p className="odometer" >{animationInView && <AdvanceCountUp ending={35} dependOn={animationInView} />}</p>
                                        <span>m</span>
                                    </div>
                                    <p className="counter-two__count-text">Rating in oy local City Network</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="team-one">
                <div className="team-one__shape-1 float-bob-y">
                    <img src={aboutSec1} alt="" />
                </div>
                <div className="team-one__shape-2 float-bob-x">
                    <img src={aboutSec2} alt="" />
                </div>
                <div className="team-one__shape-3"></div>
                <div className="team-one__shape-4"></div>
                <div className="container">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">OUR Team Member</span>
                        </div>
                        <h2 className="section-title__title title-animation">Meet the Experts Behind Our<br />
                            Success. <span>Our Dedicated Team at</span><br /><span>Your Service</span>
                        </h2>
                    </div>
                    <div className="team-one__carousel owl-theme owl-carousel">
                        <Slider {...settings} ref={sliderRefTeam}>
                            {
                                carouselItems.map((item, idx) => <div key={idx} className="item">
                                    <div className="team-one__single">
                                        <div className="team-one__img-box">
                                            <div className="team-one__img">
                                                <img src={item?.imgURL} alt="" />
                                            </div>
                                            <div className="team-one__share-and-social">
                                                <div className="team-one__share">
                                                    <span className="icon-share"></span>
                                                </div>
                                                <div className="team-one__social">
                                                    <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                                    <a href="#"><span className="icon-pinterest"></span></a>
                                                    <a href="#"><span className="icon-linkedin-big-logo"></span></a>
                                                    <a href="#"><span className="icon-instagram"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-one__content">
                                            <div className="team-one__title-box">
                                                <h3 className="team-one__title">
                                                    <Link to={"/team-details"}>{item?.title}</Link>
                                                </h3>
                                                <p className="team-one__sub-title">{item?.subTitle}</p>
                                            </div>
                                            <div className="team-one__arrow">
                                                <Link to={"/team-details"}><span className="icon-diagonal-arrow"></span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                        <div className="owl-nav">
                            <button onClick={teamNextSlide}
                                className="owl-prev"
                                aria-label="Previous Slide"
                                type="button">
                                <span className="icon-diagonal-arrow"></span>
                            </button>
                            <button onClick={teamPrevSlide}
                                className="owl-next"
                                aria-label="Next Slide"
                                type="button">
                                <span className="icon-diagonal-arrow"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
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
                                                        <Link to={"/testimonials"}>
                                                            {item?.clientName}
                                                        </Link> 
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
        </>
    );
};

export default SectionTow;