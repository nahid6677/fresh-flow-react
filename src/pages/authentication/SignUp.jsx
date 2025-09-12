import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';

import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

import googleIcon from '../../assets/images/icon/icon-google-2.png';
import facebookIcon from '../../assets/images/icon/icon-facebook.png';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const handleSignup = (e) => {
        e.preventDefault(); // Prevent default form submission

        const form = e.target;
        const name = form.form_name.value;
        const email = form.form_email.value;
        const phone = form.form_phone.value;
        const password = form.form_password.value;
        const singInfo = { name, email, phone, password };

        console.log(singInfo, "55555");
        return false;
    }
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Sign Up' />
            <BannerOne title='Sign Up' secondTitle='Sign Up' />
            <section className="sign-up-one">
                <div className="container">
                    <div className="sign-up-one__form">
                        <div className="inner-title text-center">
                            <h2>Sign Up</h2>
                        </div>
                        <form onSubmit={handleSignup} noValidate>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="form_name"
                                                id="formName"
                                                placeholder="Name..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="form_email"
                                                id="formEmail"
                                                placeholder="Email..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="tel"
                                                name="form_phone"
                                                id="formPhone"
                                                placeholder="Phone..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="password"
                                                name="form_password"
                                                id="formPassword"
                                                placeholder="Password..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button
                                            className="thm-btn"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                        >
                                            Sign Up
                                            <span><i className="icon-diagonal-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="google-facebook">
                                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="icon">
                                        <img src={googleIcon} alt="Google" />
                                    </div>
                                    Continue with Google
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <div className="icon">
                                        <img src={facebookIcon} alt="Facebook" />
                                    </div>
                                    Continue with Facebook
                                </a>
                            </div>
                            <div className="create-account text-center">
                                <p>Already have an account? <Link to={"/login"}>Login Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default SignUp;