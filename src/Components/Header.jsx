import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Header() {
    const[toggle, settoggle] = useState(false);
  return (
    <div className='bg-[#2699fb] p-4 items-center'>
        <div className='max-w[1240px]  mx-auto flex justify-between pt-2'>
            <div className='text-3xl  font-bold'> 
                Gautam Kushwaha
            </div>
            {
                toggle?
                <AiOutlineClose onClick ={()=>settoggle(!toggle)} class='text-white text-2xl md:hidden block'/>
                :
                 <AiOutlineMenu onClick ={()=>settoggle(!toggle)} class='text-white text-2xl md:hidden block'/>
                 
          
            }
            <ul className=' hidden md:flex gap-10'>
                <li>
                    Home
                </li>
                <li>
                   Company
                </li>
                <li>
                   Resource
                </li>
                <li>
                    Resource
                </li>
                <li>
                    contact
                </li>
            </ul>

            {/* //toggle */}
            <ul className= {` duration-300 md:hidden text-white bg-black fixed  w-full  h-screen top-[76px] 
                  ${toggle? 'left-[0]': 'left-[-100%]' }`}>
                <li className='p-4'>
                    Home
                </li>
                <li className='p-4'>
                   Company
                </li>
                <li className='p-4'>
                   Resource
                </li>
                <li className='p-4'>
                    Resource
                </li>
                <li className='p-4'>
                    contact
                </li>
            </ul>
        </div>
      
    </div>
  )
}
