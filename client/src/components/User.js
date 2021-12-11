import React from 'react';

const User = ({ users }) => {
    return (
        <div>
            {users &&
                users.map((user) => (
                    <div key={user._id}>
                        <li>name: {user.name}</li>
                        <li>email: {user.email}</li>
                        <li>password: {user.password}</li>
                    </div>
                ))}
        </div>
    );
};

export default User;
