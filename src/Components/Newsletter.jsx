import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='my-4'>
                <h1 className='text-[20px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                <span className='text-white'>Sign up to our newsletter and stay up to date.</span>
            </div>
            <div className=''>
               <input type='text' className='sm:full rounded  p-3 m-2 text-slate-600' placeholder='Email'/>
               <button className='bg-black text-white p-3 m-2 rounded'>Get started</button>
               <br/>
               <p className='text-white'>
                 We care about the protection of your data Read our <br/> 
                 <a href="" className='text-black'>privacy policy</a>
               </p>
            </div>
        </div>
    
    </div>
  )
}
