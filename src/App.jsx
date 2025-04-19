

import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'
import PropTypes from 'prop-types';
import Bookmark from './component/bookMarks/bookmark'


function App() {
  const [bookMarks,setBookmarks]=useState([]);
  const [readingTime, setReadingTime]=useState(0);

  const HandleAddTobookMark =blog =>{
    const newBookMarks =[...bookMarks,blog];
    setBookmarks(newBookMarks);
    console.log(newBookMarks);
  }

  const handleMarkAsRead =( time, id ) =>{
    setReadingTime(readingTime + time );

    // console.log('remove bookmark',id)
    const remainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id )
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto '>
     <Blogs HandleAddTobookMark={HandleAddTobookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookMarks={bookMarks} readingTime={readingTime} ></Bookmarks>
     </div>
      
    </>
  )
}
Blogs.propTypes = {
  HandleAddTobookMark: PropTypes.func.isRequired
};
export default App
