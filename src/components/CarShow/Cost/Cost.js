import React from 'react';
import AddedCar from './AddedCar/AddedCar';
import './Cost.css';

const Cost = (props) => {
    const {cars} = props;
    let totalPrice = 0;
    cars.forEach(car => {
        totalPrice = totalPrice + car.price;
    });
    return (
        <div className="cost p-2">
            <h5 className="mb-3">Total: {totalPrice}</h5><hr/>
            {
               cars.map(car => <AddedCar key={car.id} car={car}/>) 
            }
        </div>
    );
};

export default Cost;