import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import ProjectCarouselMain from '../../sections/project-carousel/ProjectCarouselMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const ProjectCarousel = () => {
    return (
        <>
            <FreshHelmet title={"Projects Carousel"} />
            <div className="page-wrapper">
                <BannerOne title='Projects Carousel' secondTitle='Projects Carousel' />
                <ProjectCarouselMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />
            </div>

        </>
    );
};

export default ProjectCarousel;