import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import blogImg1 from "../../assets/images/blog/blog-1-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-1-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-1-3.jpg"
import blogImg4 from "../../assets/images/blog/blog-1-4.jpg"
import blogImg5 from "../../assets/images/blog/blog-1-5.jpg"
import blogImg6 from "../../assets/images/blog/blog-1-6.jpg"
import blogImg7 from "../../assets/images/blog/blog-1-7.jpg"
import blogImg8 from "../../assets/images/blog/blog-1-8.jpg"

const Allblogs = [
    {
        id: 1,
        image: blogImg1,
        date: {
            day: "05",
            month: "NOV"
        },
        links: {
            link1: "Cleaning",
            link2: "Sparkling",
        },
        title: "10 Simple Cleaning Hacks for a Spotless Home",
        text: "Discover quick and effective cleaning tips to keep your home sparkling"
    },
    {
        id: 2,
        image: blogImg2,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Moping",
            link2: "Sparkling",
        },
        title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
        text: "Explore how a clean workplace boosts productivity, impresses clients"
    },
    {
        id: 3,
        image: blogImg3,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Cleaning",
            link2: "Moping",
        },
        title: "How Our Cleaning Agency Makes a Difference",
        text: "A behind-the-scenes look at how a professional cleaning team transforms messy spaces"
    },
    {
        id: 4,
        image: blogImg4,
        date: {
            day: "30",
            month: "DEC"
        },
        links: {
            link1: "Sparkling",
            link2: "Moping",
        },
        title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
        text: "Learn when DIY cleaning falls short and why professional services"
    },
    {
        id: 5,
        image: blogImg5,
        date: {
            day: "05",
            month: "NOV"
        },
        links: {
            link1: "Cleaning",
            link2: "Sparkling",
        },
        title: "10 Simple Cleaning Hacks for a Spotless Home",
        text: "Discover quick and effective cleaning tips to keep your home sparkling"
    },
    {
        id: 6,
        image: blogImg6,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Moping",
            link2: "Sparkling",
        },
        title: "Top 5 Reasons Your Business Needs Expert Cleaning Services",
        text: "Explore how a clean workplace boosts productivity, impresses clients"
    },
    {
        id: 7,
        image: blogImg7,
        date: {
            day: "24",
            month: "APR"
        },
        links: {
            link1: "Cleaning",
            link2: "Moping",
        },
        title: "How Our Cleaning Agency Makes a Difference",
        text: "A behind-the-scenes look at how a professional cleaning team transforms messy spaces"
    },
    {
        id: 8,
        image: blogImg8,
        date: {
            day: "30",
            month: "DEC"
        },
        links: {
            link1: "Sparkling",
            link2: "Moping",
        },
        title: "Cleaning Hacks vs Professional Help: When to Call the Experts",
        text: "Learn when DIY cleaning falls short and why professional services"
    },
]
const EmptyArrow = () => null;
const BlogCarouselMain = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <section className="blog-carousel-page">
            <div className="container">
                <div className="blog-one__bottom">
                    <div className="blog-carousel-style owl-carousel owl-theme carousel-dot-style">
                        <Slider {...settings}>
                            {
                                Allblogs.map((item, i) => {
                                    return (
                                        item.id % 2 === 0 ?
                                            <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                                                data-wow-duration="1500ms">
                                                <div className="blog-one__single">
                                                    <div className="blog-one__content blog-one__content--two">
                                                        <h3 className="blog-one__title">
                                                            <Link to={"/blog-details"}>{item?.title}</Link>
                                                        </h3>
                                                        <p className="blog-one__text">{item?.text}</p>
                                                    </div>
                                                    <div className="blog-one__img-box">
                                                        <div className="blog-one__img">
                                                            <img src={item?.image} alt="" />
                                                        </div>
                                                        <div className="blog-one__date">

                                                            <p>{item?.date?.day}</p>
                                                            <span>{item?.date?.month}</span>
                                                        </div>
                                                        <ul className="list-unstyled blog-one__tag">
                                                            <li><Link to={"/blog-details"}>{item?.links?.link1}</Link></li>
                                                            <li><Link to={"/blog-details"}>{item?.links?.link2}</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                                data-wow-duration="1500ms">
                                                <div className="blog-one__single">
                                                    <div className="blog-one__img-box">
                                                        <div className="blog-one__img">
                                                            <img src={item?.image} alt="" />
                                                        </div>
                                                        <div className="blog-one__date">
                                                            <p>{item?.date?.day}</p>
                                                            <span>{item?.date?.month}</span>
                                                        </div>
                                                        <ul className="list-unstyled blog-one__tag">
                                                            <li><Link to={"/blog-details"}>{item?.links?.link1}</Link></li>
                                                            <li><Link to={"/blog-details"}>{item?.links?.link2}</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="blog-one__content">
                                                        <h3 className="blog-one__title">
                                                            <Link to={"/blog-details"}>{item?.title}</Link>
                                                        </h3>
                                                        <p className="blog-one__text">{item?.text}</p>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogCarouselMain;