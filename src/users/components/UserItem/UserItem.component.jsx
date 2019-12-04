import React from 'react';
import './UserItem.styles.css';
import {Link} from "react-router-dom";

import Avatar from "../../../shared/components/UIElements/Avatar/Avatar.component";
import Card from "../../../shared/components/UIElements/Card/Card.component";

const UserItem = ({user: {id, imageUrl, name, places}}) => (
    <li className='user-item'>
        <Card className='user-item__content'>
            <Link to={`/${id}/places`}>
                <div className='user-item__image'>
                    <Avatar
                        image={imageUrl}
                        alt={name}
                    />
                </div>
                <div className='user-item__info'>
                    <h2>{name}</h2>
                    <h3>{places > 1 ? `${places} Places` : `${places} Place`}</h3>
                </div>
            </Link>
        </Card>
    </li>
);

export default UserItem;
