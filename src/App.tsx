import React, {FC, useEffect, useState} from 'react';
import Card, {CardVariant} from "./composents/Card.tsx";
import UserList from "./composents/UserList.tsx";
import {IUser} from "./types/types";

const App = () => {
    const [users,setUsers] = useState<IUser>([]);
    useEffect(() => {

    },[])
    return (
        <div>
     <Card  variant={CardVariant.primary} width='200px' height='200px'>
         <button>Btn</button>
     </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;