import React, { useState } from 'react';
import servtabbg1 from "../../assets/images/services/services-three-tab-img-1.jpg"
import servtabbg2 from "../../assets/images/services/services-three-tab-img-2.jpg"
import servtabbg3 from "../../assets/images/services/services-three-tab-img-3.jpg"
import servtabbg4 from "../../assets/images/services/services-three-tab-img-4.jpg"
import servtabbg5 from "../../assets/images/services/services-three-tab-img-5.jpg"
import servtabcontent1 from "../../assets/images/shapes/services-three-shape-1.png"
import servtabcontent2 from "../../assets/images/shapes/services-three-shape-2.png"
import { Link } from 'react-router-dom';
const serviceItems = [
    {
        id: 1,
        icon: "icon-cleaning-1",
        text1: "Residential",
        text2: "Cleaning",
    },
    {
        id: 2,
        icon: "icon-carpet",
        text1: "Commercial",
        text2: "Cleaning",
    },
    {
        id: 3,
        icon: "icon-wipe",
        text1: "Deep",
        text2: "Cleaning",
    },
    {
        id: 4,
        icon: "icon-house-cleaning",
        text1: "Office",
        text2: "Cleaning",
    },
    {
        id: 5,
        icon: "icon-sanitary",
        text1: "Sanitizing",
        text2: "& Mopping",
    },
]
const serviceContent = [
    {
        id: 1,
        bgImage: servtabbg1,
        image1: servtabcontent1,
        image2: servtabcontent2,
        title: `Residential & Upholstery Cleaning`,
        text: `Recover 100% of your rental deposit
        with our letting agents approves checklist We supply all materials
        equipment with free oven clean included & 72 Guarantee`,
        price: "200",
        lin: "/residential-cleaning"
    },
    {
        id: 2,
        bgImage: servtabbg2,
        image1: servtabcontent1,
        image2: servtabcontent2,
        title: `Commercial Cleaning`,
        text: `Recover 100% of your rental deposit
        with our letting agents approves checklist We supply all materials
        equipment with free oven clean included & 72 Guarantee`,
        price: "300",
        lin: "/commercial-cleaning"

    },
    {
        id: 3,
        bgImage: servtabbg3,
        image1: servtabcontent1,
        image2: servtabcontent2,
        title: `Deep Cleaning`,
        text: `Recover 100% of your rental deposit
        with our letting agents approves checklist We supply all materials
        equipment with free oven clean included & 72 Guarantee`,
        price: "400",
        lin: "/deep-cleaning"
    },
    {
        id: 4,
        bgImage: servtabbg4,
        image1: servtabcontent1,
        image2: servtabcontent2,
        title: `Offic Cleaning`,
        text: `Recover 100% of your rental deposit
        with our letting agents approves checklist We supply all materials
        equipment with free oven clean included & 72 Guarantee`,
        price: "500",
        lin: "/office-cleaning"
    },
    {
        id: 5,
        bgImage: servtabbg5,
        image1: servtabcontent1,
        image2: servtabcontent2,
        title: `Sanitizing & Mopping`,
        text: `Recover 100% of your rental deposit
        with our letting agents approves checklist We supply all materials
        equipment with free oven clean included & 72 Guarantee`,
        price: "600",
        lin: "/sanitizing-mopping"
    },

]
const ServiceThree = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <section className="services-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <h2 className="section-title__title title-animation">Explore the Full Range of <span>Services
                        We</span><br /> <span>Offer to Meet Your Needs</span>
                    </h2>
                </div>
                <div className="services-three__inner">
                    <div className="services-three__main-tab-box tabs-box">
                        <div className="services-three__tab-buttons-box">
                            <ul className="tab-buttons list-unstyled">

                                {
                                    serviceItems.map((service, i) => <li key={i} className={`tab-btn ${activeTab === service?.id ? 'active-btn' : ''}`}>
                                        <div onClick={() => setActiveTab(service?.id)} className="services-three__tab-buttons-single">
                                            <i className={service?.icon}></i>
                                            <span>{service?.text1}<br />{service?.text2}</span>
                                        </div>
                                    </li>)
                                }
                            </ul>
                        </div>
                        <div className="tabs-content">
                            {
                                serviceContent.map((content, i) => <div key={i} className={`tab ${activeTab === content?.id ? 'active-tab' : ''}`} style={{ display: `${activeTab === content?.id ? 'block' : 'none'}` }}>
                                    <div className="services-three__tab-content-box">
                                        <div className="services-three__tab-img-1" style={{ backgroundImage: `url(${content?.bgImage})` }}>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="services-three__tab-left">
                                                    <div className="services-three__shape-1">
                                                        <img src={content?.image1} alt="" />
                                                    </div>
                                                    <div className="services-three__shape-2">
                                                        <img src={content?.image2} alt="" />
                                                    </div>
                                                    <h3 className="services-three__tab-title">{content?.title}</h3>
                                                    <p className="services-three__tab-text">{content?.text}</p>
                                                    <div className="services-three__tab-doller-box">
                                                        <p className="services-three__tab-doller"><span>$</span>{content?.price}</p>
                                                        <span className="services-three__tab-doller-sub-title">From Start</span>
                                                    </div>
                                                    <div className="services-three__btn-box">
                                                        <Link to={content?.lin}>
                                                            Learn More<span><i className="icon-diagonal-arrow"></i></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceThree;