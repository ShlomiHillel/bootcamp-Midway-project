import React, { useState, useReducer, useEffect} from 'react';
import reducer from './Components/Reducer'



let initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}
const MainProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
// useState - cart-------------------------------
  const cOpen = () => {setCartIsOpen(true);};
    const cClose = () => { setCartIsOpen(false);};
// useReducer - cart-------------------------------
const clearCart = () => {
  dispatch({ type: 'CLEAR_CART' })
}
const remove = (id) => {
  dispatch({ type: 'REMOVE', payload: id })
}
const increase = (id) => {
  dispatch({ type: 'INCREASE', payload: id })
}
const decrease = (id) => {
  dispatch({ type: 'DECREASE', payload: id })
}
const fetchData = async () => {
  dispatch({ type: 'LOADING' })
  const response = await fetch(url)
  const cart = await response.json()

  dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
}
const toggleAmount = (id, type) => {
  dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
}
useEffect(() => {
  fetchData()
}, [])

useEffect(() => {
  dispatch({ type: 'GET_TOTALS' })
}, [state.cart])



  return (
    <myContext.Provider value={{ cartIsOpen, cOpen,cClose,
       ...state, clearCart, remove,increase, decrease, toggleAmount,}} >
      {children}
    </myContext.Provider>
  );
};
// costum hook - for now i dont like this way of work so i pass it
// export const useCostumContext = () => {
//   return useContext(myContext);
// };

export { myContext, MainProvider};