import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data = [], setActive, active = 2 }) => {

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };
    return (
        <div className="">
            {data.map((faq, index) => (
                <AccordionItem
                    key={faq.id || index}
                    handleToggle={handleToggle}
                    faq={faq}
                    active={active}
                />
            ))}
        </div>
    );
};

export default Accordion;