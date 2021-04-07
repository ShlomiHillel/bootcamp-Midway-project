import React,{ useContext} from 'react';
import CartItem from './CartItem'
import { myContext } from  '../Context'

const CartCon = () => {
  const { cart, total, clearCart } = useContext(myContext)
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header><h2>your bag</h2><h4 className='empty-cart'>is currently empty,  fill it-___</h4> </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>₪{total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartCon;
