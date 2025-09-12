import blogshapbg1 from "../../assets/images/shapes/blog-two-shape-bg.png"
import blogshapbg2 from "../../assets/images/shapes/blog-two-shape-bg-2.png"

import blogimg1 from "../../assets/images/blog/blog-2-1.jpg"
import blogimg2 from "../../assets/images/blog/blog-2-2.jpg"
import blogimg3 from "../../assets/images/blog/blog-2-3.jpg"
import blogimg4 from "../../assets/images/blog/blog-2-4.jpg"
import { Link } from "react-router-dom"
const blogs = [
    {
        id: 1,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#EcoClean"
            },
            {
                lin: "/blog-details",
                text: "#DeepClean"
            },
        ],
        image: blogimg1,
        titleLink: "/blog-details",
        title: "10 Tips to Keep Your Home Sparkling & Cleanings",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 2,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#Sanitize"
            },
            {
                lin: "/blog-details",
                text: "#DeepClean"
            },
        ],
        image: blogimg2,
        titleLink: "/blog-details",
        title: "How to Get Your Deposit Back Easily",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 3,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#Sparkle"
            },
            {
                lin: "/blog-details",
                text: "#Sparkle"
            },
        ],
        image: blogimg3,
        titleLink: "/blog-details",
        title: "Why Eco-Friendly Cleaning Products Are Better.",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
    {
        id: 4,
        blogLink: [
            {
                lin: "/blog-details",
                text: "#Sanitize"
            },
            {
                lin: "/blog-details",
                text: "#EcoClean"
            },
        ],
        image: blogimg4,
        titleLink: "/blog-details",
        title: "The Ultimate Guide to Deep Cleaning Your Home",
        date: "March 23, 2024",
        comment: "12",
        username: "Michael B",
        subtitle: "Financial Analyst"
    },
]

const OurBlogTow = () => {
    return (
        <section className="blog-two">
            <div className="blog-two__shape-bg" style={{ backgroundImage: `url(${blogshapbg1})` }}>
            </div>
            <div className="blog-two__shape-bg-2" style={{ backgroundImage: `url(${blogshapbg2})` }}>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Blogs</span>
                    </div>
                    <h2 className="section-title__title title-animation">Destination for Inspiration,<br />
                        <span>Tips, Plan and Stories</span></h2>
                </div>
                <div className="row">
                    {
                        blogs.map((item, i) => <div key={i} className="col-xl-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="blog-two__single">
                                <div className="blog-two__img">
                                    <img src={item?.image} alt="blog image" />
                                </div>
                                <div className="blog-two__content">
                                    <ul className="list-unstyled blog-two__tags">
                                        {
                                            item?.blogLink.map((L, j) => <li key={j}><Link to={L.lin}>{L?.text}</Link></li>)
                                        }
                                    </ul>
                                    <h3 className="blog-two__title">
                                        <Link to={item?.titleLink}>{item?.title}</Link>
                                    </h3>
                                    <ul className="blog-two__meta list-unstyled">
                                        <li>
                                            <Link to={item?.titleLink}>
                                                <span className="icon-calendar"></span>
                                                {item?.date}
                                            </Link>

                                        </li>
                                        <li>
                                            <Link to={item?.titleLink}>
                                                <span className="icon-bubble-chat"></span>
                                                {item?.comment} Comments
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="blog-two__btn-and-user">
                                        <div className="blog-two__btn">
                                            <Link className="thm-btn" to={item?.titleLink}>
                                                View Details
                                                <span><i className="icon-diagonal-arrow"></i></span>
                                            </Link>
                                        </div>
                                        <div className="blog-two__user">
                                            <div className="blog-two__user-name-box">
                                                <div className="blog-two__user-name-dot"></div>
                                                <h4 className="blog-two__user-name">{item?.username}</h4>
                                            </div>
                                            <p className="blog-two__user-sub-title">{item?.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurBlogTow;