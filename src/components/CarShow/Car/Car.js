import React from 'react';
import './Car.css';


const Car = (props) => {

    const { model, image, engine, power, transmission, topSpeed, price } = props.car;
    console.log(image);
    return (
        <div className="car card">
            <img className="img-fluid card-img-top" src={image} alt="" />
            <div className="card-body pb-0">
                <h5>{model}</h5>
                <ul>
                    <li>Engine: {engine}</li>
                    <li>Power: {power}</li>
                    <li>Transmission: {transmission}</li>
                    <li>Top speed: {topSpeed}</li>
                    <li>Price: {price}</li>
                    <li>Engine: {engine}</li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="add-car-button">Add Car</button>
            </div>
        </div>
    );
};

export default Car;