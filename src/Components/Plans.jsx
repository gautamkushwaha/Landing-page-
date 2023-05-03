import React from "react";
import Single from '../assests/single.png';
import Double from '../assests/double.png';
import Triple from '../assests/triple.png';


export default function Plans() {
  return (
    <div className="p-[100px] py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="h-[500px] shadow-xl m-4 bg-gray-100 hover:scale-105 duration-[400ms] rounded-xl ">
            <img  className=" w-20 mx-auto  md:mt-[-3rem] m-5 bg-white" src={Single} alt="/"/>
            <h2 className="text-2xl font-bold text-center  py-3 md:py-8"> Web Development</h2>
            <p className="text-2xl font-bold text-center">$140</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem ipsum dolor</p>
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem ipsum dolor sit amet consectetur </p>
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem, ipsum dolor sit amet </p>
                <button className='bg-[#2699fb] text-black rounded  mx-auto  my-2 px-2 py-1 md:my-6 md:px-6 md:py-3'>Start Trial</button>
            </div>
        </div>
        <div className="h-[500px] shadow-xl m-4 bg-gray-100 hover:scale-105 duration-[400ms] rounded-xl ">
            <img  className=" w-20 mx-auto md:mt-[-3rem] m-5 bg-white" src={Double} alt="/"/>
            <h2 className="text-2xl font-bold text-center  py-3 md:py-8">Ethical Hacking</h2>
            <p className="text-2xl font-bold text-center">$200</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem ipsum dolor</p>
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem ipsum dolor sit amet consectetur </p>
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem, ipsum dolor sit amet </p>
                <button className='bg-[#050b10] text-white rounded mx-auto  my-2 px-2 py-1 md:my-6 md:px-6 md:py-3'>Start Trial</button>
            </div>
        </div>
        <div className="h-[500px] shadow-xl m-4 bg-gray-100 hover:scale-105 duration-[400ms] rounded-xl ">
            <img  className=" w-20 mx-auto md:mt-[-3rem] m-5 bg-white" src={Triple} alt="/"/>
            <h2 className="text-2xl font-bold text-center  py-3 md:py-8">Digital Marketing</h2>
            <p className="text-2xl font-bold text-center">$150</p>
            <div className="text-center font-medium">
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem ipsum dolor</p>
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem ipsum dolor sit amet consectetur </p>
                <p className="py-2 border-b mx-2 mt-2 md:mx-8. md:mt-8">Lorem, ipsum dolor sit amet </p>
                <button className='bg-[#5a2626] text-gray rounded mx-auto  my-2 px-2 py-1 md:my-6 md:px-6 md:py-3'>Start Trial</button>
            </div>
        </div>
      </div>
    </div>
  );
}