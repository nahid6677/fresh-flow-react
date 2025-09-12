import React from 'react';

const ContactForm = () => {

    const handleContactInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const userInfo = { name, phone, subject, email, message }
        console.log(userInfo)
    }
    return (
        <div className="contact-four__right">
            <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape-box">
                        <div className="section-title__tagline-shape"></div>
                        <div className="section-title__tagline-shape-2"></div>
                    </div>
                    <span className="section-title__tagline">Contact US</span>
                </div>
                <h2 className="section-title__title title-animation">Send Message</h2>
            </div>
            <form className="contact-form-validated contact-four__form" onSubmit={handleContactInfo}>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-four__input-title">Full Name *</h4>
                        <div className="contact-four__input-box">
                            <input type="text" name="name" placeholder="Jordan Walk" required />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-four__input-title">Your Email *</h4>
                        <div className="contact-four__input-box">
                            <input type="email" name="email" placeholder="jordan@domain.com" required />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-four__input-title">Phone *</h4>
                        <div className="contact-four__input-box">
                            <input type="text" name="phone" placeholder="write your Phone" required />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <h4 className="contact-four__input-title">Subjects *</h4>
                        <div className="contact-four__input-box">
                            <input type="text" name="subject" placeholder="write your subject" required />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <h4 className="contact-four__input-title">Write message *</h4>
                        <div className="contact-four__input-box text-message-box">
                            <textarea name="message" placeholder="Write a Message to Inquire"></textarea>
                        </div>
                        <div className="contact-four__btn-box">
                            <button type="submit" className="thm-btn">
                                Send Message
                                <span><i className="icon-diagonal-arrow"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="result"></div>
        </div>
    );
};

export default ContactForm;