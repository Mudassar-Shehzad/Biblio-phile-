import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar2() {
  return (
    <div className="w-full text-center flex justify-center content-center p-2">
    <div className="py-2 border-b-[1.5px] border-gray-500  h-auto">
      <ul className="flex space-x-3 overflow-x-hidden justify-center text-[0.8rem] pc:text-[1.2rem]">
                <NavLink to='classicBooks' className='hover:underline '>Classic</NavLink>
                <NavLink to='advantureBooks' className='hover:underline '>Adventure</NavLink>
                <NavLink to='scienceFiction' className='hover:underline '>Science</NavLink>
                <NavLink to='philosophy' className='hover:underline '>Philosophy</NavLink>
                <NavLink to='children' className='hover:underline '>Children</NavLink>
                {/* <Link className='hover:underline '>Poetry</Link> */}
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar2
