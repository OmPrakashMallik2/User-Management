import axios from 'axios'
import React, { useState } from 'react'

function Signup() {

    const [signUp, setSingUp] = useState(false)
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        bio: '',
        dateOfBirth: '',
        gender: '',
        qualifications: '',
        address: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/user", userData)
            .then((res) => {
                console.log(res.data);
                setSingUp(true);
                setUserData({
                    fullName: '',
                    email: '',
                    username: '',
                    password: '',
                    bio: '',
                    dateOfBirth: '',
                    gender: '',
                    qualifications: '',
                    address: '',
                    contactNumber: ''
                });
            }).catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            {
                signUp ?
                    <h1 className='text-2xl font-bold text-green-500 text-center bg-white rounded mt-4 pt-5 pb-8'>User Signed up successfully!</h1>
                    :
                    <div className='w-full'>
                        <form onSubmit={handleSubmit} className='flex flex-col bg-white rounded px-10 py-5 mt-4 '>
                            <h1 className='text-2xl font-bold bg-blue-50 text-blue-500 text-center p-5 rounded mb-3'>User Registration</h1>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Full Name</label>
                                <input type='text' name='fullName' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Enter full name' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Email</label>
                                <input type='text' name='email' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Enter email' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Username</label>
                                <input type='text' name='username' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Set username' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Password</label>
                                <input type='text' name='password' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Set password' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Bio</label>
                                <textarea type='text' name='bio' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Enter bio' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Date of Birth</label>
                                <input type='text' name='dateOfBirth' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='DD/MM/YYYY' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Gender</label>
                                <input type='text' name='gender' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Type your gender' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Education</label>
                                <input type='text' name='qualifications' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Enter qualifications' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Mobile</label>
                                <input type='text' name='contactNumber' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Enter mobile number' required />
                            </div>
                            <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-3'>
                                <label className='w-2/5 text-neutral-700 text-xl font-medium'>Address</label>
                                <input type='text' name='address' onChange={handleChange} className='w-3/5 text-neutral-500 text-xl font-medium' placeholder='Enter Address' required />
                            </div>

                            <button className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 p-3 rounded text-lg my-3 text-white' type="submit">Submit</button>

                        </form>
                    </div>

            }
        </div>
    )
}

export default Signup
