import React,{ useContext} from 'react';
import CartItem from './CartItem'
import { myContext } from  '../Context'


const CartCon = () => {
  const { cart,cClose, total, clearCart, loading, cartIsOpen } = useContext(myContext)
  let showCart = cartIsOpen ? 'cover sshowCart' : 'cover'  ;

//loading-----------------------------------------
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
//no items in cart-------------------------------------
  if (cart.length === 0) {
    return (
      <section className='cart'>
        <button className='xcircle-btn' onClick={cClose}></button>
        {/* cart header */}
        <div><h2>your cart is currently empty</h2> </div>
      </section>
    )
  }

  return (
    <div className={showCart}> 
        <button className='xcircle-btn' onClick={cClose}>
        <i className="far fa-times-circle"></i>        
        </button>
      <span className={showCart} > <h2>your cart</h2> </span>
      
      
      <div className='cartunit'> {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      
      <footer className='cart-total' >
        <hr />  <div className='cart-total'>
          <h4>total <span>shekel{total}</span> </h4> 
        <button className='btn clear-btn' onClick={clearCart}> empy cart</button>
      </div>
      </footer>

    </div>
  )
}

export default CartCon;
