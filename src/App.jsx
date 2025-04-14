

import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'
import PropTypes from 'prop-types';


function App() {
  const [bookMarks,setBookmarks]=useState([]);

  const HandleAddTobookMark =blog =>{
    const newBookMarks =[...bookMarks,blog];
    setBookmarks(newBookMarks);
    console.log(newBookMarks);
  }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto '>
     <Blogs HandleAddTobookMark={HandleAddTobookMark}></Blogs>
     <Bookmarks bookMarks={bookMarks}></Bookmarks>
     </div>
      
    </>
  )
}
Blogs.propTypes = {
  HandleAddTobookMark: PropTypes.func.isRequired
};
export default App
