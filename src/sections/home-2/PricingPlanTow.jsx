import React from 'react';
import PricingMain from '../pricing/PricingMain';
import pricContent1 from "../../assets/images/shapes/pricing-two-shape-1.png"
const pricingContent = [
    {
        image: pricContent1,
        badge: `Recommended`,
        packName: `Standard`,
        price: `1520.00`,
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
        price: `2240.00`,
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
        price: `850.00`,
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
        price: `940.00`,
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
        price: `1050.00`,
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
const PricingPlanTow = () => {
    return (
        <>
            <PricingMain pricingContentOne={pricingContent} pricingContentTow={pricingContent2} />
        </>
    );
};

export default PricingPlanTow;