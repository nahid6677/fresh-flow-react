import React, { useState } from 'react';
import cartimg1 from "../../assets/images/shop/cart-page-img-1.jpg"
import cartimg2 from "../../assets/images/shop/cart-page-img-2.jpg"
import cartimg3 from "../../assets/images/shop/cart-page-img-3.jpg"
import cartimg4 from "../../assets/images/shop/cart-page-img-4.jpg"
import cartimg5 from "../../assets/images/shop/cart-page-img-5.jpg"
import { Link } from 'react-router-dom';
import QuantityOfProduct from '../products/QuantityOfProduct';
const cartProducts = [
    {
        id: 1,
        image: cartimg1,
        productName: "bucket cleaning"
    },
    {
        id: 2,
        image: cartimg2,
        productName: "Dalli Activ Cleaner"
    },
    {
        id: 3,
        image: cartimg3,
        productName: "White Detergent"
    },
    {
        id: 4,
        image: cartimg4,
        productName: "washing machine"
    },
    {
        id: 5,
        image: cartimg5,
        productName: "Clin Kitchen Cleaner"
    },
]

const CatyMain = () => {
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [products, setProducts] = useState(cartProducts || []);
    const handleDelete = (id) => {
        setProducts(pre => pre.filter(i => i.id !== id))
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        const countryName = country;
        const cityName = city;
        const zip = e.target.zip.value;
        // console.log({ countryName, cityName, zip })
    }
    const handleCoupon = (e) => {
        e.preventDefault()
        const coupon = e.target.coupon.value;
        // console.log(coupon)
    }
    return (
        <section className="cart-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="cart-page__left">
                            <div className="table-responsive">
                                <table className="table cart-table">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((item, i) => <tr key={i}>
                                                <td>
                                                    <div className="product-box">
                                                        <div className="img-box">
                                                            <img src={item?.image} alt="" />
                                                        </div>
                                                        <h3><Link to={"/product-details"}>{item?.productName}</Link> </h3>
                                                    </div>
                                                </td>
                                                <td>$10.99</td>
                                                <td>
                                                    <QuantityOfProduct />
                                                </td>
                                                <td>
                                                    $10.99
                                                </td>
                                                <td>
                                                    <div className="cross-icon">
                                                        <i onClick={() => handleDelete(item?.id)} className="fas fa-times"></i>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="cart-page__right">
                            <div className="cart-page__sidebar">
                                <div className="cart-page__shipping">
                                    <h3 className="cart-page__shipping-title">Calculated Shipping</h3>
                                    <form onSubmit={handleSubmitForm} className="cart-page__shipping-form">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="cart-page__shipping-input-box">
                                                    <div className="select-box">

                                                        <select
                                                            className="form-select customP form-select-sm  select-box"
                                                            aria-label="Country"
                                                            value={country}
                                                            onChange={(e) => setCountry(e.target.value)}
                                                            required
                                                        >
                                                            <option value="">Country</option>
                                                            <option value="Ban">Ban</option>
                                                            <option value="Ind">Ind</option>
                                                            <option value="Pak">Pak</option>
                                                            <option value="USA">USA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="cart-page__shipping-input-box">
                                                    <div className="select-box">
                                                        <select
                                                            className="form-select customP  form-select-md  select-box"
                                                            aria-label="State/City"
                                                            value={city}
                                                            onChange={(e) => setCity(e.target.value)}
                                                            required
                                                        >
                                                            <option value="">State/City</option>
                                                            <option value="Ban">Ban</option>
                                                            <option value="Ind">Ind</option>
                                                            <option value="Pak">Pak</option>
                                                            <option value="USA">USA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="cart-page__shipping-input-box">
                                                    <input name='zip' type="text" placeholder="Zip Code" required />
                                                </div>
                                            </div>
                                            <div className="cart-page__btn-box">
                                                <button type="submit" className="thm-btn">
                                                    Update
                                                    <span><i className="icon-diagonal-arrow"></i></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="cart-page__coupon-code">
                                    <h3 className="cart-page__coupon-code-title">Coupon Code</h3>
                                    <p className="cart-page__coupon-code-text">I must explain to you how all this mistaken
                                        idea of denouncing pleasure and praising pain was born</p>
                                    <form onSubmit={handleCoupon} className="default-form cart-page__coupon-code-form">
                                        <input name='coupon' type="text" placeholder="Enter Coupon Code" required />
                                        <button className="thm-btn" type="submit">
                                            Apply Coupon
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </button>
                                    </form>
                                </div>
                                <div className="cart-page__cart-total">
                                    <ul className="cart-total list-unstyled">
                                        <li>
                                            <span>Cart Subtotal</span>
                                            <span>$20.98 USD </span>
                                        </li>
                                        <li>
                                            <span>Shipping Cost</span>
                                            <span>-$40.00 USD</span>
                                        </li>
                                        <li>
                                            <span>Discount</span>
                                            <span>$0.00 USD</span>
                                        </li>
                                        <li>
                                            <span>Cart Total</span>
                                            <span className="cart-total-amount">$20.98 USD</span>
                                        </li>
                                    </ul>
                                    <div className="cart-page__buttons">
                                        <div className="cart-page__buttons-1">
                                            <Link to={"/checkout"} className="thm-btn">
                                                Update
                                                <span><i className="icon-diagonal-arrow"></i></span>
                                            </Link>

                                        </div>
                                        <div className="cart-page__buttons-2">
                                            <Link to={"/checkout"} className="thm-btn">
                                                Checkout
                                                <span><i className="icon-diagonal-arrow"></i></span>
                                            </Link>

                                        </div>
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

export default CatyMain;