import PropTypes from 'prop-types';

const Blog = ({ Blog }) => {
    console.log(Blog);
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {
    Blog: PropTypes.shape({
        id: PropTypes.number.isRequired,
        cover: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        posted: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        reading_time: PropTypes.string.isRequired,
        hashtag: PropTypes.string.isRequired
    }).isRequired
};

export default Blog;