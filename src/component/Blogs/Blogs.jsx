import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({HandleAddTobookMark}) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return (
        <div className='md:w-2/3'>
            <h1>This is blogs :{blogs.length} </h1>
            
            {
               blogs.map(blog =>(
               <Blog
                key={blog.id}
                blog={blog}
                HandleAddTobookMark={HandleAddTobookMark}
               ></Blog>))
            }
        </div>
    );
};
Blogs.propTypes = {
    HandleAddTobookMark: PropTypes.func.isRequired
};
export default Blogs;