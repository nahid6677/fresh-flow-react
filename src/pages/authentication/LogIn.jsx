import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';

import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow'; 
import { Link } from 'react-router-dom';
const LogIn = () => {
    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.form_email.value;
        const password = form.form_password.value;

        console.log({ email, password })

        return false
    }
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Login' />
            <BannerOne title='Login' secondTitle='Login' />
            <section className="login-one">
                <div className="container">
                    <div className="login-one__form">
                        <div className="inner-title text-center">
                            <h2>Login Here</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="email" name="form_email" id="formEmail" placeholder="Email..."
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input type="text" name="form_password" id="formPassword"
                                                placeholder="Password..." required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">Login
                                            Here<span><i className="icon-diagonal-arrow"></i></span></button>
                                    </div>
                                </div>
                                <div className="remember-forget">
                                    <div className="checked-box1 ">
                                        <input className="form-check-input mt-1" type="checkbox" aria-label="Checkbox for following text input" />
                                        <label htmlFor="saveinfo">
                                            Remember me
                                        </label>
                                    </div>
                                    {/* <div className="input-group ">
                                        
                                    </div> */}
                                    <div className="forget">
                                        <a href="#">Forget password?</a>
                                    </div>
                                </div>

                                <div className="create-account text-center">
                                    <p>Not registered yet? <Link to={"/sign-up"}> Create an Account </Link> </p>
                                </div>
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

export default LogIn;