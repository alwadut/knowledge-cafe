import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-amber-200 p-3 m-3 shadow-xl rounded '>
            <h3 className= ' text-2xl  '>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    
};

export default Bookmark;