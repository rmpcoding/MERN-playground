import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(time)
            setTime(time => ++time);
        }, 1000);
        return () => clearInterval(timer)
    }, [time]);

    return (
        <>
            <p>{time}</p>
        </>
    );
};

export default CountDown;
