import React from 'react';
import './UsersList.styles.css';

import UserItem from "../UserItem/UserItem.component";

const UsersList = ({users}) => {
    return (
        users.length === 0
            ? <div className='center'>
                <h2>No users found.</h2>
            </div>
            :
            <ul className='users-list'>
                {users.map(u => (
                    <UserItem
                        key={u.id}
                        user={u}
                    />
                ))}
            </ul>
    )
};

export default UsersList;
