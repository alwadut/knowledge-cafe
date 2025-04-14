import React from 'react';
import Bookmark from './bookmark';




const Bookmarks = ({bookMarks}) => {
    return (
        <div className='md:w-2/3'>
            <h1> BookMarks: {bookMarks.length}</h1>
            {
               bookMarks.map(bookmark => <Bookmark
               key={bookmark.id} bookmark={bookmark}
               ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;