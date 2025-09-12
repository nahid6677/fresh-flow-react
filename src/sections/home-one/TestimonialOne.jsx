import tesImg1 from '../../assets/images/shapes/testimonial-one-shape-1.png'
import tesImg2 from '../../assets/images/icon/quote-icon-1.png'
import tesImg3 from '../../assets/images/testimonial/testimonial-1-1.jpg'
import tesImg4 from '../../assets/images/testimonial/testimonial-1-8.jpg'
import tesImg5 from '../../assets/images/testimonial/testimonial-1-2.jpg'
import tesImg6 from '../../assets/images/testimonial/testimonial-1-7.jpg'
import tesImg7 from '../../assets/images/testimonial/testimonial-1-3.jpg'
import tesImg8 from '../../assets/images/testimonial/testimonial-1-6.jpg'
import tesImg9 from '../../assets/images/testimonial/testimonial-1-4.jpg'
import tesImg10 from '../../assets/images/testimonial/testimonial-1-5.jpg'

import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
const TestimonialOne = () => {

    
    const firstMarquee = [
        {
            icon: tesImg2,
            titleLink: 'Emily Carter',
            clientSubTitle: 'Business Owner',
            clientImg: tesImg3,
            subTitle: 'Worth every penny!',
            date: '10 Days Ago',
            text1: "Their attention to detail is unmatched. I’ve used",
            text2: "other cleaning services before, but this one stands",
            text3: "out! I recommended tehm",
        },
        {
            icon: tesImg2,
            titleLink: 'Emily Carter',
            clientSubTitle: 'Financial Analyst',
            clientImg: tesImg5,
            subTitle: 'Efficient and reliable!',
            date: '10 Days Ago',
            text1: "I appreciate their consistent quality and flexibility.",
            text2: "They make sure my home always looks its best. We",
            text3: "are hope they will best in future",
        },
        {
            icon: tesImg2,
            titleLink: 'Sarah Thompson',
            clientSubTitle: 'Marketing Manager',
            clientImg: tesImg7,
            subTitle: 'Spotless results every time!',
            date: '10 Days Ago',
            text1: "I’ve never seen my office look so clean and",
            text2: "organized. Their team is punctual, professional, and",
            text3: "meticulous. Highly recommended!",
        },
        {
            icon: tesImg2,
            titleLink: 'John Peterson',
            clientSubTitle: 'Software Developer',
            clientImg: tesImg9,
            subTitle: 'A true lifesaver!',
            date: '10 Days Ago',
            text1: "With a busy schedule, it’s tough to maintain a clean",
            text2: "home. Their services have been a game-changer for",
            text3: "me!",
        },
        {
            icon: tesImg2,
            titleLink: 'Sarah Thompson',
            clientSubTitle: 'Marketing Manager',
            clientImg: tesImg7,
            subTitle: 'Spotless results every time!',
            date: '10 Days Ago',
            text1: "I’ve never seen my office look so clean and",
            text2: "organized. Their team is punctual, professional, and",
            text3: "meticulous. Highly recommended!",
        },

    ]
    const secondMarquee = [
        {
            icon: tesImg2,
            titleLink: 'Emily Carter',
            clientSubTitle: 'Marketing Manager',
            clientImg: tesImg10,
            subTitle: 'Spotless results every time!',
            date: '10 Days Ago',
            text1: "I’ve never seen my office look so clean and",
            text2: "organized. Their team is punctual, professional, and",
            text3: "meticulous. Highly recommended!",
        },
        {
            icon: tesImg2,
            titleLink: 'Emily Carter',
            clientSubTitle: 'Business Owner',
            clientImg: tesImg8,
            subTitle: 'Worth every penny!',
            date: '10 Days Ago',
            text1: "Their attention to detail is unmatched. I’ve used",
            text2: "other cleaning services before, but this one stands",
            text3: "out! I recommended tehm",
        },
        {
            icon: tesImg2,
            titleLink: 'Michael Brown',
            clientSubTitle: 'Financial Analyst',
            clientImg: tesImg6,
            subTitle: 'Efficient and reliable!',
            date: '10 Days Ago',
            text1: "I appreciate their consistent quality and flexibility.",
            text2: "They make sure my home always looks its best. We",
            text3: "are hope they will best in future",
        },
        {
            icon: tesImg2,
            titleLink: 'John Peterson',
            clientSubTitle: 'Financial Analyst',
            clientImg: tesImg4,
            subTitle: 'Efficient and reliable!',
            date: '10 Days Ago',
            text1: "I appreciate their consistent quality and flexibility.",
            text2: "They make sure my home always looks its best. We",
            text3: "are hope they will best in future",
        },
        {
            icon: tesImg2,
            titleLink: 'Michael Brown',
            clientSubTitle: 'Financial Analyst',
            clientImg: tesImg6,
            subTitle: 'Efficient and reliable!',
            date: '10 Days Ago',
            text1: "I appreciate their consistent quality and flexibility.",
            text2: "They make sure my home always looks its best. We",
            text3: "are hope they will best in future",
        },
    ]
    return (
        <>
            <section className="testimonial-one">
                <div className="testimonial-one__shape-1">
                    <img src={tesImg1} alt="" />
                </div>
                <div className="testimonial-one__shape-2"></div>
                <div className="testimonial-one__shape-3"></div>
                <div className="testimonial-one__wrap">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">OUR TESTIMONIAL</span>
                        </div>
                        <h2 className="section-title__title title-animation">Clients Have to Say <span>About
                            Their</span><br /><span>Experience with Us!</span>
                        </h2>
                    </div>
                    <ul className="list-unstyled testimonial-one__list ">
                        <Marquee
                            speed={100}
                            gap={0}
                            pauseOnHover={true}
                            direction='left'

                        >
                            {
                                firstMarquee.map((item, idx) => <li key={idx}>
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__quote-icon">
                                            <img src={item?.icon} alt="" />
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-content">
                                                <h4 className="testimonial-one__client-name">
                                                    <Link to={"/testimonials"}>
                                                        {item?.titleLink}
                                                    </Link>
                                                </h4>
                                                <p className="testimonial-one__client-sub-title">{item?.clientSubTitle}</p>
                                            </div>
                                            <div className="testimonial-one__client-img">
                                                <img src={item?.clientImg} alt="" />
                                            </div>
                                        </div>
                                        <span className="testimonial-one__sub-title">{item?.subTitle}</span>
                                        <p className="testimonial-one__text">
                                            "{item?.text1}
                                            <br />
                                            {item?.text2}
                                            <br />
                                            {item?.text3}"
                                        </p>
                                        <div className="testimonial-one__rating-and-date">
                                            <div className="testimonial-one__rating">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="last-icon icon-star"></span>
                                                <span className="last-icon icon-star"></span>
                                            </div>
                                            <p className="testimonial-one__date">{item?.date}</p>
                                        </div>
                                    </div>
                                </li>)
                            }
                        </Marquee>


                    </ul>
                    <ul className="list-unstyled testimonial-one__list testimonial-one__list--two ">
                        <Marquee
                            speed={100}
                            gap={0}
                            pauseOnHover={true}
                            direction='right'
                        >
                            {
                                secondMarquee.map((item, idx) => <li key={idx}>
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__quote-icon">
                                            <img src={item?.icon} alt="" />
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-content">
                                                <h4 className="testimonial-one__client-name">
                                                    <Link to={"/testimonials"}>
                                                        {item?.titleLink}
                                                    </Link>
                                                </h4>
                                                <p className="testimonial-one__client-sub-title">{item?.clientSubTitle}</p>
                                            </div>
                                            <div className="testimonial-one__client-img">
                                                <img src={item?.clientImg} alt="" />
                                            </div>
                                        </div>
                                        <span className="testimonial-one__sub-title">{item?.subTitle}</span>
                                        <p className="testimonial-one__text">
                                            "{item?.text1}
                                            <br />
                                            {item?.text2}
                                            <br />
                                            {item?.text3}
                                        </p>
                                        <div className="testimonial-one__rating-and-date">
                                            <div className="testimonial-one__rating">
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="icon-star"></span>
                                                <span className="last-icon icon-star"></span>
                                                <span className="last-icon icon-star"></span>
                                            </div>
                                            <p className="testimonial-one__date">{item?.date}</p>
                                        </div>
                                    </div>
                                </li>)
                            }
                        </Marquee>
                    </ul>
                </div>
            </section >
        </>
    );
};

export default TestimonialOne;