import React,{useContext} from 'react';
import { myContext } from  '../Context'

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove,  toggleAmount } = useContext(myContext)
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}> minus</button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>plus</button>
      </div>
    </article>
  )
}

export default CartItem