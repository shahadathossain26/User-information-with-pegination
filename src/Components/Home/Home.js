import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className='w-3/4  mx-auto mt-10'>
            <h1 className='text-5xl font-bold text-black mb-10'>Users Information</h1>
            <div className='border border-solid border-black rounded-xl shadow-xl'>
                {
                    users && users.map(user => <User
                        key={user.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Home;