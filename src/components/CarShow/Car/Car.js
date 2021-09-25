import React from 'react';
import './Car.css';


const Car = (props) => {
    
    const {model, image, engine, power, transmission, topSpeed, price} = props.car;
    console.log(image);
    return (
        <div>
            <img className="img-fluid" src={image} alt="" />
            {model}            
        </div>
    );
};

export default Car;