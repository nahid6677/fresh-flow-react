import contImg1 from '../../assets/images/shapes/contact-one-shape-2.png'
import contImg2 from '../../assets/images/shapes/contact-one-shape-3.png'
import contImg3 from '../../assets/images/resources/contact-one-img-main.jpg'
import contImg4 from '../../assets/images/resources/contact-one-small-img-1.jpg'
import contImg5 from '../../assets/images/resources/contact-one-small-img-2.jpg'

const ContactOne = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const userInfo = { name, phone, email, subject, message }

        // console.log(userInfo)
    }
    return (
        <section className="contact-one">
            <div className="contact-one__shape-1"
            ></div>
            <div className="contact-one__shape-2 zoom-fade">
                <img src={contImg1} alt="" />
            </div>
            <div className="contact-one__shape-3 zoom-fade">
                <img src={contImg2} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="contact-one__img-box">
                                <div className="contact-one__img-main">
                                    <img src={contImg3} alt="" />
                                </div>
                                <div className="contact-one__small-img-1 wow zoomIn animated animated"
                                    data-wow-delay="500ms" data-wow-duration="2500ms">
                                    <img src={contImg4} alt="" />
                                </div>
                                <div className="contact-one__small-img-2 wow zoomIn animated animated"
                                    data-wow-delay="700ms" data-wow-duration="2500ms">
                                    <img src={contImg5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-one__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-box">
                                        <div className="section-title__tagline-shape"></div>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <span className="section-title__tagline">CALL TO ACTION</span>
                                </div>
                                <h2 className="section-title__title title-animation">lets you connect with experts,
                                    get advice, advice, and explore solutions
                                </h2>
                            </div>
                            <div className="contact-one__inner">
                                <form className=" contact-one__form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-one__input-box">
                                                <div className="select-box">
                                                    <select
                                                        className="form-select form-select-sm service_type" name="subject" required >
                                                        <option value="0">Subjects*</option>
                                                        <option value="1">Type Of Service 01</option>
                                                        <option value="2">Type Of Service 02</option>
                                                        <option value="3">Type Of Service 03</option>
                                                        <option value="4">Type Of Service 04</option>
                                                        <option value="5">Type Of Service 05</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-one__input-box text-message-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Write your Message"
                                                    required
                                                />
                                            </div>
                                            <div className="contact-one__btn-box">
                                                <button type="submit" className="thm-btn">
                                                    Send Message
                                                    <span>
                                                        <i className="icon-diagonal-arrow"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                            <div className="contact-one__call-box">
                                <ul className="contact-one__call-list list-unstyled">
                                    <li>
                                        <div className="contact-one__call-icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <div className="contact-one__call-contact">
                                            <p>Send Email</p>
                                            <h4><a href="mailto:support@mail.com">support@mail.com</a></h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-one__call-icon">
                                            <span className="icon-phone-call"></span>
                                        </div>
                                        <div className="contact-one__call-contact">
                                            <p>Call Us Any TIme</p>
                                            <h4><a href="tel:+12004578960">+12 (00) 457 8960</a></h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactOne;