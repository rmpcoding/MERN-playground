import React, { useState, useEffect }from 'react';
import axios from 'axios';
import User from './components/User';
import './App.css';



function App() {
    const [ name, setName ] = useState('Robert');
    const [ email, setEmail ] = useState('email@email.com');
    const [ password, setPassword ] = useState('password');

    useEffect(() => {
        axios.get('http://localhost:3001/tasks')
        .then(res => console.log(res))
        .catch((err) => console.log(err))
    })

    return (
        <div className="App">
            <div>
                hello
                <User
                  name={name}
                  email={email}
                  password={password}
                />
            </div>
        </div>
    );
}

export default App;
