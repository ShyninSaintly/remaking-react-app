import React, {FC} from 'react';
import {IUser} from "../types/types.tsx";
import UserItem from "./UserItem.tsx";
interface  UserListProps{
    users: IUser[];
}
const UserList:FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user=> {
                <UserItem key={user.id} user={user}/>
            })}
        </div>
    );
};

export default UserList;