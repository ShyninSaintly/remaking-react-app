import React, {FC} from 'react';
import {IUser} from "../types/types.tsx";
interface UserItemProps {
    users:IUser[];
}
const UserItem:FC<UserItemProps> = ({users}) => {
    return (
        <div>
            {users.map(user=> {
                <div style={{padding: 15, border: '1px solid gray'}}>{user.id} {user.name} проживает в
                    городе{user.address.city}
                    на улице {user.address.street} </div>
            })}
        </div>
    );
};

export default UserItem;