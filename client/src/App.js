import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ClassH1 from './components/ClassH1';
import Users from './components/Users';
import About from './components/About';
import Portfolio from './components/Portfolio';
import API from './utils/API';
import './App.css';

function App() {
    const [users, setUsers] = useState();
    const [page, setPage] = useState('Users');

    useEffect(() => {
        const getListOfUsers = async () => {
            let mounted = true;
            if (mounted) {
                const users = await API.getUsers();
                setUsers(users);
            }
            return () => (mounted = false);
        };
        getListOfUsers();
    }, []);

    const showPage = () => {
        switch (page) {
            case 'About Me':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Users':
                return <Users users={users} />;
            case 'ClassH1':
                return <ClassH1 />;
            default:
                return <Users users={users} />;
        }
    };

    return (
        <div className="App">
            <Header setPage={setPage} />
            {showPage()}

        </div>
    );
}

export default App;
