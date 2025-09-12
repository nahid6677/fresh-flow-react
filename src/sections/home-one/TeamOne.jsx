import teamImg1 from "../../assets/images/shapes/team-one-shape-1.png";
import teamImg2 from "../../assets/images/shapes/team-one-shape-2.png";
import teamImg3 from "../../assets/images/team/team-1-1.jpg";
import teamImg4 from "../../assets/images/team/team-1-2.jpg";
import teamImg5 from "../../assets/images/team/team-1-3.jpg";
import teamImg6 from "../../assets/images/team/team-1-4.jpg";
import teamImg7 from "../../assets/images/team/team-1-2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useRef } from "react";
const Arrows = () => {
    return null
}
const TeamOne = () => {
    const sliderRef = useRef(null);
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
    const carouselItems = [
        {
            imgURL: teamImg3,
            title: "Emily Carter",
            subTitle: "Operations Manager",
        },
        {
            imgURL: teamImg4,
            title: "Michael Bennett",
            subTitle: "Team Leader",
        },
        {
            imgURL: teamImg5,
            title: "Sophia Ramirez",
            subTitle: "Quality Control Supervisor",
        },
        {
            imgURL: teamImg6,
            title: "Ethan Collins",
            subTitle: "Customer Service Coordinator",
        },
        {
            imgURL: teamImg7,
            title: "Ethan Collins",
            subTitle: "Customer Service Coordinator",
        },
    ];
    const handleNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }
    const handlePrevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }
    return (
        <section className="team-one">
            <div className="team-one__shape-1 float-bob-y">
                <img src={teamImg1} alt="" />
            </div>
            <div className="team-one__shape-2 float-bob-x">
                <img src={teamImg2} alt="" />
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
                    <h2 className="section-title__title title-animation">
                        Meet the Experts Behind Our
                        <br />
                        Success. <span>Our Dedicated Team at</span>
                        <br />
                        <span>Your Service</span>
                    </h2>


                </div>
                <div className="team-one__carousel owl-theme owl-carousel ">
                    <Slider {...settings} ref={sliderRef}>
                        {
                            carouselItems.map((item, index) => (
                                <div key={index} className="item">
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
                                                    <a href="#">
                                                        <span className="icon-facebook-app-symbol"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="icon-pinterest"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="icon-linkedin-big-logo"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="icon-instagram"></span>
                                                    </a>
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
                                                <Link to={"/team-details"}>
                                                    <span className="icon-diagonal-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    <div className="owl-nav">
                        <button onClick={handleNextSlide}
                            className="owl-prev"
                            aria-label="Previous Slide"
                            type="button">
                            <span className="icon-diagonal-arrow"></span>
                        </button>
                        <button onClick={handlePrevSlide}
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

export default TeamOne;
