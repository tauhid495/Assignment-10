import React from 'react';
import pic from '../images/TAUHID.JPG';

const AboutMe = () => {
    return (
        <div className='flex items-center'>
            <div className='my-2 w-1/2 ml-28'>
                <p className='text-myBlue text-4xl font-bold'>Name : Md. Shahidul Islam</p>
                <p className='text-xl'>My Goal : My goal is to be a good man. My another goal is to be a good web developer. To be success to my goals I work hard. I have made a daily routine. Which helps me a lot. I want to be successful at any cost insallah...</p>

            </div>


            <div className='w-1/2 p-7'><img className='rounded-xl' src={pic} alt="" /></div>
        </div>
    );
};

export default AboutMe;