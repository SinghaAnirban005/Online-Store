import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userStatus : false,
  userData: null,
  cart: [{
    id: 0,
    title: "",
    price: "",
    image: null
  }]
}

const authSlice = createSlice(
  {
    name: "auth",
    initialState,

    reducers: {
      login: (state, action) => {
        state.userStatus = true,
        state.userData = action.payload.userData
      },

      logout: (state, action) => {
      state.userStatus = false,
      state.userData = null
    },

      addToCart: (state, action) => {
        
        const data = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image
        }


        state.cart.push(data)
      }


  }
  }
)


export const {login, logout, addToCart} = authSlice.actions

export default authSlice.reducer