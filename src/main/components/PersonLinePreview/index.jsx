import React from 'react';
import GusarovImage from '../../../images/PInYuP6vCvE.jpeg'

const PersonLinePreview = ({item}) => {
    return (
        <div className="send-money-wrapper__column__element">
            <div className="send-money-wrapper__column__element__image">
                <img src={item.image} />
            </div>
            <div className="send-money-wrapper__column__element__data">
                <h3>{item.name}</h3>
                <p>{item.email}</p>
            </div>
        </div>
    )
}

export default PersonLinePreview;