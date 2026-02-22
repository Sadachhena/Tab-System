import React, { useState } from 'react'
import { data } from '../Data/Data';

export default function Tab() {
  let [tab,settab]=useState("ALL");
  let Array=["ALL",'Fruits','Vegetables','Meat','Butter']

  
  let FilteredItems = tab==="ALL" 
    ? data 
    : data.filter(itemData=>itemData.Category===tab)

  
  let Data=FilteredItems.slice(0,8).map(
    (itemsData,i)=>{
      return(
        <div key={i} className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden'>
          
          <div className='w-full h-48 overflow-hidden'>
            <img 
              src={itemsData.Image} 
              alt={itemsData.Name}
              className='w-full h-full object-cover hover:scale-110 transition duration-300'
            />
          </div>

          <div className='p-4 text-center'>
            <h2 className='text-lg font-bold text-gray-800'>
              {itemsData.Name}
            </h2>
          </div>

        </div>
      )
    }
  )

  return (
    <div className='max-w-[1400px] mx-auto px-10 py-10'>

     <h1 className='text-center font-bold mb-10 text-4xl'>TABBING</h1>

      <section className='flex flex-wrap gap-4 justify-center mb-10'>
        {
          Array.map((Items,i)=>{
            return(
              <div key={i}>
                <button
                  onClick={()=>settab(Items)}
                  className={`px-6 py-2 font-bold rounded-full transition duration-300 ${
                    tab===Items 
                    ? 'text-white bg-gradient-to-tr from-red-500 to-red-700 shadow-lg'
                    : "bg-zinc-200 text-black hover:bg-red-100"
                  }`}
                >
                  {Items}
                </button>
              </div>
            )
          })
        }
      </section>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {Data}
      </div>

    </div>
  )
}