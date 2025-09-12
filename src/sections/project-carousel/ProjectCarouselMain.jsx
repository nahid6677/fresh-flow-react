import React from 'react';
import carouimg1 from "../../assets/images/project/project-1-1.jpg"
import carouimg2 from "../../assets/images/project/project-1-2.jpg"
import carouimg3 from "../../assets/images/project/project-1-3.jpg"
import carouimg4 from "../../assets/images/project/project-1-4.jpg"
import carouimg5 from "../../assets/images/project/project-1-5.jpg"
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const EmptyArrow = () => null;
const ProjectCarouselMain = () => {
    const projectCarousel = [
        {
            image: carouimg1,
            tag: `Residential`,
            title: `Sparkle & Shine Services`,
        },
        {
            image: carouimg2,
            tag: `Commercial`,
            title: `Pure Clean Solutions`,
        },
        {
            image: carouimg3,
            tag: `Deep CLEAN`,
            title: `Fresh Space Experts`,
        },
        {
            image: carouimg4,
            tag: `Moveout`,
            title: `Eco Gleam Crew`,
        },
        {
            image: carouimg5,
            tag: `Specialized`,
            title: `Neat Nest Pros`,
        },
        {
            image: carouimg1,
            tag: `Residential`,
            title: `Sparkle & Shine Services`,
        },
        {
            image: carouimg5,
            tag: `Specialized`,
            title: `Neat Nest Pros`,
        },
        {
            image: carouimg2,
            tag: `Commercial`,
            title: `Pure Clean Solutions`,
        },
        {
            image: carouimg5,
            tag: `Specialized`,
            title: `Neat Nest Pros`,
        },

    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
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
        <section className="project-carousel-page">
            <div className="container">
                <div className="project-one__inner">
                    <div className="project-carousel-style ">
                        <Slider {...settings}>
                            {
                                projectCarousel.map((item, index) => <div key={index} className="item" style={{ margin: "0 10px" }}>
                                    <div className="project-one__single">
                                        <div className="project-one__img-box">
                                            <div className="project-one__img">
                                                <img src={item?.image} alt="" />
                                            </div>
                                            <div className="project-one__view-box">
                                                <Link className="project-one__view" to={"/project-details"}>
                                                    <i className="icon-diagonal-arrow"></i>
                                                    <span>View More</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="project-one__content">
                                            <p className="project-one__tag">{item?.tag}<span
                                                className="icon-right-arrow"></span>November 24</p>
                                            <h3 className="project-one__title">
                                                <Link className="project-one__view" to={"/project-details"}>
                                                    {item?.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarouselMain;