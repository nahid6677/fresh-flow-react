import React, { useState } from 'react';
import reviewImg from "../../assets/images/shop/review-1-1.jpg"
const ProductDetailsDescription = () => {
     const [isActiveTab, setActiveTab] = useState(1)

    const handleSubmitReview = (e) =>{
        e.preventDefault()
        const form = e.target;
        const message = form.message.value;
        const name = form.name.value;
        const email = form.email.value;
        const review = {name, email, message}
        console.log(review)
    }
    return (
        <section className="product-description">
            <div className="container">
                <div className="product-details__description">
                    <div className="product-details__main-tab-box tabs-box">
                        <ul className="tab-buttons clearfix list-unstyled">
                            <li onClick={() => setActiveTab(1)} className={`tab-btn ${isActiveTab === 1 ? 'active-btn' : ''}`}><span>Description</span></li>
                            <li onClick={() => setActiveTab(2)} className={`tab-btn ${isActiveTab === 2 ? 'active-btn' : ''}`}><span>Additional information</span></li>
                            <li onClick={() => setActiveTab(3)} className={`tab-btn ${isActiveTab === 3 ? 'active-btn' : ''}`}><span>Reviews (1)</span></li>
                        </ul>
                        <div className="tabs-content">
                            {/*tab*/}
                            <div className={`tab ${isActiveTab === 1 ? 'active-tab' : ''}`} >
                                <div className="product-details__tab-content-inner">
                                    <div className="product-details__description-content">
                                        <p className="product-details__description-text-1">I must explain to you how all
                                            this mistaken idea of denouncing pleasure and praising pain was born and
                                            I will give you a complete account of the system, and expound the actual
                                            teachings of the great explorer of the truth, the master-builder of
                                            human happiness. No one rejects, dislikes, or avoids pleasure itself,
                                            because it is pleasure, but because those who do not know how to pursue
                                            pleasure rationally encounter consequences</p>
                                        <div className="product-description__list">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <p><span className="icon-right-arrow"></span> Nam at elit nec neque
                                                        suscipit gravida.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-right-arrow"></span> Aenean egestas orci eu
                                                        maximus tincidunt.</p>
                                                </li>
                                                <li>
                                                    <p><span className="icon-right-arrow"></span> Curabitur vel turpis id
                                                        tellus cursus laoreet.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="product-details__description-text-2">Quas molestias excepturi sint
                                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                                            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                                            rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                                            nobis est eligendi optio cumque nihil impedit quo</p>
                                    </div>
                                </div>
                            </div>
                            {/*tab*/}
                            <div className={`tab ${isActiveTab === 2 ? 'active-tab' : ''}`} >
                                <div className="product-details__tab-content-inner">
                                    <div className="product-details__additional-information-content">
                                        <p className="product-details__additional-information-text-1">Lorem ipsum dolor sit
                                            amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
                                            passages of Lorem Ipsum available, but the majority have alteration in some
                                            injected or words which don't look even slightly believable. If you are
                                            going to use a passage of Lorem Ipsum, you need to be sure there isn't
                                            anything embarrang hidden in the middle of text.</p>
                                        <p className="product-details__additional-information-text-2">Quas molestias
                                            excepturi sint occaecati cupiditate non provident, similique sunt in
                                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                                            fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                            quo</p>
                                    </div>
                                </div>
                            </div>
                            {/*tab*/}
                            <div className={`tab ${isActiveTab === 3 ? 'active-tab' : ''}`} >
                                <div className="product-details__tab-content-inner">
                                    {/*Review One Start*/}
                                    <div className="review-one">
                                        <div className="comments-area">
                                            <div className="review-one__title">
                                                <h3>2 Reviews</h3>
                                            </div>
                                            {/*Start Comment Box*/}
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb">
                                                        <figure className="thumb">
                                                            <img src={reviewImg} alt="" />
                                                        </figure>
                                                    </div>

                                                    <div className="review-one__content">
                                                        <div className="review-one__content-top">
                                                            <div className="info">
                                                                <h2>Kevin martin <span>20 Oct, 2025 . 4:00
                                                                    pm</span></h2>
                                                            </div>
                                                            <div className="reply-btn">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                            </div>
                                                        </div>

                                                        <div className="review-one__content-bottom">
                                                            <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                                                                phaedrum. There are many variations of passages of Lorem
                                                                Ipsum available, but the majority have alteration in
                                                                some injected or words which don't look even slightly
                                                                believable. If you are going to use a passage of Lorem
                                                                Ipsum, you need to be sure there isn't anything
                                                                embarrang hidden in the middle of text.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Comment Box*/}

                                            {/*Start Comment Box*/}
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb">
                                                        <figure className="thumb"><img
                                                            src="assets/images/shop/review-1-2.jpg" alt="" />
                                                        </figure>
                                                    </div>

                                                    <div className="review-one__content">
                                                        <div className="review-one__content-top">
                                                            <div className="info">
                                                                <h2>Martin Kellis <span>20 Oct, 2025 . 4:00
                                                                    pm</span></h2>
                                                            </div>
                                                            <div className="reply-btn">
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                                <i className="icon-star"></i>
                                                            </div>
                                                        </div>

                                                        <div className="review-one__content-bottom">
                                                            <p>It has survived not only five centuries, but also
                                                                the leap into electronic
                                                                typesetting unchanged. It was popularised in the
                                                                sheets containing lorem ipsum
                                                                is simply free text. Class aptent taciti
                                                                sociosqu ad litora torquent per conubia
                                                                nostra, per inceptos himenaeos. Vestibulum
                                                                sollicitudin varius mauris non
                                                                dignissim.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*End Comment Box*/}
                                        </div>
                                    </div>
                                    {/*Review One End*/}

                                    {/*Start Review Form*/}
                                    <div className="review-form-one">
                                        <div className="review-form-one__inner">
                                            <h3 className="review-form-one__title">Add a review</h3>
                                            <div className="review-form-one__rate-box">
                                                <p className="review-form-one__rate-text">Rate this product?</p>
                                                <div className="review-form-one__rate">
                                                    <i className="icon-star"></i>
                                                    <i className="icon-star"></i>
                                                    <i className="icon-star"></i>
                                                    <i className="icon-star"></i>
                                                    <i className="icon-star"></i>
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmitReview}
                                                className="review-form-one__form contact-form-validated"
                                            >
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="review-form-one__input-box text-message-box">
                                                            <textarea name="message"
                                                                placeholder="Write a comment"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className="review-form-one__input-box">
                                                            <input type="text" placeholder="Your name" name="name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className="review-form-one__input-box">
                                                            <input type="email" placeholder="Email address"
                                                                name="email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <button type="submit" className="thm-btn review-form-one__btn">
                                                            Submit a review
                                                            <span><i className="icon-diagonal-arrow"></i></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="result"></div>
                                        </div>
                                    </div>
                                    {/*End Review Form*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsDescription;