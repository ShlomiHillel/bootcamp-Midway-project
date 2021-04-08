import React, { useState, useReducer, useEffect} from 'react';
import reducer from './Components/Reducer'
import axios from 'axios'


let cartItems =[
  { id: 1,
    pName: 'milk',
    pPrice: 6,
    Pimage:   'pic',
    amount: 1,
  },
];
const url = 'https://606d503a603ded00175035e8.mockapi.io/cart'
const myContext = React.createContext();



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

const fetchData = async () => {
  dispatch({ type: 'LOADING' })
  const data = await axios(url)
  const cart = data.data
  console.log(data);


  dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
}
const toggleAmount = (id, type) => {
  dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
}
useEffect(() => {fetchData()}, [])

useEffect(() => {dispatch({ type: 'GET_TOTALS' })}, [state.cart])



  return (
    <myContext.Provider value={{ cartIsOpen, cOpen,cClose,
       ...state, clearCart, remove, toggleAmount,}} >
      {children}
    </myContext.Provider>
  );
};
// costum hook - for now i dont like this way of work so i pass it
// export const useCostumContext = () => {
//   return useContext(myContext);
// };

export { myContext, MainProvider};