import React from 'react'

const Button = (props) => {
  return (
    <button className=' font-bold   bg-gradient-to-l from-zinc-300 to-purple-200 text-black py-2 px-2  md:ml-8 hover:bg-red-700  hover:text-orange-950 font-akash duration-500 border-[2px]  border-zinc-500 rounded-xl  text-md cursor-pointer'>{props.children}</button>
  )
}

export default Button