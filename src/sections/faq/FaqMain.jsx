import React, { useState } from 'react';
import AccorditionItemFaq from '../../components/accordion/AccorditionItemFaq';
const FaqMain = () => {
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
    const accordionItems2 = [
        {
            title: `What types of cleaning services do you offer?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
            id: 5
        },
        {
            title: `Are your cleaning products eco-friendly?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
            id: 6
        },
        {
            title: `Do I need to be home during the cleaning service?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling`,
            id: 7
        },
        {
            title: `What if I’m not satisfied with the cleaning service?`,
            text: `Yes, we use eco-friendly and non-toxic cleaning products to ensure safety
            for your family, pets, and the environment. You can schedule a cleaning
            by calling us, booking online, or using our mobile app for flexible and
            convenient scheduling.`,
            id: 8
        },
    ]
    return (
        <section className="faq-one faq-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single">
                            <div className="accrodion-grp faq-one-accrodion">
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
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__single">
                            <div className="accrodion-grp faq-one-accrodion"  >
                                {accordionItems2.map((faq, index) => (
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
    );
};

export default FaqMain;