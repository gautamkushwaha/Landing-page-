import React from 'react';
import Laptop from '../assests/laptop.jpg';


export default function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto my-20 p-2  grid md:grid-cols-2'>
      <div className='col-span-1 mx-20 justify-center'>
        <img src={Laptop} alt=""/>
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-teal-400'>Learn from Experts</h1>
        <p className='my-2 text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sit voluptatem accusamus laboriosam expedita nam veritatis, nesciunt dolores suscipit aut fugit amet ullam temporibus quod aspernatur molestias quibusdam deserunt? Maxime natus recusandae eaque mollitia quibusdam ratione at voluptates illum vel.</p> 
         <button className='bg-black text-white p-2 rounded w-[30%]'>Get started</button>
      </div>
    
    </div>
  )
}
