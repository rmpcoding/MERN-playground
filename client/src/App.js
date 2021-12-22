import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ClassH1 from './components/ClassH1';
import Users from './components/Users';
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
        console.log(page)
        switch (page) {
            case 'Users':
                return <Users users={users} />;
                break;
            case 'ClassH1':
                return <ClassH1 />;
                break;
            default:
                return <Users />;
        }
    };

    return (
        <div className="App">
            <Header setPage={setPage} />
            <div>
                {showPage()}
            </div>
        </div>
    );
}

export default App;
