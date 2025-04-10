import React from 'react'
import { CAROUSEL_DATA } from '../../Apis/StaticApis'

function SearchProudctShown({product}) {
    // console.log(product.image,"my product")
  return (
    <section>
    {product && (
        <div className='flex flex-col items-start  sm:flex-col sm:items-start md:flex-row md:items-center gap-3.5 hover:bg-[#f2f6fc] py-2'>
      <div className='w-20 h-20 rounded-xl'>
        <img className='w-full h-full object-cover rounded-xl ' src={product?.image} alt="" />
      </div>
        <span>
            <h2>{product?.title}</h2>
        </span>
      </div>
    )}
     
    
    </section>
  )
}

export default SearchProudctShown
