
// import React,{ useContext} from 'react';
// import { myContext } from '../Context'
// import CartCon from './CartCon'
// // items

// function CartShow() {
//   const { loading } = useContext(myContext)
//   if (loading) {
//     return (
//       <div className='loading'>
//         <h1>Loading...</h1>
//       </div>
//     )
//   }
//   return (
//     <main>
//       <CartCon />
//     </main>
//   )
// }

// export default CartShow;






// import React, {useState } from "react";


// const items = [
//   {
//     id: 1,
//     name: "milk",
//     pPrice: 3.5,
//     amount:0, 
//   },
//   {
//     id: 2,
//     name: "yogurt",
//     pPrice: 6.2,
//     amount:0,
//   },
//   {
//     id: 3,
//     name: "bread",
//     pPrice: 4.5,
//     amount:0,
//   },
// ];

// const Cart = (id,amount) => {
  
//   const [cart, setCart] = useState([]);
//   console.log(cart);
//   const TotalAmount = cart.reduce((total, { pPrice = 0 }) => total + pPrice, 0);

//   const increInCart = (item) => setCart((cartNow) => [...cartNow, item]);

//   const decInCart = (item) => {
//     setCart((cartNow) => {
//       const indexToDec = cartNow.findIndex((cartItem) => cartItem.id === item.id);
//       if (indexToDec === -1) {

//         return cartNow;
//       }

//       return [
//         ...cartNow.slice(0, indexToDec),
//         ...cartNow.slice(indexToDec + 1),
//       ];
//     });
//   };

//   const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  

//   const listItemsInCart = () => items.map((item) => (
//     <div key={item.id}>
//       ({amountOfItems(item.id)} x ${item.pPrice}) {`${item.name}`}
//       <button type="submit" onClick={() => decInCart(item)}>הפחת</button>
//       <button type="submit" onClick={() => increInCart(item)}>הוסף</button>
//     </div>
//   ));

//   return (
      
//     <div>
//         <div>.</div><div>.</div><div>.</div><div>.</div><div>.</div><div>.</div>
//         <span></span>
//         <div>.</div>
//         <div>.</div>
//         <div>CART</div>
//         <div>{listItemsInCart()}</div>
//         <div>Total: ${TotalAmount}</div>
//         <div>
//             <button onClick={() => setCart([])}>אפס</button>
//         </div>
//     </div>
//   );
// };

// export default Cart;
