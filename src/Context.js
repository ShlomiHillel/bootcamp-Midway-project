import React, { useState, useReducer, useEffect} from 'react';
import reducer from './Components/Reducer'
import axios from 'axios'
import DataC from './DataC'

let cartItems =[
  { id: 1,
    pname: 'milk',
    pprice: 6,
   pimage: 'pic',
    amount: 1,
  },
];
const url = 'https://firebasestorage.googleapis.com/v0/b/bootcamp-midway-project.appspot.com/o/cart.json?alt=media&token=f05dbd9a-f4e1-4974-bf36-89e02aab9323';



const myContext = React.createContext();



let initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}






const MainProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cardShow, setCardShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);


// useState - showCard product info-------------------------------

  const toggleCardShow = () => {setCardShow(!cardShow)}

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

const recivedData =  () => {
  dispatch({ type: 'LOADING' })
  const routing = '1'
  const data =  routing;
  // const cart = data
  console.log('good');
  dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
}

  const cart= DataC 
  console.log('LOADING');

  const addToCart = (id, ProductName, pprice) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id,  ProductName, pprice } })
  }

const toggleAmount = (id, type) => {
  dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
}
useEffect(() => {recivedData()}, [])

useEffect(() => {dispatch({ type: 'GET_TOTALS' })}, [state.cart])



  return (
    <myContext.Provider value={{ cardShow, cartIsOpen, cOpen,cClose,
       ...state, clearCart, remove,addToCart, toggleAmount,}} >
      {children}
    </myContext.Provider>
  );
};
// costum hook - for now i dont like this way of work so i pass it
// export const useCostumContext = () => {
//   return useContext(myContext);
// };

export { myContext, MainProvider};