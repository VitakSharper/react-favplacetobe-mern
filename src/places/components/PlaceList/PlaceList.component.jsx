import React from 'react';
import './PlaceList.styles.css';

import Card from "../../../shared/components/UIElements/Card/Card.component";
import PlaceItem from "../PlaceItem/PlaceItem.component";

const PlaceList = ({items}) => (
    <>
        {items.length === 0
            ? (<Card>
                <h2>No Places Found</h2>
                <button>Share Place</button>
            </Card>)
            : (
                <ul className='place-list'>
                    {items.map(p => (
                        <PlaceItem
                            key={p.id}
                            place={p}
                        />
                    ))}
                </ul>
            )}
    </>
);

export default PlaceList;
