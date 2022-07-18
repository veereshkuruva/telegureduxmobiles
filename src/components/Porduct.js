
import React from 'react'
import Data from "./Data.json"
import { useDispatch } from 'react-redux'
import { incrementcart } from '../Redux/Reducer/CartSlice'
const Porduct = () => {
    
  const dispatch =useDispatch();

  return (
    <div className='container'>
      <div className='row'>
        {Data.products.map(ele=>
        <div className='col-md-3 ' key={ele.id}>
            <div className='card m-1' style={{width:"8rem",height:"20rem"}}>
            <img className='catd-img-top' src={ele.src} class="card-img-top" alt=".."/> 
            <p className='card-title'>{ele.name} | {ele.price}</p> 
            <button className='btn btn-primary'  onClick={()=>dispatch(incrementcart({
              productName:ele.name,
              productPrice:ele.price
            }))}>Add</button>  &nbsp;
            <button className='btn btn-primary' onClick={()=>dispatch(incrementcart({
              productName:ele.name,
              productPrice:ele.price
            }))}>Remove</button>
            </div>
           </div>
            )}
      </div>

    </div>
  )
}

export default Porduct;