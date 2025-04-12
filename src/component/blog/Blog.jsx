import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
   const {title,author_img,author,reading_time,cover,posted,hashtag} =blog;
    return (
        <div>
            <img src={cover} alt="Cover picture" />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                      <div>
                         <div>
                            <h3 className='text-2xl'>{author}</h3>
                         </div>
                            <div>
                            <p>{posted}</p>
                            </div>
                      </div>
                    
                </div>
                <div>
                    <span>{reading_time}</span>
                </div>
            </div>
          
             <h3 className='text-3xl bold '> {title}</h3>
             <p>
                {
                   <a href=''>{hashtag}</a>
                }
             </p>
           
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