import React from 'react';
import './UserPage.styles.css';

import UsersList from "../components/UsersList/UsersList.component";

const Users = () => {
    const users = [
        {
            id: 1,
            name: 'User 1',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 3
        },
        {
            id: 2,
            name: 'User 2',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 3
        },
        {
            id: 3,
            name: 'User 3',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 3
        },
        {
            id: 4,
            name: 'User 4',
            imageUrl: 'https://images.pexels.com/photos/3095527/pexels-photo-3095527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            places: 3
        },
    ];
    return (
        <>
            <UsersList
                users={users}
            />
        </>
    )
};

export default Users;
