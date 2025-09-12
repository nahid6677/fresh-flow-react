import React, { useContext } from 'react';
import FreshFlowContext from '../../components/context/FreshFlowContext';
import { NavLink } from "react-router-dom";
import logo_1 from "../../assets/images/resources/logo-1.png";
import image2 from '../../assets/images/home-showcase/home-showcase-1-1.jpg'
import image3 from '../../assets/images/home-showcase/home-showcase-1-2.jpg'
import image4 from '../../assets/images/home-showcase/home-showcase-1-3.jpg' 
const Header = () => {
    const { setIsMobileOpen, setIsSearch } = useContext(FreshFlowContext)
    const handleEmail = (e) => {
        e.preventDefault()
        alert("mailto:support@example.com")
    }
    const handleTel = (e) => {
        e.preventDefault()
        alert("tel:1212345678900")
    }

    const handleSearch = () => {
        setIsSearch((prev) => !prev);
    };


    return (
        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-mail"></i>
                                </div>
                                <div className="text">
                                    <p><a onClick={handleEmail} href="#">support@example.com</a>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="text">
                                    <p><a onClick={handleTel} href="#">+12 (123) 456 78900</a></p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-pin-1"></i>
                                </div>
                                <div className="text">
                                    <p>684 West College St. Sun City, USA</p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu__top-social-box">
                            <h4 className="main-menu__top-social-title">Follow Us</h4>
                            <div className="main-menu__top-social">
                                <a href="#"><span className="icon-facebook-app-symbol"></span></a>
                                <a href="#"><span className="icon-pinterest"></span></a>
                                <a href="#"><span className="icon-linkedin-big-logo"></span></a>
                                <a href="#"><span className="icon-instagram"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <NavLink to={"/"}>
                                        <img className="" src={logo_1} alt=""></img>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <button
                                    className="mobile-nav__toggler"
                                    onClick={() => setIsMobileOpen((pre) => !pre)}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                                {/* <ManuList /> */}
                                <ul className="main-menu__list">
                                    <li className="dropdown megamenu current">
                                        <a to={"/"}>Home</a>
                                        <ul>
                                            <li>
                                                <section className="home-showcase">
                                                    <div className="container">
                                                        <div className="home-showcase__inner">
                                                            <div className="row">
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <img src={image2}
                                                                                alt="" />
                                                                            <div className="home-showcase__buttons">
                                                                                <NavLink to={"/"} className="thm-btn home-showcase__buttons__item">
                                                                                    View Page
                                                                                    <span className="icon-diagonal-arrow"></span>
                                                                                </NavLink>
                                                                            </div>
                                                                        </div>
                                                                        <h3 className="home-showcase__title">Home Page 01</h3>
                                                                    </div>
                                                                </div>{/* /.col-lg-3 */}
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <img src={image3}
                                                                                alt="" />
                                                                            <div className="home-showcase__buttons">
                                                                                <NavLink to={"/home-2"} className="thm-btn home-showcase__buttons__item">
                                                                                    View Page
                                                                                    <span className="icon-diagonal-arrow"></span>
                                                                                </NavLink>
                                                                            </div>

                                                                        </div>
                                                                        <h3 className="home-showcase__title">Home Page  02 </h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <img src={image4}
                                                                                alt="" />
                                                                            <div className="home-showcase__buttons">
                                                                                <NavLink to={"/home-3"} className="thm-btn home-showcase__buttons__item">
                                                                                    View Page <span className="icon-diagonal-arrow"></span>
                                                                                </NavLink>

                                                                            </div>

                                                                        </div>
                                                                        <h3 className="home-showcase__title">Home Page 03</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <div className="home-showcase__item">
                                                                        <div className="home-showcase__image">
                                                                            <img src={image2}
                                                                                alt="" />
                                                                            <div className="home-showcase__buttons">
                                                                                <NavLink to={"/home-4"} className="thm-btn home-showcase__buttons__item">
                                                                                    View
                                                                                    <span
                                                                                        className="icon-diagonal-arrow"></span>
                                                                                </NavLink>

                                                                            </div>

                                                                        </div>
                                                                        <h3 className="home-showcase__title">Home Page 04 </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>{/* /.container */}
                                                </section>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to={"/about"}>
                                            About
                                        </NavLink>

                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Pages</a>
                                        <ul className="shadow-box">
                                            <li><NavLink to={"/team"}>Team</NavLink></li>
                                            <li><NavLink to={"/team-details"}>Team Details</NavLink> </li>
                                            <li> <NavLink to={"/projects"}>Projects</NavLink></li>
                                            <li><NavLink to={"/projects-carousel"}>Projects Carousel</NavLink></li>
                                            <li><NavLink to={"/project-details"}>Project Details</NavLink></li>
                                            <li><NavLink to={"/testimonials"}>Testimonials</NavLink></li>
                                            <li><NavLink to={"/testimonials-carousel"}>Testimonial Carousel</NavLink></li>
                                            <li><NavLink to={"/pricing"}>Pricing</NavLink> </li>
                                            <li><NavLink to={"/pricing-carousel"}>Pricing Carousel</NavLink> </li>
                                            <li><NavLink to={"/gallery"}>Gallery</NavLink> </li>
                                            <li><NavLink to={"/faq"}>FAQs</NavLink> </li>
                                            <li><NavLink to={"/error"}>404 Error</NavLink></li>
                                            <li><NavLink to={"/coming-soon"}>Coming Soon</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a to="#">Services</a>
                                        <ul className="shadow-box">
                                            <li><NavLink to="/services">Services</NavLink></li>
                                            <li><NavLink to="/residential-cleaning">Residential Cleaning</NavLink></li>
                                            <li><NavLink to="/commercial-cleaning">Commercial Cleaning</NavLink></li>
                                            <li><NavLink to="/deep-cleaning">Deep Cleaning</NavLink></li>
                                            <li><NavLink to="/office-cleaning">Office Cleaning</NavLink></li>
                                            <li><NavLink to="/sanitizing-mopping">Sanitizing & Mopping</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a to="#">Shop</a>
                                        <ul className="shadow-box">
                                            <li className="dropdown">
                                                <NavLink to="#">Products</NavLink>
                                                <ul>
                                                    <li><NavLink to="/products-left">Left Sidebar</NavLink></li>
                                                    <li><NavLink to="/products-right">Right Sidebar</NavLink></li>
                                                    <li><NavLink to="/products">No Sidebar</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/product-details">Product Details</NavLink></li>
                                            <li><NavLink to="/cart">Cart</NavLink></li>
                                            <li><NavLink to="/checkout">Checkout</NavLink></li>
                                            <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
                                            <li><NavLink to="/login">Login</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a to="#">Blog</a>
                                        <ul className="shadow-box">
                                            <li><NavLink to="/blog">Blog</NavLink></li>
                                            <li><NavLink to="/blog-carousel">Blog Carousel</NavLink></li>
                                            <li><NavLink to="/blog-list">Blog List</NavLink></li>
                                            <li><NavLink to="/blog-details">Blog Details</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to={"/contact"}>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-cart-box">
                                    <div className="main-menu__search-box">
                                        {/* <NavLink to={"#"} className='main-menu__search searcher-toggler-box icon-search'></NavLink> */}
                                        <a
                                            onClick={handleSearch}
                                            className="main-menu__search searcher-toggler-box icon-search"
                                        ></a>
                                    </div>
                                    <div className="main-menu__cart">
                                        <NavLink to={"/cart"}>
                                            <span className="fas fa-shopping-cart"></span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <div className="main-menu__btn">
                                        <NavLink to={"/contact"}>
                                            <span className="icon-customer-support"></span>
                                            Book Schedule
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;