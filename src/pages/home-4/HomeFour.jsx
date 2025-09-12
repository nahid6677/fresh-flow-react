import Header from '../../sections/home-one/Header';
import Banner from '../../sections/home-one/Banner';
import SlidingTextOne from '../../sections/home-one/SlidingTextOne';
import ServicesOne from '../../sections/home-one/ServicesOne';
import SlidingTestTow from '../../sections/home-one/SlidingTestTow';
import CounterOne from '../../sections/home-one/CounterOne';
import WhyChooseOne from '../../sections/home-one/WhyChooseOne';
import ProjectOne from '../../sections/home-one/ProjectOne';
import ContactOne from '../../sections/home-one/ContactOne';
import TestimonialOne from '../../sections/home-one/TestimonialOne';
import BrandOne from '../../sections/home-one/BrandOne';
import OfficeLocation from '../../sections/home-one/OfficeLocation';
import PricingOne from '../../sections/home-one/PricingOne';
import BlogOne from '../../sections/home-one/BlogOne';
import NewsLetterOne from '../../sections/common/NewsLetterOne';
import FooterOne from '../../sections/footer/FooterOne';
import StrickyNavHomeOne from '../../components/stricky-nav/StrickyNavHomeOne';
import SearchProp from '../../sections/home-one/SearchProp';
import FreshHelmet from '../../components/common/FreshHelmet';
import WhyChooseFour from '../../sections/home-4/WhyChooseFour';
import TeamTow from '../../sections/home-2/TeamTow';
import BeforeAfterThree from '../../sections/home-3/BeforeAfterThree';
const HomeFour = () => {
    return (
        <div className='page-wrapper'>
            <FreshHelmet title={"Home-Four"} />
            <Header />
            <Banner />
            <SlidingTextOne />
            <WhyChooseFour />
            <ServicesOne />
            <SlidingTestTow />
            <CounterOne />
            <BeforeAfterThree />
            <WhyChooseOne />
            <ProjectOne />
            <TeamTow />
            <ContactOne />
            <TestimonialOne />
            <BrandOne />
            <OfficeLocation />
            <PricingOne />
            <BlogOne />
            <NewsLetterOne />
            <FooterOne />

            <StrickyNavHomeOne />
            <SearchProp />
        </div>
    );
};

export default HomeFour;