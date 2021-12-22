export const API = {
    getUsers: async () => {
        // debugger;
        const response = await fetch('/user');
        const users = await response.json();
        console.log(users);
        return users;
    },
    getStuff: () => {
        return 'stuff';
    },
};

export default API;
