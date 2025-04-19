import React from 'react';
import Bookmark from './bookmark';

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        
        <div className='md:w-2/3 m-2  bg-blue-100 rounded-2xl '>
              <h1 className='text-2xl font-bold text-center'>Reading Time:{readingTime} </h1>
          
            <div >
            <h1 className='text-center font-bold text-xl'> BookMarks: {bookMarks.length}</h1>
            {
               bookMarks.map((bookmark,idx) => <Bookmark
               key={idx} bookmark={bookmark}
               ></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;