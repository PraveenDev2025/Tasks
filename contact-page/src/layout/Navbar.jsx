import React from 'react'
import { Link } from 'react-router-dom'
export default function () {
  return (
    <nav className='w-full bg-blue-500 flex justify-around items-center h-[10vh] text-white'>
        <h1>Logo</h1>

        <ul className='flex gap-10'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
        </ul>

        <button className='bg-black py-2 px-6 rounded-3xl cursor-pointer'>Login</button>
    </nav>
  )
}
