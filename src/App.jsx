

import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  

  return (
    <>
      
     <Header></Header>
     <div className='md:flex  '>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
    </>
  )
}

export default App
