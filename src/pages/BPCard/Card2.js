import React from 'react';
import '../../assets/css/card.css';

const Card2 = ({ name, img, id}) => {
    return (
        <div className="card2">
            <p>New {name}</p>
            <img
                src={img}
                alt={name}
                width="100px"
            />
            <p>I am {name} {id}</p>
        </div>
    )
}

export default Card2;