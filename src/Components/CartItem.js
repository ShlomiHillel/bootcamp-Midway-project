import React,{useContext} from 'react';
import { myContext } from  '../Context'

const CartItem = ({ id,  pname, pprice, amount }) => {
  const { remove,  toggleAmount } = useContext(myContext)
  return (

    
    
    <article className='cart-item'>
      {/* <img src={pimage} alt={pname} /> */}
      <div>
        <h4>{pname}</h4>
        <h4 className='item-pPrice'> {pprice} new shekel</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}> plus</button>
        {/* amount */}
        <p className='amount'> quantity: {amount} </p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>minus</button>
      </div>
    </article>
  )
}

export default CartItem