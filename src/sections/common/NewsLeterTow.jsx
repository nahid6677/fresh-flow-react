import React from 'react';
import newsimg1 from '../../assets/images/resources/newsletter-two-img-1.jpg';
import { Link } from 'react-router-dom';
const NewsLeterTow = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        // console.log(Email)
    }
    return (
        <section className="newsletter-two">
            <div className="newsletter-two__big-text">NEWSLETTER</div>
            <div className="newsletter-two__img-box">
                <div className="newsletter-two__img">
                    <img src={newsimg1} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="newsletter-two__inner">
                    <div className="newsletter-two__left">
                        <div className="newsletter-two__title-box">
                            <h2 className="newsletter-two__title">Subscribe <span>Newsletter</span></h2>
                            <p className="newsletter-two__text">
                                By Subscribing you agree to the
                                <Link to={"/about"}>
                                    Terms of use
                                </Link>

                                &
                                <Link to={"/about"}>
                                    Privacy Policy
                                </Link>

                            </p>
                        </div>
                    </div>
                    <div className="newsletter-two__form-box">
                        <form onSubmit={handleSubmit} className="newsletter-two__form">
                            <div className="newsletter-two__input">
                                <input name='email' type="email" placeholder="Email Address" />
                            </div>
                            <button type="submit" className="newsletter-two__btn">
                                Subscribe Now <span className="icon-send"></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLeterTow;