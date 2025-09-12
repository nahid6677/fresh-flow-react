import FreshHelmet from '../../components/common/FreshHelmet';
import BannerOne from '../../sections/common/BannerOne'; 
import NewsLeterTow from '../../sections/common/NewsLeterTow';
import FooterTow from '../../sections/footer/FooterTow';
import StickyNavTow from '../../components/stricky-nav/StickyNavTow';
import BlogDetailsMain from '../../sections/blog/BlogDetailsMain';

const BlogDetails = () => {
    return (
        <div className="page-wrapper">
            <FreshHelmet title='Cart' />
            <BannerOne title='Blog Details' secondTitle='Blog Details' />
            <BlogDetailsMain />
            <NewsLeterTow />
            <FooterTow />
            <StickyNavTow />
        </div>
    );
};

export default BlogDetails;