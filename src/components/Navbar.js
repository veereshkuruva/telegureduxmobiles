import React from 'react'
import { useSelector } from 'react-redux/es/exports';
const Navbar = () => {
  const cartCount =useSelector(state=>state.CartSlice.cartValues.length)
  const totalPrice =useSelector(state=>state.CartSlice.totalPrice)
  return (
    <div>
       <nav className='navbar navbar-dark bg-dark'>
        <div className='d -inline p-2 navbar-nav mx-auto'>
            <span className='btn btn-primary'>Add cart : {cartCount}</span> &nbsp;
            <span className='btn btn-primary'>Total price :{totalPrice}</span>
        </div>
       </nav>
    </div>
  )
}

export default Navbar;