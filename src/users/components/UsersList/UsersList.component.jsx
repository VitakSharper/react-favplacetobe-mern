import React from 'react';
import './UsersList.styles.css';

import UserItem from "../UserItem/UserItem.component";
import Card from "../../../shared/components/UIElements/Card/Card.component";

const UsersList = ({users}) => {
    return (
        users.length === 0
            ? <div className='users-list'>
                <Card>
                    <h2>No users found.</h2>
                </Card>
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
