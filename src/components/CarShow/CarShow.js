import React, { useEffect, useState } from 'react';
import './CarShow.css';
import Car from './Car/Car.js'

const CarShow = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('cars.JSON')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    return (
        <div>
            {/* --------------   Header Container   --------------- */}
            <div className="header">
                <h2>Car Show in Dhaka!</h2>
                <p className="my-0">Biggest car show in 2021</p>
                <h4>Budget: <span>10 Core BDT</span></h4>
            </div>

            {/* --------------   Car Show Container   --------------- */}
            <div className="container car-show-container">
                {/* --------------   Displaying All Cars   --------------- */}
                <div className="cars-container">
                    <h4 className="mt-3">Available Cars: {cars.length}</h4>
                    <div className="cars">
                        {
                            cars.map(car => <Car 
                                key={car.id}
                                car={car}
                                ></Car>)
                        }
                    </div>
                </div>

                {/* --------------   Cost Displaying   --------------- */}
                <div className="cost-container">

                </div>
            </div>
        </div>
    );
};

export default CarShow;