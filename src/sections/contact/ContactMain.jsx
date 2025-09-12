import React from 'react';
import shapimg1 from "../../assets/images/shapes/contact-four-shape-1.png"
import shapimg2 from "../../assets/images/shapes/contact-four-contact-list-shape-1.png"
import shapimg3 from "../../assets/images/shapes/contact-four-contact-list-shape-1.png"

import location1 from "../../assets/images/shapes/office-location-two-shape-1.png"
import location2 from "../../assets/images/shapes/office-location-two-shape-2.png"
import location3 from "../../assets/images/shapes/office-location-two-shape-3.png"
import ContactForm from './ContactForm';
const lists = [
    {
        title: `New York, NY`,
        text: `1254 Maple Avenue, Suite 201 New York, NY 10001`,
        tel: `+12 (00) 345 58900`,
        email: `info@domain.com`
    },
    {
        title: `San Francisco, CA`,
        text: `1254 Maple Avenue, Suite 201 New York, NY 10001`,
        tel: `+12 (00) 345 58985`,
        email: `dnfo@mbfain.com`
    },
    {
        title: `Chicago, IL`,
        text: `455 Elm Drive, Floor 4 Chicago, IL 60601`,
        tel: `+12 (00) 345 58940`,
        email: `info@domain.com`
    },
    {
        title: `Austin, TX`,
        text: `213 Pine Lane, Suite 100 Austin, TX 73301`,
        tel: `+12 (00) 345 58900`,
        email: `info@domain.com`
    },

]
const ContactMain = () => {
    return (
        <>
            <section className="contact-four">
                <div className="contact-four__shape-1 img-bounce">
                    <img src={shapimg1} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5">
                            <div className="contact-four__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-box">
                                            <div className="section-title__tagline-shape"></div>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <span className="section-title__tagline">Get In touch</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">Reach Out to <span>Us for </span> <br />
                                        <span>Assistance or Inquiries</span></h2>
                                </div>
                                <p className="contact-four__left-text">We're Here to Help—Contact Us Today!</p>
                                <ul className="contact-four__contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Our Address</h5>
                                            <p>
                                                567 Oak Avenue, Apartment 910,
                                                <br />
                                                Chicago, IL 60601, USA
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-four__contact-list-shape-1">
                                            <img src={shapimg2} alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Contact Info</h5>
                                            <p><span>Phone:</span> <a href="tel:120034558900:">+12 (00) 345 58900</a></p>
                                            <p><span>Email:</span> <a href="mailto:info@domain.com">info@domain.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-four__contact-list-shape-1">
                                            <img src={shapimg3} alt="" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <div className="content">
                                            <h5>Working Time</h5>
                                            <p><span>Time:</span> 10:00 AM - 6:00 PM</p>
                                            <p><span>Days:</span> Monday - Friday</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <section className="office-location-two">
                <div className="office-location-two__shape-1">
                    <img src={location1} alt="" />
                </div>
                <div className="office-location-two__shape-2 float-bob-x">
                    <img src={location2} alt="" />
                </div>
                <div className="office-location-two__shape-3 float-bob-x">
                    <img src={location3} alt="" />
                </div>
                <div className="office-location-two__shape-4"></div>
                <div className="office-location-two__shape-5"></div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape-box">
                                <div className="section-title__tagline-shape"></div>
                                <div className="section-title__tagline-shape-2"></div>
                            </div>
                            <span className="section-title__tagline">Office Location</span>
                        </div>
                        <h2 className="section-title__title title-animation">Find Your Suitable Area <span>to Connect </span>
                            <br />
                            <span>With Us Easily</span></h2>
                    </div>
                    <div className="office-location-two__inner">
                        <ul className="office-location-two__list list-unstyled">
                            {
                                lists.map((item, i) => <li key={i}>
                                    <div className="office-location-two__location-box">
                                        <div className="office-location-two__location-icon">
                                            <span className="icon-placeholder"></span>
                                        </div>
                                        <div className="office-location-two__location-content">
                                            <h5>{item?.title}</h5>
                                            <p>{item?.text}</p>
                                        </div>
                                    </div>
                                    <div className="office-location-two__contact-box">
                                        <div className="office-location-two__contact">
                                            <div className="office-location-two__contact-icon">
                                                <span className="icon-customer-support"></span>
                                            </div>
                                            <div className="office-location-two__contact-content">
                                                <h3>Contact Info</h3>
                                                <a href="tel:120034558900">{item?.tel} </a>
                                                <a href="#"><span className="icon-arrow-right"></span></a>
                                                <a href="mailto:info@domain.com">{item?.email}</a>
                                            </div>
                                        </div>
                                        <div className="office-location-two__view">
                                            <a href="#">View Map<span className="icon-arrow-right"></span></a>
                                        </div>
                                    </div>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="google-map-one">
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                        className="google-map__one"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location">
                    </iframe>
                </div>
            </section>
        </>
    );
};

export default ContactMain;