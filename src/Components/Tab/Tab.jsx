import React, { useState } from 'react'

export default function Tab() {
  let [tab,settab]=useState("ALL");
  let Array=["ALL",'Fruits','Vegetables','Meat','Butter']
  return (
    <section className='flex mx-auto max-w-[1400px] px-10 py-10 gap-5 justify-center items-center'>
        
        {
          Array.map(
            (Items,i)=>{
              return(
                <div className=' '>
                  <button
                  onClick={()=>settab(Items)}
                  className={`p-3 font-bold  rounded-lg ${tab===Items ? 'text-white bg-gradient-to-tr from-red-500 to-red-700 ' : "bg-zinc-200 text-black"} `}>{Items}</button>
                </div>
              )
            }
          )
        }
    </section>
  )
}
