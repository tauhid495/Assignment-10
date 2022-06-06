import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../services/Services';
import TransportProvider from '../transportProvider/TransportProvider';



const Home = () => {
    return (
        <div>
            <Carousel />
            <Services />
            <TransportProvider/>
        </div>
    );
};

export default Home;