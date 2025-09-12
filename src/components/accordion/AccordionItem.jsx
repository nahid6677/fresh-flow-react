import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
const AccordionItem = ({ handleToggle, faq, active = 2 }) => {

    const contentEl = useRef();
    const { title, image, contentTitle1, text, calender, id } = faq;
    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div
                    className={`rc-accordion-toggle p-3 ${active === id ? 'isActive' : ''}`}
                    onClick={() => handleToggle(id)}
                >
                    <h5 className="rc-accordion-title">{title} </h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`}
                style={{
                    height: active === id
                        ? contentEl.current?.scrollHeight + 'px'
                        : "0px"
                }}
            >
                <div className="accrodion-content">
                    <div className="inner">
                        <div className="img-box">
                            <img src={image} alt="" />
                        </div>
                        <div className="content-box">
                            <h4 className="content-box-title">{contentTitle1}</h4>
                            <p className="content-box-text">{text}</p>
                            <div className="date-and-btn">
                                <div className="date-box">
                                    <p> <span className="icon-calendar"></span> {calender}</p>
                                </div>
                                <div className="btn-box">
                                    <Link to="#">View Now <span className="icon-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;