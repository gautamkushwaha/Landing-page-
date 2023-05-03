import React from 'react';
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center font-bold pt-9'>
            <div className=' text-xl md:text-3xl md:mt-10 pt-4'>
                Learn with us
            </div>
            <div className=' text-3xl md:text-[70px] text-white md:mt-10 pt-4'>
                Grow with us.
            </div>
            <div className=' text-xl md:text-2xl md:mt-10 pt-4'>
                Learn 
                <Typed className='pl-3'
                    strings={[' Web Development..','Ethical Hacking..' , 'Digital Marketing..']}
                    typeSpeed={100}
                    loop ={true}
                    backspeed={120}
                />
            </div> 
            <button className='bg-black text-white p-2 rounded m-4'>Get started</button>
        </div>
        
 
    </div>
  )
}
