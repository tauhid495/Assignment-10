import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Service = ({ service }) => {
    const { id, name, description, img, price } = service;
    // const navigate = useNavigate();
    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}`);
    // }

    return (
        <div className='relative service border-2 p-4 rounded-lg my-4 md:my-12 hover:shadow-lg transition duration-300 ease-in-out  overflow-hidden bg-no-repeat bg-cover drop-shadow-lg'>
            <img className='mb-4 hover:scale-110 transition duration-300 ease-in-out w-[400px] h-[260px]' src={img} alt="" />
            <h3 className='text-2xl font-semibold'> {name}</h3>
            <p>Price : {price}</p>
            <p className='mb-12'>{description}</p>
            <Link to='/checkout' className='text-center hover:bg-myBlue hover:text-myYellow bg-blue-600 text-white absolute bottom-0 left-0 px-2  rounded-lg py-2 w-full' >Book : {name}</Link>

        </div>
    );
};

export default Service;