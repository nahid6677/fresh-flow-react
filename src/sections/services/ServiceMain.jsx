import servimg1 from "../../assets/images/shapes/services-two-shape-1.png"
import servimg2 from "../../assets/images/shapes/services-two-shape-2.png"
import servimg3 from "../../assets/images/services/services-2-1.jpg"
import servimg4 from "../../assets/images/services/services-2-2.jpg"
import servimg5 from "../../assets/images/services/services-2-3.jpg"
import servimg6 from "../../assets/images/services/services-2-4.jpg"
import servimg7 from "../../assets/images/services/services-2-5.jpg"
import servimg8 from "../../assets/images/shapes/why-choose-three-shape-1.png"
import servimg9 from "../../assets/images/shapes/why-choose-three-shape-2.png"


import { Link } from "react-router-dom";
import { useRef, useState } from "react"
import FreshFlowMarquee from "../../components/common/FreshFlowMarquee"
import PricingMain from "../pricing/PricingMain"

import pricContent1 from "../../assets/images/shapes/pricing-two-shape-1.png"

import faqimg1 from "../../assets/images/shapes/faq-one-shape-1.png"
import faqimg2 from "../../assets/images/resources/faq-one-contact-img.png"
import AccorditionItemFaq from "../../components/accordion/AccorditionItemFaq"
const pricingContent = [
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `Standard`,
        price: `520.00`,
        validity: `/Monthly`,
        pricingText1: `Achieve a Pristine Office`,
        pricingText2: `Environment in Just 4 Hours!`,
        text1: `Eco-Friendly Cleaning Products`,
        text2: `Flexible Scheduling`,
        text3: `Highly Trained Professionals`,
        text4: `Customized Cleaning Plans`,
        text5: `Flexible Scheduling`,
    },
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `PREMIMUM`,
        price: `340.00`,
        validity: `/Yearly`,
        pricingText1: `Transform Your Home Into a Fresh`,
        pricingText2: `Haven in Just 2 Hours!`,
        text1: `Affordable Service Packages`,
        text2: `Affordable Service Packages`,
        text3: `Satisfaction Guaranteed Results`,
        text4: `Quick Response Team`,
        text5: `Trusted Local Professionals`,
    },
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `BUSINESS`,
        price: `250.00`,
        validity: `Weekly`,
        pricingText1: `Get Spotless Interiors and a Perfect`,
        pricingText2: `Shine in Only 3 Hours!`,
        text1: `Non-Toxic Cleaning Supplies`,
        text2: `Experienced Cleaning Experts`,
        text3: `Experienced Cleaning Experts`,
        text4: `24/7 Customer Support`,
        text5: `Flexible Scheduling`,
    },
]
const pricingContent2 = [
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `PREMIMUM`,
        price: `440.00`,
        validity: `/Yearly`,
        pricingText1: `Transform Your Home Into a Fresh`,
        pricingText2: `Haven in Just 2 Hours!`,
        text1: `Affordable Service Packages`,
        text2: `Affordable Service Packages`,
        text3: `Satisfaction Guaranteed Results`,
        text4: `Quick Response Team`,
        text5: `Trusted Local Professionals`,
    },
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `BUSINESS`,
        price: `650.00`,
        validity: `Weekly`,
        pricingText1: `Get Spotless Interiors and a Perfect`,
        pricingText2: `Shine in Only 3 Hours!`,
        text1: `Non-Toxic Cleaning Supplies`,
        text2: `Experienced Cleaning Experts`,
        text3: `Experienced Cleaning Experts`,
        text4: `24/7 Customer Support`,
        text5: `Flexible Scheduling`,
    },
]
const ServiceMain = () => {

    const containerRef = useRef(null);
    const [xPosition, setXPosition] = useState(0);
    const [mouseEnter, setMouseEnter] = useState(0)
    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setXPosition(x);
        }
    };
    const hoverItems = [
        {
            title: `Sparkling Home Solutions`,
            text1: `Expert cleaning services to keep your home fresh,`,
            text2: `tidy, and sparkling clean.`,
            image: servimg3,
            itemLink: `/office-cleaning`,
            id: 1
        },
        {
            title: `Pristine Office Cleaning`,
            text1: `Professional cleaning tailored for offices to maintain`,
            text2: `a clean and productive workspace.`,
            image: servimg4,
            itemLink: `/commercial-cleaning`,
            id: 2
        },
        {
            title: `Deep Clean Experts`,
            text1: `Specialized deep cleaning for homes or businesses,`,
            text2: `tackling dirt in hard-to-reach places.`,
            image: servimg5,
            itemLink: `/deep-cleaning`,
            id: 3
        },
        {
            title: `Hygiene Space Services`,
            text1: `Comprehensive cleaning solutions to ensure`,
            text2: `sanitized and spotless environments.`,
            image: servimg6,
            itemLink: `/sanitizing-mopping`,
            id: 4
        },
        {
            title: `Eco-Friendly Cleaning`,
            text1: `Sustainable cleaning services using green`,
            text2: `products for a healthier home and planet.`,
            image: servimg7,
            itemLink: `/residential-cleaning`,
            id: 5
        },
    ]
    const sliding = [
        {
            text: 'Sanitizing'
        },
        {
            text: 'Mopping'
        },
        {
            text: 'Dusting'
        },
        {
            text: 'Vacuuming'
        },
        {
            text: 'Polishing'
        },
    ]

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
            <section className="services-two services-page">
                <div className="services-two__shape-bg-1" ></div>
                <div className="services-two__shape-bg-2" ></div>
                <div className="services-two__shape-bg-3" ></div>
                <div className="services-two__shape-1 float-bob-x">
                    <img src={servimg1} alt="" />
                </div>
                <div className="services-two__shape-2 float-bob-y">
                    <img src={servimg2} alt="" />
                </div>
                <div className="services-two__shape-3"></div>
                <div className="services-two__shape-4"></div>
                <div className="services-two__shape-5"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">Our Services</span>
                        </div>
                        <h2 className="section-title__title title-animation">
                            Explore the Full Range of
                            <span>Services We</span>
                            <br />
                            <span>Offer to Meet Your Needs</span>
                        </h2>
                    </div>
                    <div className="services-two__inner">
                        <ul className="services-two__services-list list-unstyled">
                            {
                                hoverItems.map((item, i) => {
                                    return (
                                        <li key={i}
                                            ref={containerRef}
                                            onMouseMove={handleMouseMove}
                                            onMouseEnter={() => setMouseEnter(item?.id)}
                                            onMouseLeave={() => setMouseEnter(0)}
                                            className="hover-item" style={{ position: 'relative' }} >
                                            <div className="services-two__icon-and-title-box">
                                                <div className="services-two__icon">
                                                    <span className="icon-oosouji"></span>
                                                </div>
                                                <div className="services-two__title-box">
                                                    <div className="services-two__count"></div>
                                                    <h3 className="services-two__title">
                                                        <Link to={item?.itemLink}>{item?.title}</Link>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="services-two__text-and-btn-box">
                                                <p className="services-two__text">
                                                    {item?.text1}
                                                    <br />
                                                    {item?.text2}
                                                </p>
                                                <div className="services-two__btn-box">
                                                    <Link to={item?.itemLink}>
                                                        View Details
                                                        <span className="icon-diagonal-arrow"></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="hover-item__box" style={{ opacity: `${mouseEnter === item?.id ? '1' : '0'}`, left: `${xPosition + 307}px`, }}>
                                                <img src={item?.image} className="hover-item__box-img" alt="Image" />
                                            </div>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </section>
            <section className="sliding-text-three">
                <div className="sliding-text-three__wrap">
                    <ul className="sliding-text-three__list list-unstyled marquee_mode">
                        <FreshFlowMarquee
                            speed={200}
                            gap={0}
                            hoverColor={'black'}
                            pauseOnHover={true}
                            direction='left'
                        >
                            {
                                [
                                    ...sliding,
                                    ...sliding,
                                    ...sliding,
                                    ...sliding,
                                    ...sliding,
                                    ...sliding,
                                    ...sliding,
                                    ...sliding,
                                ].map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <h2 className="sliding-text-three__title">
                                                {item?.text}
                                                <span className="icon-star-2"></span>
                                            </h2>
                                        </li>
                                    )
                                })
                            }
                        </FreshFlowMarquee>
                    </ul>
                </div>
            </section>
            <section className="why-choose-three">
                <div className="why-choose-three__shape-bg-1" ></div>
                <div className="why-choose-three__shape-1">
                    <img src={servimg8} alt="" />
                </div>
                <div className="why-choose-three__shape-2">
                    <img src={servimg9} alt="" />
                </div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">WHY CHOOSE US</span>
                        </div>
                        <h2 className="section-title__title title-animation">Our Seamless Cleaning Process
                            <br /><span>From Start to Sparkle Service</span>
                        </h2>
                    </div>
                    <div className="why-choose-three__inner">
                        <ul className="row list-unstyled">
                            {/*Why Choose Three Single Start*/}
                            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms"
                                data-wow-duration="1500ms">
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__icon">
                                        <span className="icon-time"></span>
                                        <div className="why-choose-three__count"></div>
                                    </div>
                                    <h3 className="why-choose-three__title">
                                        <Link to={"/about"}>
                                            Booking Made Easy in
                                            <br />
                                            Minutes
                                        </Link>

                                    </h3>
                                    <p className="why-choose-three__text">Enjoy a hassle-free booking process with our
                                        user-friendly platform, and conveniently.</p>
                                </div>
                            </li>
                            {/*Why Choose Three Single End*/}
                            {/*Why Choose Three Single Start*/}
                            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__icon">
                                        <span className="icon-cleaning-2"></span>
                                        <div className="why-choose-three__count"></div>
                                    </div>
                                    <h3 className="why-choose-three__title">
                                        <Link to={"/about"}>
                                            Thorough Cleaning Tailored
                                            <br />
                                            for You
                                        </Link>
                                    </h3>
                                    <p className="why-choose-three__text">We provide customized cleaning solutions that address
                                        your unique needs, ensuring every</p>
                                </div>
                            </li>
                            {/*Why Choose Three Single End*/}
                            {/*Why Choose Three Single Start*/}
                            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms"
                                data-wow-duration="1500ms">
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__icon">
                                        <span className="icon-window-cleaning"></span>
                                        <div className="why-choose-three__count"></div>
                                    </div>
                                    <h3 className="why-choose-three__title">
                                        <Link to={"/about"}>
                                            Inspection & Satisfaction
                                            <br />
                                            Guaranteed
                                        </Link>
                                    </h3>
                                    <p className="why-choose-three__text">We ensure top-notch quality with detailed inspections
                                        and a commitment to your satisfaction</p>
                                </div>
                            </li>
                            {/*Why Choose Three Single End*/}
                            {/*Why Choose Three Single Start*/}
                            <li className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms"
                                data-wow-duration="1500ms">
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__icon">
                                        <span className="icon-employee"></span>
                                        <div className="why-choose-three__count"></div>
                                    </div>
                                    <h3 className="why-choose-three__title">
                                        <Link to={"/about"}>
                                            Experienced Professionals
                                            <br />
                                            at Your Door
                                        </Link>
                                    </h3>
                                    <p className="why-choose-three__text">Enjoy a hassle-free booking process with our
                                        user-friendly platform, and conveniently.</p>
                                </div>
                            </li>
                            {/*Why Choose Three Single End*/}
                        </ul>
                    </div>
                </div>
            </section>
            <PricingMain sectionStyle={"pricing-two"} pricingContentOne={pricingContent} pricingContentTow={pricingContent2} />

            <section className="faq-one">
                <div className="faq-one__shape-1 float-bob-y">
                    <img src={faqimg1} alt="" />
                </div>
                <div className="faq-one__shape-bg-1" ></div>
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

export default ServiceMain;