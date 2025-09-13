import newsimg1 from "../../assets/images/shapes/newsletter-one-shape-1.png"
import newsimg2 from "../../assets/images/shapes/newsletter-one-shape-2.png"
import newsimg3 from "../../assets/images/resources/newsletter-one-img-1-1.jpg"
import newsimg4 from "../../assets/images/resources/newsletter-one-img-1-2.jpg"
import newsimg5 from "../../assets/images/resources/newsletter-one-img-1-3.jpg"
import { Link } from 'react-router-dom';

const NewsLetterOne = ({ img1 = newsimg3, img2 = newsimg4, img3 = newsimg5, bgPattren = false }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // const email = e.target.email.value;
        // console.log(email)
    }
    return (
        <section className="newsletter-one">
            {bgPattren && <div className="bg-pattern-home-4"></div>}
            <div className="container">
                <div className="newsletter-one__inner">
                    <div className="newsletter-one__shape-bg"
                    ></div>
                    <div className="newsletter-one__shape-1 float-bob-x">
                        <img src={newsimg1} alt="" />
                    </div>
                    <div className="newsletter-one__shape-2 float-bob-y">
                        <img src={newsimg2} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="newsletter-one__title-box">
                                <h2 className="newsletter-one__title">Subscribe</h2>
                                <p className="newsletter-one__sub-title">Newsletter</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="newsletter-one__img-boxes">
                                <div className="newsletter-one__img-shape">
                                    <div className="newsletter-one__img-box-1">
                                        <div className="newsletter-one__img-1">
                                            <img src={img1} alt="" />
                                        </div>
                                    </div>
                                    <div className="newsletter-one__img-box-2">
                                        <div className="newsletter-one__img-2">
                                            <img src={img2} alt="" />
                                        </div>
                                    </div>
                                    <div className="newsletter-one__img-box-3">
                                        <div className="newsletter-one__img-3">
                                            <img src={img3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="newsletter-one__form-box">
                                <form onSubmit={handleSubmit} className="newsletter-one__form">
                                    <div className="newsletter-one__input">
                                        <input name="email" type="email" placeholder="Email Address" />
                                    </div>
                                    <button type="submit" className="newsletter-one__btn">
                                        Subscribe Now <span className="icon-send"></span></button>
                                </form>
                                <p className="newsletter-one__form-text">
                                    By Subscribing you agree to the
                                    <Link to={"/about"}>Terms of use</Link>
                                    &
                                    <Link to={"/about"}>Privacy Policy</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter-one__big-text">NEWSLETTER</div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterOne;