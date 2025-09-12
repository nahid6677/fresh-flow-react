import { Link } from "react-router-dom";
import blogImg1 from "../../assets/images/blog/blog-1-1.jpg"
import blogImg2 from "../../assets/images/blog/blog-1-2.jpg"
import blogImg3 from "../../assets/images/blog/blog-1-3.jpg"
import blogImg4 from "../../assets/images/blog/blog-1-4.jpg"

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
]

const BlogOne = ({ blogs = Allblogs || [], pagination = false }) => {
    return (
        <section className="blog-one">
            <div className="blog-one__shape-bg" >
            </div>
            <div className="container">
                <div className="blog-one__top">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">OUR INSIGHT</span>
                        </div>
                        <h2 className="section-title__title title-animation">Discover Insights and <span>Tips </span> <br />
                            <span>in Our Latest Articles</span>
                        </h2>
                    </div>
                    <div className="blog-one__btn-box">
                        <Link to={"#"} className="thm-btn">
                            View All Blogs<span><i className="icon-diagonal-arrow"></i></span>
                        </Link>
                    </div>
                </div>
                <div className="blog-one__bottom">
                    <div className="row">
                        {
                            blogs.map((item, i) => {
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
                    </div>
                </div>

                {
                    pagination && <div className="blog-page__pagination">
                        <div className="blog-list__pagination">
                            <ul className="pg-pagination list-unstyled">
                                <li className="prev">
                                    <a href="#" aria-label="prev"><i className="fas fa-arrow-left"></i></a>
                                </li>
                                <li className="count active"><a href="#">01</a></li>
                                <li className="count"><a href="#">02</a></li>
                                <li className="count"><a href="#">03</a></li>
                                <li className="next">
                                    <a href="#" aria-label="Next"><i className="fas fa-arrow-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                }

            </div>
        </section>
    );
};

export default BlogOne;