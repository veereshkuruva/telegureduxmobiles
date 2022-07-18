import { createSlice } from "@reduxjs/toolkit";


const initialState={
   cartValues:[],
   totalPrice:0
}

export const CartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        incrementcart:(state,action)=>{
            state.cartValues.push(action.paylaod)
            const priceArray = state.cartValues.map(obj => obj.productPrice)
            state.totalPrice=priceArray.reduce((a,b)=>a+b)
        },
        decrement:(state,action)=>{
            const index=state.cartValues.findIndex(obj=>obj.productName===action.payload.ele);
            (index>-1);{
                state.cartValues.splice(index,1);
            }
         
            const priceArray = state.cartValues.map(obj => obj.productPrice)
            state.totalPrice=priceArray.reduce((a,b)=>a+b)
        }

        
    }
})

export const {incrementcart,decrement} =CartSlice.actions;
export default CartSlice.reducer