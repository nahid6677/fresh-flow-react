import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import HomeOne from '../../pages/home-one/HomeOne';
import About from '../../pages/about/About';
import Team from '../../pages/team/Team';
import TeamDetails from '../../pages/team-details/TeamDetails';
import Projects from '../../pages/projects/Projects';
import ProjectCarousel from '../../pages/Project-carousel/ProjectCarousel';
import ProjectDetails from '../../pages/project-details/ProjectDetails';
import Testimonials from '../../pages/testimonials/Testimonials';
import TestimonialCarousel from '../../pages/testimonials/TestimonialCarousel';
import Pricing from '../../pages/pricing/Pricing';
import PricingCarousel from '../../pages/pricing/PricingCarousel';
import Gallery from '../../pages/gallery/Gallery';
import Faq from '../../pages/faq/Faq';
import Error from '../../pages/error/Error';
import Comming from '../../pages/comming-soon/Comming';
import Service from '../../pages/services/Service';
import ResidentialCleaning from '../../pages/services/ResidentialCleaning';
import CommercialCleaning from '../../pages/services/CommercialCleaning';
import DeepCleaning from '../../pages/services/DeepCleaning';
import OfficeCleaning from '../../pages/services/OfficeCleaning';
import SanitizingMopping from '../../pages/services/SanitizingMopping';
import ProductLeft from '../../pages/products/ProductLeft';
import ProductRight from '../../pages/products/ProductRight';
import NoSidebar from '../../pages/products/NoSidebar';
import ProductDetails from '../../pages/products/ProductDetails';
import Cart from '../../pages/cart/Cart';
import Checkout from '../../pages/checkout/Checkout';
import Wishlist from '../../pages/wishlist/Wishlist';
import SignUp from '../../pages/authentication/SignUp';
import LogIn from '../../pages/authentication/LogIn';
import Blog from '../../pages/blog/Blog';
import BlogCarousel from '../../pages/blog/BlogCarousel';
import BlogList from '../../pages/blog/BlogList';
import BlogDetails from '../../pages/blog/BlogDetails';
import Contact from '../../pages/contact/Contact';
import HomeTow from '../../pages/home-2/HomeTow';
import HomeThree from '../../pages/home-3/HomeThree';
import HomeFour from '../../pages/home-4/HomeFour';

const FreshFlowRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HomeOne />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/team-details",
                element: <TeamDetails />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/projects-carousel",
                element: <ProjectCarousel />
            },
            {
                path: "/project-details",
                element: <ProjectDetails />
            },
            {
                path: "/testimonials",
                element: <Testimonials />
            },
            {
                path: "/testimonials-carousel",
                element: <TestimonialCarousel />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/pricing-carousel",
                element: <PricingCarousel />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/coming-soon",
                element: <Comming />
            },
            {
                path: "/services",
                element: <Service />
            },
            {
                path: "/residential-cleaning",
                element: <ResidentialCleaning />
            },
            {
                path: "/commercial-cleaning",
                element: <CommercialCleaning />
            },
            {
                path: "/deep-cleaning",
                element: <DeepCleaning />
            },
            {
                path: "/office-cleaning",
                element: <OfficeCleaning />
            },
            {
                path: "/sanitizing-mopping",
                element: <SanitizingMopping />
            },
            {
                path: "/products-left",
                element: <ProductLeft />
            },
            {
                path: "/products-right",
                element: <ProductRight />
            },
            {
                path: "/products",
                element: <NoSidebar />
            },
            {
                path: "/product-details",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-carousel",
                element: <BlogCarousel />
            },
            {
                path: "/blog-list",
                element: <BlogList />
            },
            {
                path: "/blog-details",
                element: <BlogDetails/>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/home-2",
                element: <HomeTow />
            },
            {
                path: "/home-3",
                element: <HomeThree />
            },
            {
                path: "/home-4",
                element: <HomeFour />
            }
        ]
    }
])

export default FreshFlowRouter;