import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], 
    count : 0,// Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name,image,cost} =  action.payload;
     const existeditem = state.items.find((item) => item.name === name);
     if (existeditem){
      existeditem.quantity++;
     }else{
      state.items.push({name,image,cost,quantity:1});
      state.count+=1
     }
    
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
      if(state.count>0){
        state.count-=1
      }
    },
    updateQuantity: (state, action) => {
      const {name,quantity} = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate){
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
