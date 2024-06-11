
import './Popular.css'
import data_product from '../Assets/data'
import  Item  from '../Item/Item'


import React from 'react'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR </h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>





  )
}

export default Popular



//divied by ages
//shop to change aaccording to ages
//tiny tales wwonderland

