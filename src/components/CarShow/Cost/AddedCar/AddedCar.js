import React from 'react';
import './AddedCar.css';

const AddedCar = (props) => {
    const { model, image, price } = props.car;

    return (
        <div className="addedCar mb-2">
            {/* -----   Added Car Thumbnail   ----- */}
            <div>
                <img className="" src={image} alt="" />
            </div>

            {/* -----   Added Car Model and Price   ----- */}
            <div className="ps-2">
                <h6 className="mb-0">{model}</h6>
                <p className="mb-0">Price: {price}</p>
            </div>
        </div>
    );
};

export default AddedCar;