import React, { useEffect, useState } from 'react';
import './CarShow.css';
import Car from './Car/Car.js'
import Cost from './Cost/Cost';

const CarShow = () => {
    const [cars, setCars] = useState([]);
    const [selectedCars, setSelectedCars] = useState([]);

    // -----------------   Load JSON File    ---------------
    useEffect(() => {
        fetch('cars.JSON')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);


    // ----------   Handle Add Car Button Event    -----------
    const handleClickEvent = (car) => {
        const { id } = car;
        let newSelectedCars = selectedCars;
        let carExist = false;

        for (const selectedCar in newSelectedCars) {
            if (id === newSelectedCars[selectedCar].id) {
                carExist = true;
                newSelectedCars[selectedCar].quantity = parseInt(newSelectedCars[selectedCar].quantity) + 1;                              
            }
        }

        if (carExist === false) {
            let newCar = car;
            newCar.quantity = 1;
            newSelectedCars = [...selectedCars, newCar];
            
        }
        setSelectedCars(newSelectedCars);
    }


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
                                handleClickEvent={handleClickEvent}
                                car={car}
                            ></Car>)
                        }
                    </div>
                </div>

                {/* --------------   Cost Displaying   --------------- */}
                <div className="cost-container m-3">
                    <h4>Cost Breakdown:</h4>
                    <Cost
                        cars={selectedCars}></Cost>
                </div>
            </div>
        </div>
    );
};

export default CarShow;