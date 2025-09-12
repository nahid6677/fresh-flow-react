import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CheckoutMain = () => {
     const [selected, setSelected] = useState("");
    const [country, setCountry] = useState("");
    const [isCheckPay, setCkeckPay] = useState(1)
    const [accountCheck, setAccountCheck] = useState(false)

    const options = [
        { id: "flat", label: "Flat Rate: $9.00" },
        { id: "free", label: "Free Shipping" },
        { id: "pickup", label: "Local Pickup" },
    ];

    const handleShopping = (e) => {
        e.preventDefault()
        const form = e.target;
        const userCountry = country;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const companyName = form.company_name.value;
        const address = form.address.value;
        const appartment = form.appartment.value;
        const townOrCity = form.townOrCity.value;
        const state = form.state.value;
        const formZip = form.form_zip.value;
        const email = form.email.value;
        const formPhone = form.form_phone.value;
        const formOrderNotes = form.form_order_notes.value;
        const isCheckedAccount = accountCheck;
        const userInfo = { userCountry, firstName, lastName, companyName, address, appartment, townOrCity, state, formZip, email, formPhone, formOrderNotes, isCheckedAccount }

        // console.log(userInfo)
    }
    return (
        <section className="checkout-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="billing_details">
                                <div className="billing_title">
                                    <p>Returning Customer? <a href="#">Click here to Login</a></p>
                                    <h2>Billing details</h2>
                                </div>
                                <form onSubmit={handleShopping} className="billing_details_form">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <select
                                                    className="form-select  this-select select-box"
                                                    aria-label="Sort Options"
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    required={country !== 'country'}
                                                >
                                                    <option value="" disabled hidden>Select a country</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="England">England</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="USA">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row bs-gutter-x-20">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="billing_input_box">
                                                <input type="text" name="first_name" placeholder="First name" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="billing_input_box">
                                                <input type="text" name="last_name" placeholder="Last name" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input type="text" name="company_name" placeholder="Company" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input type="text" name="address" placeholder="Address" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input type="text" name="appartment" placeholder="Appartment, unit, etc. (optional)" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <input type="text" name="townOrCity" placeholder="Town / City" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row bs-gutter-x-20">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="billing_input_box">
                                                <input type="text" name="state" placeholder="State" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="billing_input_box">
                                                <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="billing_input_box">
                                                <input name="email" type="email" placeholder="Email address" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="billing_input_box">
                                                <input type="tel" name="form_phone" required placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_input_box">
                                                <textarea placeholder="Type your note" name="form_order_notes"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="form-check check-boxx">
                                                <input className="form-check-input backGround" type="checkbox" value={accountCheck} checked={accountCheck ? true : false} onChange={() => setAccountCheck((pre) => !pre)} id="defaltCheck1" required />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Create an account?
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="billing_details_form-btns">
                                                <div className="billing_details_form-btn-1">
                                                    <button type="submit" className="thm-btn">
                                                        Continue Shopping
                                                        <span><i className="icon-diagonal-arrow"></i></span>
                                                    </button>
                                                </div>
                                                <div className="billing_details_form-btn-2">
                                                    <button type="submit" className="thm-btn">
                                                        Return To Cart
                                                        <span><i className="icon-diagonal-arrow"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-xl-4">
                            <div className="sidebar-order-summary">
                                <div className="title-box">
                                    <h3>Your Order</h3>
                                </div>

                                <ul className="sidebar-order-summary__list list-unstyled">
                                    <li>
                                        <div className="left-text">
                                            <p>Bolt Sweatshirt</p>
                                        </div>

                                        <div className="right-text">
                                            <p>$88.00</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="left-text">
                                            <p>Cock Kat Kitten <br /> Milk X 02</p>
                                        </div>

                                        <div className="right-text">
                                            <p>$188.00</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="left-text">
                                            <p>Sub total</p>
                                        </div>

                                        <div className="right-text">
                                            <p>$288.00</p>
                                        </div>
                                    </li>

                                    <li className='shipping'>
                                        <div className="">
                                            {
                                                options.map((item, i) => <div key={i} className="form-check check-boxx">
                                                    <input
                                                        className="form-check-input backGround"
                                                        type="checkbox"
                                                        id={item?.id}
                                                        checked={selected === item.id}
                                                        onChange={() => setSelected(item.id)}
                                                    />
                                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                                        {item?.label}
                                                    </label>
                                                </div>)
                                            }
                                        </div>
                                        <div className="left-text">
                                            <p>Shipping</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="left-text">
                                            <p>Total</p>
                                        </div>

                                        <div className="right-text">
                                            <p>$388.00</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="sidebar-order-summary__Payment">
                                    <div className="title-box">
                                        <h3>Payment Method</h3>
                                    </div>

                                    <div className="checkout__payment">
                                        <div className={`checkout__payment__item ${isCheckPay === 1 ? 'checkout__payment__item--active' : ''}`}>
                                            <h3 onClick={() => setCkeckPay(1)} className="checkout__payment__title">Direct bank transfer</h3>
                                            <div className="checkout__payment__content" style={{ display: `${isCheckPay === 1 ? 'block' : 'none'}` }}>
                                                A Direct Bank Transfer is a method of sending money from one
                                                bank account to another without using cash, checks, or third-party payment
                                                services.
                                            </div>
                                        </div>
                                        <div className={`checkout__payment__item ${isCheckPay === 2 ? 'checkout__payment__item--active' : ''}`}>
                                            <h3 onClick={() => setCkeckPay(2)} className="checkout__payment__title">Paypal payment</h3>
                                            <div className="checkout__payment__content" style={{ display: `${isCheckPay === 2 ? 'block' : 'none'}` }}>
                                                PayPal is an online payment system that allows users to send and receive
                                                money securely. It supports personal and business transactions, including
                                                shopping, invoicing, and international transfers.
                                            </div>
                                        </div>
                                        <div className={`checkout__payment__item ${isCheckPay === 3 ? 'checkout__payment__item--active' : ''}`}>
                                            <h3 onClick={() => setCkeckPay(3)} className="checkout__payment__title">Cheque Payment</h3>
                                            <div className="checkout__payment__content" style={{ display: `${isCheckPay === 3 ? 'block' : 'none'}` }}>
                                                A cheque payment is a written, dated, and signed document that instructs a
                                                bank to pay a specific amount of money from the issuer’s account to the
                                                payee.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebar-order-summary__bottom">
                                    <p className="text1">your personal data will be used to process your order your support
                                        experience throughout this website and for other purposes described in our <a
                                            href="#">privacy policy</a></p>
                                    <div className="form-check d-flex gap-2 mt-4">
                                        <input
                                            className="form-check-input backGround"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label " htmlFor="defauCheck1">
                                            I have read and agree to the website <br />
                                            <a href="#">terms and conditions</a>
                                        </label>
                                    </div>

                                    <div className="sidebar-order-summary__btn">
                                        <Link to={"#"} className="thm-btn">
                                            Place your order
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default CheckoutMain;