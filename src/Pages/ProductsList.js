import React,{ useContext} from 'react';
import { myContext } from  '../Context'
import DataB from '../DataB';

 
const ProductsList = () => {
  const { addToCart } = useContext (myContext)

  
 
    
    return (


        <div>
            <h1> hi, i am list</h1>
        
            
      
            <div> 

              {DataB.map((item) => {

            return (

              <div className= "gridi">

              <div className= "ui grid" >
              <div className ="four wide column">
             
              <h3>{item.BrandName}</h3>
              <h1 >{item.ProductName} </h1>
             <h3><i class="spinner loading icon"></i></h3> <img class="ui medium bordered image" src={`public/Assets/pro/${item.id}.jpg`} alt={''} width={50}></img>
              <button type ='submit' onClick={() => addToCart(DataB.id, DataB.ProductName, DataB.pprice )}> add to cart</button>    
              </div>
            </div>
            </div>
            )
              })}
            </div>
         </div> 
        
    );
}

export default ProductsList;


// const GridView = ({ products }) => {
//   return (
//     <Wrapper>
//       <div className='products-container'>
//         {products.map((product) => {
//           return <Product key={product.id} {...product} />
//         })}
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`
//   img {
//     height: 175px;
//   }

//   .products-container {
//     display: grid;
//     gap: 2rem 1.5rem;
//   }

//   @media (min-width: 992px) {
//     .products-container {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
//   @media (min-width: 1170px) {
//     .products-container {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
// `
