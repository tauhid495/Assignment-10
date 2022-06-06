import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <h2>Welcome to detail: {serviceId}</h2>
    );
};

export default ServiceDetail;