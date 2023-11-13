import React, { useEffect, useState } from 'react';
import Card from './Card';

const BackwardCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((preCounter) => preCounter - 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, []);
    
    return (
        <Card>{counter}</Card>
    );
};

export default BackwardCounter;