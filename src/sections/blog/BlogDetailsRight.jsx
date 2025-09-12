import { Link } from "react-router-dom";
import bloglp1 from "../../assets/images/blog/lp-1-1.jpg"
import bloglp2 from "../../assets/images/blog/lp-1-2.jpg"
import bloglp3 from "../../assets/images/blog/lp-1-3.jpg"

const BlogDetailsRight = () => {
    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        // console.log(search)
    }
    const handleSubscribe = (e) => {
        e.preventDefault();
        const subseribe = e.target.subscribe.value;
        // console.log(subseribe)
    }
    return (
        <div className="blog-details__right">
            <div className="sidebar">
                <div className="sidebar__single sidebar__search">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-shape"></div>
                        <div className="sidebar__title-shape-2"></div>
                        <h3 className="sidebar__title">Search Blogs </h3>
                    </div>
                    <p className="sidebar__search-text">
                        Search Explore a world of diverse blog topics to stay informed and inspired.
                    </p>
                    <form onSubmit={handleSearch} className="sidebar__search-form">
                        <input type="search" name='search' placeholder="Search here" />
                        <button type="submit"><i className="icon-search"></i></button>
                    </form>
                </div>
                <div className="sidebar__single sidebar__all-category">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-shape"></div>
                        <div className="sidebar__title-shape-2"></div>
                        <h3 className="sidebar__title">Category</h3>
                    </div>
                    <ul className="sidebar__all-category-list list-unstyled">
                        <li>
                            <Link to={"/blog-details"}>Residential Cleaning <span>(15)</span></Link> 
                        </li>
                        <li>
                            <Link to={"/blog-details"}>Commercial Cleaning Design <span>(20)</span></Link> 
                        </li>
                        <li>
                            <Link to={"/blog-details"}>Eco-Friendly Cleaning <span>(42)</span></Link> 
                        </li>
                        <li>
                            <Link to={"/blog-details"}>Cleaning Tips and Tricks <span>(89)</span></Link> 
                        </li>
                    </ul>
                </div>
                <div className="sidebar__single sidebar__post">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-shape"></div>
                        <div className="sidebar__title-shape-2"></div>
                        <h3 className="sidebar__title">Recent Post</h3>
                    </div>
                    <ul className="sidebar__post-list list-unstyled">
                        <li>
                            <div className="sidebar__post-image">
                                <img src={bloglp1} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <Link to={"/blog-details"}>5 Essential Tips for Choosing the Right Cleaning Service for</Link> 
                                </h3>
                                <p className="sidebar__post-date"><span className="icon-calendar"></span>March 23, 2024 </p>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__post-image">
                                <img src={bloglp2} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <Link to={"/blog-details"}>The Benefits of Hiring a Professional Cleaning Service: Is It Worth It?</Link> 
                                </h3>
                                <p className="sidebar__post-date"><span className="icon-calendar"></span>APRIL
                                    23, 2024
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="sidebar__post-image">
                                <img src={bloglp3} alt="" />
                            </div>
                            <div className="sidebar__post-content">
                                <h3>
                                    <Link to={"/blog-details"}>Maintain a Clean Home Between Professional Cleaning Visits</Link> 
                                </h3>
                                <p className="sidebar__post-date"><span className="icon-calendar"></span>JUNE
                                    23, 2024
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar__single sidebar__tags">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-shape"></div>
                        <div className="sidebar__title-shape-2"></div>
                        <h3 className="sidebar__title">Keywords</h3>
                    </div>
                    <div className="sidebar__tags-list">
                        <a href="#">Sanitization</a>
                        <a href="#">Eco-friendly</a>
                        <a href="#">DeepClean</a>
                        <a href="#">Maintenance</a>
                        <a href="#">Innovation</a>
                        <a href="#">Commercial </a>
                        <a href="#">Organizing</a>
                    </div>
                </div>
                <div className="sidebar__single sidebar__subscribe">
                    <div className="sidebar__title-box">
                        <div className="sidebar__title-shape"></div>
                        <div className="sidebar__title-shape-2"></div>
                        <h3 className="sidebar__title">Subscribe</h3>
                    </div>
                    <p className="sidebar__subscribe-text">Subscribe to our newsletter to get daily updates
                        about our blogs.</p>
                    <form onSubmit={handleSubscribe} className="sidebar__newsletter-form">
                        <div className="sidebar__newsletter-form-input-box">
                            <div className="sidebar__newsletter-form-input-icon">
                                <span className="icon-envelope"></span>
                            </div>
                            <input type="search" name='subscribe' placeholder="Enter Your Email" />
                        </div>
                        <button type="submit" className="thm-btn">Subscribe<span><i
                            className="icon-send"></i></span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsRight;