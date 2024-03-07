import React from 'react'

function User() {
    return (
        <div className='flex w-full'>
            <div className='flex flex-col items-center bg-white p-10 mr-2 rounded w-2/5'>
                <img className='w-60' src="https://i.pinimg.com/564x/0c/6f/39/0c6f39dac4d7f30139a7d61ee28a2ef5.jpg" alt="" />
                <h1 className=' font-semibold text-neutral-700 text-3xl text-center'>Om Prakash Mallik</h1>
                <p className=' mt-2 text-xl text-neutral-500 text-center'>Java full stack developer</p>
                <div className='mt-5'>
                    <button className='font-semibold bg-blue-500 border-solid border-2 border-blue-500 px-5 py-2 rounded text-lg mx-3 text-white'>Follow</button>
                    <button className='font-semibold bg-white border-solid border-2 border-blue-500 px-5 py-2 rounded text-lg mx-3 text-blue-500'>Logout</button>
                </div>
            </div>
            <div className='bg-white ml-2 rounded px-10 py-5 w-3/5'>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Full Name</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>Om Prakash Mallik</h3>
                </div>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Email</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>omprakashmallik91@gmail.com</h3>
                </div>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Date of Birth</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>20-12-2000</h3>
                </div>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Gender</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>Male</h3>
                </div>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Education</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>B.Tech (C.S.E)</h3>
                </div>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Mobile</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>+91 7352281493</h3>
                </div>
                <div className='border-solid border-b-2 border-neutral-300 flex pb-3 my-4'>
                    <h3 className='w-2/5 text-neutral-700 text-xl font-medium'>Address</h3>
                    <h3 className='w-3/5 text-neutral-500 text-xl font-medium'>Hirni, Kusheshwar Asthan, Darbhanga</h3>
                </div>

            </div>
        </div>
    )
}

export default User
