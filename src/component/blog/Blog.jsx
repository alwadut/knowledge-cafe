import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog,HandleAddTobookMark }) => {
   const {title,author_img,author,reading_time,cover,posted,hashtag} =blog;
    return (
        <div className='mb-20'>
            <img className='mb-5 w-full border-4 border-amber-200 rounded-2xl ' src={cover} alt="Cover picture" />
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <img className='w-14 ' src={author_img} alt="" />
                      <div>
                         <div>
                            <h3 className='text-xl'>{author}</h3>
                         </div>
                            <div>
                            <p>{posted}</p>
                            </div>
                      </div>
                    
                </div>
                <div>
                    <span>{reading_time}</span>
                    <button onClick={()=>HandleAddTobookMark(blog)}
                     className='text-2xl ml text-red-500'>
                        <CiBookmark></CiBookmark>
                        </button>
                </div>
            </div>
          
             <h3 className='text-2xl bold '> {title}</h3>
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
        hashtag: PropTypes.string.isRequired,
        HandleAddTobookMark: PropTypes.func
    }).isRequired
};

export default Blog;