import React from 'react';
import './PlaceItem.styles.css';

import Card from "../../../shared/components/UIElements/Card/Card.component";

const PlaceItem = ({place: {id, imageUrl, title, description, address, creatorId, coordinates, location}}) => (
    <li className='place-item'>
        <Card className='place-item__content'>
            <div className='place-item__image'>
                <img src={imageUrl} alt={title}/>
            </div>
            <div className='place-item__info'>
                <h2>{title}</h2>
                <h3>{address}</h3>
                <p>{description}</p>
            </div>
            <div className='place-item__actions'>
                <button>View On Map</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </Card>
    </li>
);

export default PlaceItem;
