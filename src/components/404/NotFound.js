import React from 'react';
import notfound from '../images/404.png';


const NotFound = () => {
    return (
        <div>
            <img className='w-full h-full' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;