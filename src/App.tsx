import React from 'react';
import Card, {CardVariant} from "./composents/Card.tsx";

const App = () => {
    return (
        <div>
     <Card  variant={CardVariant.primary} width='200px' height='200px'>
         <button>Btn</button>
         <div>Text</div>
     </Card>
        </div>
    );
};

export default App;