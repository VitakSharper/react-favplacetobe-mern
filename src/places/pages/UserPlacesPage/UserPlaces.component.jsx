import React from 'react';
import './UserPlaces.styles.css';

import PlaceList from "../../components/PlaceList/PlaceList.component";

const UserPlaces = () => {
    const places = [
        {
            id: 1,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
            title: 'Empire State Building 1',
            description: 'One of the famous',
            address: '20 W 34th St, New York, NY 10001',
            creatorId: 1,
            location: {
                lat: '40.7484445', lng: '-73.9878584'
            }
        },
        {
            id: 2,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
            title: 'Empire State Building 2',
            description: 'One of the famous',
            address: '20 W 34th St, New York, NY 10001',
            creatorId: 1,
            location: {
                lat: '40.7484445', lng: '-73.9878584'
            }
        }
    ];
    return (
        <PlaceList
            items={places}
        />
    )
};

export default UserPlaces;
