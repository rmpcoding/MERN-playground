import React from 'react';

const User = ({ name, email, password }) => {
    return (
        <div>
                <li>name: {name}</li>
                <li>email: {email}</li>
                <li>password: {password}</li>
        </div>
    );
};

export default User;
