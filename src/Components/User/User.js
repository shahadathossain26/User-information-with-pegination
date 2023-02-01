import React, { useState } from 'react';

const User = ({ user }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="card mx-5 mt-10 mb-16 border border-solid bg-base-100 shadow-xl">
            <div className="card-body flex-row justify-between items-center">

                <div>
                    <h2 className='font-bold text-xl'>Company</h2>
                    <h3>{user.company.name}</h3>
                </div>

                <div>
                    <h2 className='font-bold text-xl'>Contact</h2>
                    <h3>{user.name}</h3>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>City</h2>
                    <h3>{user.address.city}</h3>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Street</h2>
                    <h3>{user.address.street}</h3>
                </div>
                <div>
                    {
                        show ? <button onClick={() => setShow(false)} className="btn btn-info rounded-3xl text-white">Hide Details</button>
                            : <button onClick={() => setShow(true)} className="btn btn-info rounded-3xl text-white">View Details</button>
                    }
                </div>

            </div>
            {
                show && <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4  border border-solid rounded-2xl m-10 p-10'>
                    <div className='text-start'>
                        <h2 className='font-bold '>Contact Person</h2>
                        <h3>{user.name}</h3>
                    </div>
                    <div className='text-start'>
                        <h2 className='font-bold '>City</h2>
                        <h3>{user.address.city}</h3>
                    </div>
                    <div className='text-start'>
                        <h2 className='font-bold '>Street</h2>
                        <h3>{user.address.street}</h3>
                    </div>
                    <div className='text-start'>
                        <h2 className='font-bold '>Username</h2>
                        <h3>{user.username}</h3>
                    </div>
                    <div className='text-start'>
                        <h2 className='font-bold '>E-mail</h2>
                        <h3>{user.email}</h3>
                    </div>
                    <div className='text-start'>
                        <h2 className='font-bold '>Phone</h2>
                        <h3>{user.phone}</h3>
                    </div>
                    <div className='text-start'>
                        <h2 className='font-bold '>Website</h2>
                        <h3>{user.website}</h3>
                    </div>
                </div>
            }
        </div>
    );
};

export default User;