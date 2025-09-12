import listimg1 from "../../assets/images/blog/blog-list-1-1.jpg"
import listimg7 from "../../assets/images/blog/blog-list-client-img-1.jpg"
import listimg2 from "../../assets/images/blog/blog-list-1-2.jpg"
import listimg6 from "../../assets/images/blog/blog-list-client-img-2.jpg"
import listimg3 from "../../assets/images/blog/blog-list-client-img-3.jpg"
import listimg4 from "../../assets/images/blog/blog-list-1-3.jpg"
import listimg5 from "../../assets/images/blog/blog-list-client-img-4.jpg"

import { Link } from 'react-router-dom';
import BlogDetailsRight from "./BlogDetailsRight"

const blogPosts = [
    {
        id: 1,
        title: "5 Essential Tips for Choosing the Right Cleaning Service for Your Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Alisa Olivia",
        image1: listimg1,
        image2: listimg7,
        hasImage: true
    },
    {
        id: 2,
        title: "The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Adam Smith",
        image1: listimg2,
        image2: listimg6,
        hasImage: true
    },
    {
        id: 3,
        title: "How to Maintain a Clean Home Between Professional Cleaning Visits",
        description: "This blog offers practical advice on how homeowners can keep their spaces clean and organized between professional cleaning appointments, ensuring their home remains spotless at all times.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Sarah Caine",
        image1: null,
        image2: listimg3,
        hasImage: false
    },
    {
        id: 4,
        title: "Top 10 Common Cleaning Mistakes to Avoid for a Spotless Home",
        description: "This blog will guide readers through the process of selecting the best cleaning service for their home, focusing on factors like reliability, cost, and the types of cleaning offered.",
        date: "March 23, 2024",
        comments: "12 Comments",
        tags: ["#Sanitize", "#DeepClean"],
        author: "Smith Jhon",
        image1: listimg4,
        image2: listimg5,
        hasImage: true
    }
];


const BlogListMain = () => {
    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">

                            {
                                blogPosts.map((item, i) => {
                                    return (
                                        item?.id !== 3 ?
                                            <div key={i} className="blog-list__single">
                                                <div className="blog-list__img-box">
                                                    <div className="blog-list__img">
                                                        <img src={item?.image1} alt="" />
                                                    </div>
                                                    <div className="blog-list__meta-and-tag">
                                                        <ul className="blog-list__meta list-unstyled">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-calendar"></span>
                                                                </div>
                                                                <p>March 23, 2024</p>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-bubble-chat"></span>
                                                                </div>
                                                                <p>{item?.comments}</p>
                                                            </li>
                                                        </ul>
                                                        <div className="blog-list__tag">
                                                            {
                                                                item?.tags.map((t, i) => <a key={i} href="#">{t}</a>)
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-list__content">
                                                    <h3 className="blog-list__title">
                                                        <Link to={"/blog-details"}>{item?.title}</Link>
                                                    </h3>
                                                    <p className="blog-list__text"> {item?.description}</p>
                                                    <div className="blog-list__btn-and-client-info">
                                                        <div className="blog-list__btn-box">
                                                            <Link className="thm-btn" to={"/blog-details"}>
                                                                Learn More<span><i className="icon-diagonal-arrow"></i></span>
                                                            </Link>
                                                        </div>
                                                        <div className="blog-list__client-info">
                                                            <div className="blog-list__client-img">
                                                                <img src={item?.image2} alt="" />
                                                            </div>
                                                            <div className="blog-list__client-content">
                                                                <span>Post By</span>
                                                                <p>{item?.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div key={i} className="blog-list__single blog-list__single-3">
                                                <div className="blog-list__content">
                                                    <h3 className="blog-list__title">
                                                        <Link to={"/blog-details"}>{item?.title}</Link>
                                                    </h3>
                                                    <p className="blog-list__text">{item?.description}</p>
                                                    <div className="blog-list__btn-and-client-info">
                                                        <div className="blog-list__btn-box">
                                                            <Link className="thm-btn" to={"/blog-details"}>Learn More<span><i className="icon-diagonal-arrow"></i></span></Link>
                                                        </div>
                                                        <div className="blog-list__client-info">
                                                            <div className="blog-list__client-img">
                                                                <img src={item?.image2} alt="" />
                                                            </div>
                                                            <div className="blog-list__client-content">
                                                                <span>Post By</span>
                                                                <p>{item?.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                            }

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
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <BlogDetailsRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogListMain;