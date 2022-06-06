import React, { useEffect, useState } from 'react';
import Service from '../../service/Service';

import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div id='service'>

            <h1 className='md:text-6xl md:mt-12 font-semibold text-center text-myBlue drop-shadow-lg'>Attractive Packages <span className='text-myYellow'>For You...!!!</span></h1>
            <div className='services-container '>
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;