import React from 'react';
import './Car.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Car = (props) => {
    //---------  Destructuring Props values   ----------
    const { model, image, engine, power, transmission, topSpeed, price, facebook, twitter, youtube } = props.car;

    //---------  Return Main Body   ----------
    return (
        <div className="car card">
            {/* ---------   Car Image    ----------- */}
            <img className="img-fluid card-img-top" src={image} alt="" />
            <div className="card-body pb-0">
                {/* ---------   Car Details    ----------- */}
                <h5>{model}</h5>
                <ul>
                    <li>Engine: {engine}</li>
                    <li>Power: {power}</li>
                    <li>Transmission: {transmission}</li>
                    <li>Top speed: {topSpeed}</li>
                    <li>Price: {price}</li>
                </ul>
            </div>
            <div className="card-footer">
                {/* ---------   Add Car Button    ----------- */}
                <button
                    onClick={() => props.handleClickEvent(props.car)}
                    className="add-car-button">
                    <FontAwesomeIcon icon={faPlus} /> Add Car
                </button>

                {/* ---------   Social Icons    ----------- */}
                <div className="social">
                    <a href={facebook}>
                        <FontAwesomeIcon size='2x' className="social-icon" icon={faFacebook} />
                    </a>
                    <a href={twitter}>
                        <FontAwesomeIcon size='2x' className="social-icon" icon={faTwitter} />
                    </a>
                    <a href={youtube}>
                        <FontAwesomeIcon size='2x' className="social-icon" icon={faYoutube} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Car;