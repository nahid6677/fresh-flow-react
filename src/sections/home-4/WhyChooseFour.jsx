
import abimg8 from "../../assets/images/resources/why-choose-four-img-1.jpg"
import abimg9 from "../../assets/images/resources/why-choose-four-img-2.jpg"
import abimg10 from "../../assets/images/resources/why-choose-four-client-img-1.jpg"
import abimg11 from "../../assets/images/resources/why-choose-four-client-img-2.jpg"
import abimg12 from "../../assets/images/resources/why-choose-four-client-img-3.jpg"
import abimg13 from "../../assets/images/icon/why-choose-four-client-contact-icon.png"
import abimg14 from "../../assets/images/icon/why-choose-four-award-icon.png"
import { useInView } from 'react-intersection-observer';
import AdvanceCountUp from '../../components/common/AdvanceCountUp'
const WhyChooseFour = () => {
    const [animationRef2, animationInView2] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    return (
        <section className="why-choose-four">
            <div className="why-choose-four__bg"  ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="why-choose-four__left">
                            <div className="why-choose-four__img-box">
                                <div className="why-choose-four__img">
                                    <img src={abimg8} alt="" />
                                </div>
                                <div className="why-choose-four__img why-choose-four__img--two">
                                    <img src={abimg9} alt="" />
                                </div>
                                <div className="why-choose-four__client-info-box">
                                    <div className="why-choose-four__client-ratting-box">
                                        <h3 className="why-choose-four__client-title">Clut<span>c</span>h</h3>
                                        <div className="why-choose-four__ratting-box">
                                            <div className="why-choose-four__ratting">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                            </div>
                                            <p className="why-choose-four__ratting-text">4.5 Rating</p>
                                        </div>
                                    </div>
                                    <div className="why-choose-four__client-img-and-count">
                                        <ul className="why-choose-four__client-img-list list-unstyled">
                                            <li>
                                                <div className="why-choose-four__client-img">
                                                    <img src={abimg10} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="why-choose-four__client-img">
                                                    <img src={abimg11} alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="why-choose-four__client-img">
                                                    <img src={abimg12} alt="" />
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="why-choose-four__count-box-inner">
                                            <div className="why-choose-four__count-box">
                                                <p className="odometer" >{animationInView2 && <AdvanceCountUp ending={200} />}</p>
                                                <span>k</span>
                                                <span>+</span>
                                            </div>
                                            <p className="why-choose-four__count-text">Happy Clients</p>
                                        </div>
                                    </div>
                                    <div className="why-choose-four__client-contact">
                                        <div className="why-choose-four__client-contact-icon">
                                            <img src={abimg13}
                                                alt="" />
                                        </div>
                                        <div className="why-choose-four__client-contact-content">
                                            <p>10:00 AM - 8:00 PM</p>
                                            <h4><a href="tel:120045678910">12 (00) 456 78910</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="why-choose-four__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-box">
                                        <div className="section-title__tagline-shape"></div>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <span className="section-title__tagline">Why Choose US</span>
                                </div>
                                <h2 className="section-title__title title-animation">Why Choose Us? Pristine Spaces,
                                    Unmatched Dedication!
                                </h2>
                            </div>
                            <p className="why-choose-four__text">With a passion for cleanliness and a commitment to
                                excellence, we deliver pristine spaces and reliable service that you can count on.</p>
                            <div className="why-choose-four__award-box">
                                <div className="why-choose-four__award-icon">
                                    <img src={abimg14} alt="" />
                                </div>
                                <div className=" why-choose-four__award-content">
                                    <h3 ref={animationRef2}>
                                        <span className="odometer">{animationInView2 && <AdvanceCountUp ending={25} />}</span><span>+</span> Awards Wining
                                    </h3>
                                    <p className="why-choose-four__award-text">Recognized with Multiple Award-Winning<br />
                                        Achievements!</p>
                                </div>
                            </div>
                            <div className="why-choose-four__points-box">
                                <ul className="why-choose-four__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Eco-Friendly Cleaning Solutions</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Custom Plans for Every Space</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Ensure customer satisfaction</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Reliable Service, On-Time Always</p>
                                    </li>
                                </ul>
                                <ul className="why-choose-four__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Eco-Friendly Cleaning Solutions</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Custom Plans for Every Space</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Ensure customer satisfaction</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <p>Reliable Service, On-Time Always</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFour;