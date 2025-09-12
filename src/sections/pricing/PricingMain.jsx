import pricimg1 from "../../assets/images/shapes/pricing-two-shape-2.png"
import pricimg2 from "../../assets/images/shapes/pricing-two-shape-3.png"
import pricimg3 from "../../assets/images/shapes/pricing-two-discount--shape-1.png"
import pricContent1 from "../../assets/images/shapes/pricing-two-shape-1.png"
import { useState } from "react";
const pricingContent = [
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `Standard`,
        price: `220.00`,
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
        price: `240.00`,
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
        price: `350.00`,
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
        price: `240.00`,
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
        price: `350.00`,
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
const PricingMain = ({ sectionStyle = "pricing-two", pricingContentOne = pricingContent || [], pricingContentTow = pricingContent2 || [] }) => {
    const [isPricing, setPricing] = useState(false)

    return (
        <section className={`${sectionStyle}`}>
            <div className="pricing-two__shape-bg"></div>
            <div className="pricing-two__shape-2 img-bounce" >
                <img src={pricimg1} alt="" />
            </div>
            <div className="pricing-two__shape-3 float-bob-y" >
                <img src={pricimg2} alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                        </div>
                        <span className="section-title__tagline">Plans & Pricing</span>
                    </div>
                    <h2 className="section-title__title title-animation">Explore Our Affordable and Flexible <br /> Pricing
                        <span>Options Tailored for You </span></h2>
                </div>
                <div className="pricing-two__inner">
                    <div className="pricing-two__main-tab-box tabs-box">
                        <div className="pricing-two__tab-buttons-box">
                            <div className="pricing-two__discount-box">
                                <p>-10% Off</p>
                            </div>
                            <div className="pricing-two__discount-shape-1">
                                <img src={pricimg3} alt="" />
                            </div>
                            <ul className="tab-buttons list-unstyled">
                                <li onClick={() => setPricing(false)} className={`tab-btn ${!isPricing ? 'active-btn' : ''} `}><span>Monthly</span></li>
                                <li onClick={() => setPricing(true)} className={`tab-btn ${isPricing ? 'active-btn' : ''} `}><span>Yearly</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            <div className={`tab ${!isPricing ? 'active-tab' : ''}`} style={{ display: `${!isPricing ? 'block' : 'none'}` }}>
                                <div className="pricing-two__tab-content-box">
                                    <div className="row">
                                        {
                                            pricingContentOne.map((item, index) => <div key={index} className="col-xl-4 col-lg-6">
                                                <div className={`pricing-two__single ${item?.packName === 'PREMIMUM' ? 'pricing-two__single--two' : ''}`}>
                                                    <div className="pricing-two__shape-1">
                                                        <img src={item?.image} alt="" />
                                                    </div>
                                                    <div className="pricing-two__badge">
                                                        <p>{item?.badge}</p>
                                                    </div>
                                                    <div className="pricing-two__pack-name">
                                                        <p>{item?.packName}</p>
                                                    </div>
                                                    <h3 className="pricing-two__price-box">
                                                        <span className="dolar">$</span>
                                                        {item?.price}
                                                        <span className="validity">{item?.validity}</span>
                                                    </h3>
                                                    <p className="pricing-two__text">
                                                        {item?.pricingText1}
                                                        <br />
                                                        {item?.pricingText2}
                                                    </p>
                                                    <div className="pricing-two__btn-box">
                                                        <a href="#" className="thm-btn">Choose Plan<span><i
                                                            className="icon-plus"></i></span></a>
                                                    </div>
                                                    <div className="pricing-two__points-box">
                                                        <ul className="list-unstyled pricing-two__points">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text1}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text2}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text3}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text4}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text5}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={`tab ${isPricing ? 'active-tab' : ''}`} style={{ display: `${isPricing ? 'block' : 'none'}` }}>
                                <div className="pricing-two__tab-content-box">
                                    <div className="row">
                                        {
                                            pricingContentTow.map((item, index) => <div key={index} className="col-xl-4 col-lg-6">
                                                <div className={`pricing-two__single ${item?.packName === 'PREMIMUM' ? 'pricing-two__single--two' : ''}`}>
                                                    <div className="pricing-two__shape-1">
                                                        <img src={item?.image} alt="" />
                                                    </div>
                                                    <div className="pricing-two__badge">
                                                        <p>{item?.badge}</p>
                                                    </div>
                                                    <div className="pricing-two__pack-name">
                                                        <p>{item?.packName}</p>
                                                    </div>
                                                    <h3 className="pricing-two__price-box">
                                                        <span className="dolar">$</span>
                                                        {item?.price}
                                                        <span className="validity">{item?.validity}</span>
                                                    </h3>
                                                    <p className="pricing-two__text">
                                                        {item?.pricingText1}
                                                        <br />
                                                        {item?.pricingText2}
                                                    </p>
                                                    <div className="pricing-two__btn-box">
                                                        <a href="#" className="thm-btn">Choose Plan<span><i
                                                            className="icon-plus"></i></span></a>
                                                    </div>
                                                    <div className="pricing-two__points-box">
                                                        <ul className="list-unstyled pricing-two__points">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text1}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text2}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text3}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text4}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-check-1"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>{item?.text5}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingMain;