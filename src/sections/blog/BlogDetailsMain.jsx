import React from 'react';
// Import all images
import blogDetailsImg1 from '../../assets/images/blog/blog-details-img-1.jpg';
import blogDetailsMetaClientImg1 from '../../assets/images/blog/blog-details-meta-client-img-1.jpg';
import blogDetailsImgBoxImg1 from '../../assets/images/blog/blog-details-img-box-img-1.jpg';
import blogDetailsImgBoxImg2 from '../../assets/images/blog/blog-details-img-box-img-2.jpg';
import blogDetailsQuoteClientImg1 from '../../assets/images/blog/blog-details-quote-client-img-1.jpg';
import blogDetailsPointsImg1 from '../../assets/images/blog/blog-details-points-img-1.jpg';
import blogDetailsPrevImg from '../../assets/images/blog/blog-details-prev-img.jpg';
import blogDetailsNextImg from '../../assets/images/blog/blog-details-next-img.jpg';
import comment1_1 from '../../assets/images/blog/comment-1-1.jpg';
import comment1_2 from '../../assets/images/blog/comment-1-2.jpg';
import comment1_3 from '../../assets/images/blog/comment-1-3.jpg';
import comment1_4 from '../../assets/images/blog/comment-1-4.jpg';
import BlogDetailsRight from './BlogDetailsRight';
const BlogDetailsMain = () => {
    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const andric = form.andric.value;
        const message = form.message.value;
        const userInfo = { name, andric, email, message }
        console.log(userInfo)

    }
    return (
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src={blogDetailsImg1} alt="" />
                            </div>
                            <div className="blog-details__content">
                                <h3 className="blog-details__title">10 Simple Cleaning Hacks for a Spotless Home</h3>
                                <ul className="blog-details__meta-list list-unstyled">
                                    <li>
                                        <div className="blog-details__meta-img">
                                            <img src={blogDetailsMetaClientImg1} alt="" />
                                        </div>
                                        <div className="content">
                                            <span>Post By</span>
                                            <h5>Thomas Alison</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-bubble-chat"></span>
                                        </div>
                                        <div className="content">
                                            <span>Comments</span>
                                            <h5>30 Comments</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-calendar"></span>
                                        </div>
                                        <div className="content">
                                            <span>Saturday</span>
                                            <h5>March 8, 2024</h5>
                                        </div>
                                    </li>
                                </ul>
                                <p className="blog-details__text-1">Unlock the secrets to a successful web design project
                                    with our comprehensive step-by-step guide. Whether you're a seasoned designer or
                                    just starting out, this guide will walk you through every phase of the web design
                                    process, from initial planning</p>
                                <p className="blog-details__text-2">With practical tips, real-world examples, and expert
                                    advice, you'll be equipped to tackle any web design challenge and deliver stunning,
                                    user-friendly websites </p>
                                <h4 className="blog-details__title-2">Expertise and Experience</h4>
                                <p className="blog-details__text-3">Professional cleaners are trained to handle various
                                    cleaning tasks efficiently. They know the best techniques and products to use for
                                    every surface, ensuring a spotless finish.</p>
                                <p className="blog-details__text-4">Cleaning can be time-consuming, especially for
                                    deep-cleaning tasks. Hiring professionals allows you to focus on other priorities,
                                    such as work, family, or leisure activities.</p>
                                <div className="blog-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-details__img-box-img-1">
                                                <img src={blogDetailsImgBoxImg1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-details__img-box-img-1">
                                                <img src={blogDetailsImgBoxImg2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="blog-details__title-3">Customized Cleaning Plans</h4>
                                <ul className="blog-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon"></div>
                                        <p>Knowing that your space is clean and organized gives you peace of mind. You
                                            don't have to worry about unexpected guests or finding time to clean after a
                                            long day.</p>
                                    </li>
                                    <li>
                                        <div className="icon"></div>
                                        <p>Cleaning companies invest in commercial-grade tools and eco-friendly cleaning
                                            products. These are often more effective than over-the-counter options,
                                            leaving your space sparkling clean.</p>
                                    </li>
                                    <li>
                                        <div className="icon"></div>
                                        <p>A clean workspace enhances focus and productivity. For businesses, this can
                                            lead to better employee morale and fewer sick days.</p>
                                    </li>
                                </ul>
                                <h4 className="blog-details__title-4">Why Professional Cleaning Matters</h4>
                                <p className="blog-details__text-5">With expertise, advanced tools, and tailored services,
                                    professionals ensure consistent, high-quality cleaning that leaves your home or
                                    workplace spotless and inviting. Prioritize your well-being and productivity by
                                    entrusting your cleaning needs to the experts!</p>
                                <div className="blog-details__quote-box">
                                    <div className="blog-details__quote-icon">
                                        <span className="icon-left"></span>
                                    </div>
                                    <div className="blog-details__quote-text-box">
                                        <p className="blog-details__quote-text">"A clean space isn't just about
                                            appearances—it's about creating a healthier, happier, and more productive
                                            environment."</p>
                                        <div className="blog-details__quote-client-box">
                                            <div className="blog-details__quote-client-img">
                                                <img src={blogDetailsQuoteClientImg1} alt="" />
                                            </div>
                                            <div className="blog-details__quote-client-content">
                                                <span>ATHOR BY</span>
                                                <p>Thomas Alison</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="blog-details__title-5">Consistency and Reliability</h4>
                                <p className="blog-details__text-6">With a professional cleaning service, you can expect
                                    consistent results. They follow a routine, ensuring no area is overlooked.</p>
                                <div className="blog-details__img-and-points">
                                    <div className="blog-details__points-img">
                                        <img src={blogDetailsPointsImg1} alt="" />
                                    </div>
                                    <ul className="blog-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-1"></span>
                                            </div>
                                            <p>A Touch of Professionalism</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-1"></span>
                                            </div>
                                            <p>Consistency and Reliability</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-1"></span>
                                            </div>
                                            <p>Cost-Effective in the Long Run</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-1"></span>
                                            </div>
                                            <p>Improved Productivity</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-1"></span>
                                            </div>
                                            <p>Access to Advanced Tools </p>
                                        </li>
                                    </ul>
                                </div>
                                <p className="blog-details__text-7">Cleaning of factories, warehouses, office buildings, or
                                    other commercial spaces, often involving deep cleaning of machinery, equipment, and
                                    large spaces. Requires adherence to stringent hygiene standards, including cleaning
                                    in hospitals, clinics</p>
                                <div className="blog-details__tag-and-social">
                                    <div className="blog-details__tag">
                                        <p>Tags:</p>
                                        <div className="blog-details__tag-list">
                                            <a href="#">Marketing</a>
                                            <span>//</span>
                                            <a href="#">Branding</a>
                                            <span>//</span>
                                            <a href="#">SEO</a>
                                        </div>
                                    </div>
                                    <div className="blog-details__social">
                                        <p>Share:</p>
                                        <div className="blog-details__social-list">
                                            <a href="#"><span className="icon-pinterest"></span></a>
                                            <a href="#"><span className="icon-linkedin-big-logo"></span></a>
                                            <a href="#"><span className="icon-instagram"></span></a>
                                            <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details__prev-next">
                                    <div className="blog-details__prev">
                                        <div className="blog-details__prev-img">
                                            <img src={blogDetailsPrevImg} alt="" />
                                        </div>
                                        <div className="content">
                                            <p><a href="#">PREV PROJECT</a></p>
                                            <h5>Sparkle & Shine Services</h5>
                                        </div>
                                    </div>
                                    <div className="blog-details__next">
                                        <div className="content">
                                            <p><a href="#">NEXT PROJECT</a></p>
                                            <h5>Retail store cleaning</h5>
                                        </div>
                                        <div className="blog-details__next-img">
                                            <img src={blogDetailsNextImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one">
                                    <div className="section-title text-left sec-title-animation animation-style2">
                                        <div className="section-title__tagline-box">
                                            <div className="section-title__tagline-shape-box">
                                                <div className="section-title__tagline-shape"></div>
                                                <div className="section-title__tagline-shape-2"></div>
                                            </div>
                                            <span className="section-title__tagline">BLOG COMMENTS</span>
                                        </div>
                                        <h2 className="section-title__title title-animation">Total 120 Comments</h2>
                                    </div>
                                    <ul className="comment-one__single-list list-unstyled">
                                        <li>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image-and-name">
                                                    <div className="comment-one__image-box">
                                                        <div className="comment-one__image">
                                                            <img src={comment1_1} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="comment-one__name-and-btn">
                                                        <h3>John Smith<span
                                                            className="icon-right-arrow arrow-icon-box"></span>
                                                            <span className="date-box"> September 19, 2024</span>
                                                        </h3>
                                                        <div className="comment-one__btn">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className=" comment-one__single-text">This guide was incredibly helpful!
                                                    I
                                                    never knew there were so many
                                                    factors to consider when choosing a cleaning service.
                                                    Definitely
                                                    bookmarking this for future reference!</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image-and-name">
                                                    <div className="comment-one__image-box">
                                                        <div className="comment-one__image">
                                                            <img src={comment1_2} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="comment-one__name-and-btn">
                                                        <h3>Linda Harrison<span
                                                            className="icon-right-arrow arrow-icon-box"></span>
                                                            <span className="date-box"> August 19, 2024</span>
                                                        </h3>
                                                        <div className="comment-one__btn">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className=" comment-one__single-text">I love the eco-friendly cleaning
                                                    tips! I've been looking for more sustainable ways to clean, and this
                                                    post has given me some great ideas. Thank you!</p>
                                            </div>
                                            <ul
                                                className="comment-one__single-list comment-one__single-list-2 list-unstyled">
                                                <li>
                                                    <div className="comment-one__single">
                                                        <div className="comment-one__image-and-name">
                                                            <div className="comment-one__image-box">
                                                                <div className="comment-one__image">
                                                                    <img src={comment1_3} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="comment-one__name-and-btn">
                                                                <h3>Mark Collins<span
                                                                    className="icon-right-arrow arrow-icon-box"></span>
                                                                    <span className="date-box">August 19, 2024</span>
                                                                </h3>
                                                                <div className="comment-one__btn">
                                                                    <a href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className=" comment-one__single-text">I love the eco-friendly
                                                            cleaning tips! I've been looking for more sustainable ways
                                                            to clean, and this post has given me some great ideas. Thank
                                                            you!</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment-one__single">
                                                <div className="comment-one__image-and-name">
                                                    <div className="comment-one__image-box">
                                                        <div className="comment-one__image">
                                                            <img src={comment1_4} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="comment-one__name-and-btn">
                                                        <h3>Jessica Turner<span
                                                            className="icon-right-arrow arrow-icon-box"></span>
                                                            <span className="date-box"> March 19, 2024</span>
                                                        </h3>
                                                        <div className="comment-one__btn">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className=" comment-one__single-text">Great article on office cleaning!
                                                    Our office has been struggling with keeping things tidy, and these
                                                    professional tips are just what we needed. Keep up the good work!
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-form">
                                    <p className="comment-form__sub-title">Comments Form</p>
                                    <h3 className="comment-form__title">Put Your Comments</h3>
                                    <form onSubmit={handleComment} className="contact-form-validated comment-form__form" >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <h4 className="comment-form__input-title">Frist Name</h4>
                                                <div className="comment-form__input-box">
                                                    <input type="text" name="name" placeholder="Jordan" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <h4 className="comment-form__input-title">Last Name</h4>
                                                <div className="comment-form__input-box">
                                                    <input type="text" name="andric" placeholder="Andric" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <h4 className="comment-form__input-title">Enter Your Email</h4>
                                                <div className="comment-form__input-box">
                                                    <input type="email" name="email" placeholder="jordan@example.com" required />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <h4 className="comment-form__input-title">Write Comments</h4>
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Write something here..."></textarea>
                                                </div>
                                                <div className="comment-form__btn-box">
                                                    <button type="submit" className="thm-btn">Send Message<span><i
                                                        className="icon-diagonal-arrow"></i></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>
                                </div>
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

export default BlogDetailsMain;