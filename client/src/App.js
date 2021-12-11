import React, { useState, useEffect } from 'react';
import User from './components/User';
import CountDown from './components/CountDown';
import './App.css';

function App() {
    const [users, setUsers] = useState();

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('/user');
            const users = await response.json();
            setUsers(users);
        };
        getUsers();
    }, []);

    return (
        <div className="App">
            <CountDown />
            <div>
                hello
                <User users={users} />
            </div>
        </div>
    );
}

export default App;
