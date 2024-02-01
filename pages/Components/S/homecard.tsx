import React from 'react'
import Image from 'next/image'


const Homecard = ({imageUrl}:any) => {
  return (
    <div className='w-[25%] hover:shadow-md hover:shadow-gray-400 max-[868px]:w-fit max-[868px]:mx-[40px]'>
     <div className="bg-[#ffb72f] ">
        <Image src={imageUrl} alt='img'/>
      </div>
      <div className="flex mt-5 max-[868px]:flex-col max-[868px]:items-center h-fit pb-3">
        <div>
        <div  className="text-2xl h-[70px] w-[70px] flex flex-col items-center leading-6 justify-center bg-[#fa6742] text-white rounded-full">
          <h1 className="font-bold">29 </h1> <span className="text-[18px]">May</span>
        </div>
        </div>
        <div className="flex flex-col gap-3 mt-5 ml-2 ]">
          <h1 className="text-1xl text-[#7a7a7a]">Posted by <span className="text-[#2f2c2c]">Admin</span></h1>
          <h1 className="text-2xl text-[black] font-semibold hover:text-[#fa6742]">SEO trend to look for the best in 2018</h1>
          <p className="text-[#7a7a7a]">One of the top 100 advertising of a marketing agencies know that how to grow your busines</p>
        </div>
      </div>
     </div>
  )
}

export default Homecard