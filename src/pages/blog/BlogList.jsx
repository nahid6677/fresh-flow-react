import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne';

import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import BlogListMain from '../../sections/blog/BlogListMain';
const BlogList = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Blog List' />
            <BannerOne title='Blog List' secondTitle='Blog List' />
            <BlogListMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default BlogList;