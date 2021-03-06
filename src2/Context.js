import React, { useState, useReducer, useEffect} from 'react';
import reducer from './Components/Reducer'
import axios from 'axios'


// let cartItems =[
//   { id: 1,
//     pName: 'Samsung Galaxy S7',
//     pPrice: 599.99,
//     Pimage:
//       ,
//     amount: 1,
//   },  {id: 2,
//     pName: 'google pixel ',
//     pPrice: 499.99,
//     Pimage:
//       ,
//     amount: 1,
//   },  {id: 3,
//     pName: 'Xiaomi Redmi Note 2',
//     pPrice: 699.99,
//     Pimage:
//       ,
//     amount: 1,
//   },
// ];
const url = 'https://course-api.com/react-useReducer-cart-project'
const myContext = React.createContext();

// const initialState = {
//   cart: getLocalStorage(),
//   total_items: 0,
//   total_amount: 0,
//   shipping_fee: 534,
// }



let initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}
const MainProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

// useState - cart---------------------------------
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
  const dataRecive = await axios.get(url)
  const cart = dataRecive.data
  console.log(cart)

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