import { Link, useLocation } from 'react-router-dom';

import servicesDetailsPointsImg from '../../assets/images/services/services-details-points-img.jpg';
import servicesDetailsBottomImg from '../../assets/images/services/services-details-bottom-img.jpg';
import servicesDetailsImgBox1 from '../../assets/images/services/services-details-img-box-img-1.jpg';
import servicesDetailsImgBox2 from '../../assets/images/services/services-details-img-box-img-2.jpg';
import servicesDetailsImg2 from '../../assets/images/services/services-details-img-4.jpg';
import ServiceDetailsRight from './ServiceDetailsRight';
import { useState } from 'react';

//Faq
import faqimg1 from "../../assets/images/shapes/faq-one-shape-1.png"
import faqimg2 from "../../assets/images/resources/faq-one-contact-img.png"
import AccorditionItemFaq from '../../components/accordion/AccorditionItemFaq';

const CommercialMain = () => {
    const location = useLocation()

    // Faq 
    const [activeAcc, setActiveAcc] = useState(2);
    const handleToggle = (index) => {
        if (activeAcc === index) {
            setActiveAcc(null);
        } else {
            setActiveAcc(index);
        }
    };
    const accordionItems1 = [
        {
            title: `What types of cleaning services do you offer?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
                for your family, pets, and the environment. You can schedule a cleaning
                by calling us, booking online, or using our mobile app for flexible and
                convenient scheduling.`,
            id: 1
        },
        {
            title: `Are your cleaning products eco-friendly?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
                for your family, pets, and the environment. You can schedule a cleaning
                by calling us, booking online, or using our mobile app for flexible and
                convenient scheduling.`,
            id: 2
        },
        {
            title: `Do I need to be home during the cleaning service?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
                for your family, pets, and the environment. You can schedule a cleaning
                by calling us, booking online, or using our mobile app for flexible and
                convenient scheduling`,
            id: 3
        },
        {
            title: `What if I’m not satisfied with the cleaning service?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
                for your family, pets, and the environment. You can schedule a cleaning
                by calling us, booking online, or using our mobile app for flexible and
                convenient scheduling.`,
            id: 4
        },
    ]
    return (
        <>
            <section className="services-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="services-details__left">
                                <h3 className="services-details__title-1">Enjoy a spotless home without lifting a finger. Our
                                    residential cleaning services include</h3>
                                <p className="services-details__text-1">Comprehensive cleaning services tailored to your needs,
                                    including residential, commercial, deep cleaning, move-in/move-out, and specialty
                                    solutions. Our professional team ensures spotless results with eco-friendly products and
                                    flexible scheduling—guaranteeing your satisfaction every step of the way!</p>
                                <div className="services-details__img-box">
                                    <div className="services-details__img">
                                        <img src={servicesDetailsImg2} alt="Residential cleaning service" />
                                    </div>
                                </div>
                                <h3 className="services-details__title-2">Services Core Features</h3>
                                <p className="services-details__text-2">"Professional cleaning services for homes, offices, and
                                    special occasions, including deep cleaning, move-in/move-out, and post-construction
                                    care. With flexible scheduling, eco-friendly products, and attention to detail, we
                                    ensure your space shines effortlessly!</p>
                                <div className="services-details__points-box">
                                    <ul className="services-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Dusting and vacuuming</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Mopping and sweeping floors</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Commercial Cleaning</p>
                                        </li>
                                    </ul>
                                    <ul className="services-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Sanitizing kitchens and bathrooms</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Organizing living spaces</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-star-1"></span>
                                            </div>
                                            <p>Window cleaning</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-details__service-single-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="services-details__services-single">
                                                <div className="services-details__services-icon">
                                                    <span className="icon-cleaning-1"></span>
                                                </div>
                                                <h3 className="services-details__services-title">Commercial Cleaning</h3>
                                                <p className="services-details__services-text">Create a clean and productive
                                                    work<br /> environment with our commercial <br />cleaning solutions.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="services-details__services-single">
                                                <div className="services-details__services-icon">
                                                    <span className="icon-sanitary"></span>
                                                </div>
                                                <h3 className="services-details__services-title">Deep Cleaning</h3>
                                                <p className="services-details__services-text">Perfect for seasonal refreshes or
                                                    when<br /> your space needs extra attention. Grout<br /> and tile cleaning
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="services-details__title-3">Specialty Cleaning summry</h3>
                                <p className="services-details__text-3">Specialty cleaning refers to cleaning services or
                                    techniques tailored to address specific, often unique, cleaning needs. This type of
                                    cleaning is often used for environments, materials, or situations that require
                                    specialized expertise, tools, or products. Here are some common categories</p>
                                <div className="services-details__img-box-2">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-6">
                                            <div className="services-details__img-box-img-1">
                                                <img src={servicesDetailsImgBox1} alt="Specialty cleaning service 1" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                            <div className="services-details__img-box-img-1">
                                                <img src={servicesDetailsImgBox2} alt="Specialty cleaning service 2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="services-details__title-4">Why Choose Our Services?</h3>
                                <p className="services-details__text-4">Choose us for experienced, professional cleaners,
                                    flexible scheduling, eco-friendly products, and a 100% satisfaction guarantee.</p>
                                <p className="services-details__text-5">We deliver top-quality cleaning that leaves your space
                                    spotless and refreshed! We deliver top-quality cleaning that leaves your space spotless
                                    and refreshed!</p>
                                <div className="services-details__points-and-img-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="services-details__points-3">
                                                <ul className="services-details__points-list-3 list-unstyled">
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                        <p>Experienced and professional staff</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                        <p>Flexible scheduling to fit your needs</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                        <p>Eco-friendly products for a healthier environment</p>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-star-1"></span>
                                                        </div>
                                                        <p>100% satisfaction guarantee</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="services-details__points-img">
                                                <img src={servicesDetailsPointsImg} alt="Professional cleaning team" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="services-details__text-6">We deliver top-quality cleaning that leaves your space
                                    spotless and refreshed! We deliver top-quality cleaning that leaves your space spotless
                                    and refreshed!</p>
                                <h3 className="services-details__title-5">Industrial and Commercial Cleaning.</h3>
                                <p className="services-details__text-7">Carpet and Upholstery Cleaning: Specialized methods for
                                    cleaning delicate fabrics and carpets using techniques like steam cleaning, dry
                                    cleaning, or deep cleaning to remove dirt, stains, and allergens. Cleaning after
                                    building or renovation work, including removing dust, debris, and leftover materials to
                                    make spaces ready for use.</p>
                                <div className="services-details__bottom-img">
                                    <img src={servicesDetailsBottomImg} alt="Industrial and commercial cleaning" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <ServiceDetailsRight pathName={location?.pathname} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-one">
                <div className="faq-one__shape-1 float-bob-y">
                    <img src={faqimg1} alt="" />
                </div>
                <div className="faq-one__shape-bg-1" style={{ display: 'none' }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-box">
                                            <div className="section-title__tagline-shape"></div>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <span className="section-title__tagline">FAQs</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">Your Questions Answered <br />
                                        <span>Explore Our FAQs</span></h2>
                                </div>
                                <p className="faq-one__text">Everything you need to know. Detailed <br /> overview of our
                                    frequently asked questions</p>
                                <ul className="list-unstyled faq-one__points">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <div className="text">
                                            <p>A Comprehensive Guide to Our Frequently Asked <br /> Questions</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-star-1"></span>
                                        </div>
                                        <div className="text">
                                            <p>Find the Information You’re Looking For</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="faq-one__contact-box">
                                    <div className="faq-one__contact-img">
                                        <img src={faqimg2} alt="" />
                                    </div>
                                    <div className="faq-one__contact-big-text">Get In Touch</div>
                                    <h3 className="faq-one__contact-title">If you have any other <br /> questions, please contact
                                        <br /> us here</h3>
                                    <div className="faq-one__btn-box">
                                        <Link to={"/contact"} className="thm-btn">
                                            Contact Us
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-one__right">
                                <div className="accrodion-grp faq-one-accrodion" >

                                    {accordionItems1.map((faq, index) => (
                                        <AccorditionItemFaq
                                            key={faq.id || index}
                                            handleToggle={handleToggle}
                                            faq={faq}
                                            activeAcc={activeAcc}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommercialMain;