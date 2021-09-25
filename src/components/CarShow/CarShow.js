import React, { useEffect, useState } from 'react';
import './CarShow.css'

const CarShow = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('cars.JSON')
        .then(res => res.json())
        .then(data => setCars(data));
    }, []);

    return (
        <div>
            <div className="header">
                <h2>Car Show in Dhaka!</h2>
                <p className="my-0">Biggest car show in 2021</p>
                <h4>Budget: <span>10 Core BDT</span></h4>
            </div>
        </div>
    );
};

export default CarShow;