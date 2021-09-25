import React from 'react';
import './Car.css'

const Car = (props) => {
    
    const {model, image, engine, power, transmission, topSpeed, price} = props.car;
    console.log(model);
    return (
        <div>
            {model}            
        </div>
    );
};

export default Car;