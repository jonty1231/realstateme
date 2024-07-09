import React from 'react'
import Blogcard from './Blogcard'



const BlogData = [
    {
        id: 0,
        title: 'Private Contemporary Home Balancing Openness',
        
         area:"Living Room",
        imgsrc: '/images/blog-1.webp',
        date: '24',
        month: 'July',
       
       
    },
    
    {
        id: 1,
        title: 'Contemporary Home Private Balancing Openness',
        area:"Living Room",

        imgsrc: '/images/blog-3.webp',
        date: '24',
        month: 'July',
       
       
    },
    {
        id: 2,
        title: 'Balancing Private Contemporary Home Openness',
        area:"Living Room",

        imgsrc: '/images/blog-2.webp',
        date: '24',
        month: 'July',
       
       
    }
]

export default function Blog() {
  return (
   <>
   <div className='w-full px-[1rem] lg:px-[5rem] py-10 '>
   <div className="content mb-[20px]">
        <h2 className="text-4xl my-2 text-[#181a20] font-semibold">
        From Our Blog
        </h2>
        <p className="text-lg">
        Aliquam lacinia diam quis lacus euismod
        </p>
      </div>
     <div className='w-full flex justify-center lg:justify-between  flex-wrap '>
       {
        BlogData.map((data,index)=>{
            return (<>
            <Blogcard id={data.index} month={data.month}  area={data.area} title={data.title} img={data.imgsrc} date={data.date}  />
            </>)
        })

       }
     </div>

   </div>
   </>
  )
}
