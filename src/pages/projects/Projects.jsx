import React from 'react';
import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';
import ProjectsMain from '../../sections/projects/ProjectsMain';
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';

const Projects = () => {
    return (
        <>
            <FreshHelmet title={"Projects"} />
            <div className="page-wrapper">
                <BannerOne title='Our Projects' secondTitle='Projects' />
                <ProjectsMain />
                <NewsLeterTow />
                <FooterTow />
                <StickyNavTow />
            </div>
        </>
    );
};

export default Projects;