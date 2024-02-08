import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mr-10'>
        <div className='flex flex-col gap-y-4 w-fit float-none md:float-right'>
            <span className='w-fit'>

      <Link to="/about">
      <button className="
      cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-full
      border-blue-600
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Join as a user
</button>
      </Link>
    </span>
    <span className='w-fit'>

      <Link to="/about">
      <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-full
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Join as a user
</button>
      </Link>
    </span>

    </div>
    </div>
  )
}

export default Home