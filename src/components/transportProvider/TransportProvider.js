import React from 'react';
import bus1 from '../images/transport/bus1.jpg'
import bus2 from '../images/transport/bus2.jpg'
import bus3 from '../images/transport/car3.jpg'

const TransportProvider = () => {
    return (
        <div className='mx-12 items-center md:my-20 md:flex text-4xl font-semibold text-myBlue'>
            <div className='md:w-1/2 drop-shadow-lg'>
                Thinking About Transport?? <br /> <span className='text-6xl font-bold text-myYellow '> Some Offers For You!!!</span>
            </div>

            <div className='md:w-1/2'>
                <div className='md:flex items-center my-4 shadow-lg p-4 rounded-lg '>
                    <img className='w-32 rounded-full' src={bus1} alt="" />
                    <p className='md:p-4 text-xl text-myBlue'>I provide tourist bus for city tour. I provide good service at low cost.</p>
                </div>
                <div className='md:flex items-center my-4 shadow-lg p-4 rounded-lg'>
                    <img className='w-32 rounded-full' src={bus3} alt="" />
                    <p className='p-4 text-xl text-myBlue'>I provide luxary cars for comfortable tour. I provide good service at low cost.</p>
                </div>
                <div className='md:flex items-center my-4 shadow-lg p-4 rounded-lg'>
                    <img className='w-32 rounded-full' src={bus2} alt="" />
                    <p className='p-4 text-xl text-myBlue'>I provide tourist luxary bus for abrod tour. I provide good service at low cost.</p>
                </div>
            </div>
        </div>
    );
};

export default TransportProvider;