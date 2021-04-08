import React,{useContext} from 'react';
import { myContext } from  '../Context'

const CartItem = ({ id, image, pName, pPrice, amount }) => {
  const { remove, toggleAmount } = useContext(myContext)
  return (
    <article className='cart-item'>
      <img src={image} alt={pName} />
      <div>
        <h4>{pName}</h4>
        <h4 className='item-pPrice'>₪{pPrice}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>הפחת</button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>הוסף</button>
      </div>
    </article>
  )
}

export default CartItem