import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='h-screen w-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 opacity-70 absolute flexCenter md:hidden'>
      <ul className='flexCenter flex-col gap-4 mx-auto'>
        <Link href={"/"}><li>Home</li></Link>
        <Link href={"/products"}><li>Products</li></Link>
        <Link href={"/users"}><li>Users</li></Link>
      </ul>
    </div>
  )
}

export default Sidebar