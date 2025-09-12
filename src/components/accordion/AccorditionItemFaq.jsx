
import { useRef, useEffect, useState } from "react";

const AccorditionItemFaq = ({ faq, handleToggle, activeAcc }) => {
    const { title, text, id } = faq;
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (activeAcc === id) {
            setHeight(`${contentRef.current.scrollHeight}px`);
            // console.log(contentRef.current.scrollHeight)
        } else {
            setHeight("0px");
        }
    }, [activeAcc, id]);

    return (
        <div
            className={`accrodion ${activeAcc === id ? "active" : ""}`}
            onClick={() => handleToggle(id)}
        >
            <div className="accrodion-title">
                <h4>{title}</h4>
            </div>

            <div
                ref={contentRef}
                className="accrodion-content"
                style={{ maxHeight: height }}
            >
                <div className="inner">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default AccorditionItemFaq;
