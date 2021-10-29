import { useContext, useEffect, useState } from 'react';
import ShoppingCart from '../../contexts/ShoppingCart';

import '../../styles/shoppingCart.css';

const ShowShoppingCart = () => {
  const [totalShopping, setTotalShopping] = useState(0);
  const {shoppingCart} = useContext(ShoppingCart);

  useEffect(() => {
    setTotalShopping(
      shoppingCart.reduce((acc, current) => {
        return current.price + acc;
      }, 0)
    );
  }, [shoppingCart]);

  const handleDeleteProductFromShoppingCart = (dataProduct) => {
    console.log(dataProduct);
  };

  return (
    <div style={ {minWidth: '30vw', maxHeight: '80vh', overflow: 'auto'} }>
      <h3>Mis ordenesasdasd</h3>
      <div className="m-auto" style={ {width: '90%'} }>
        { shoppingCart &&
          shoppingCart.map( (shopping, index) =>
            <article
              key={ index }
              className="container-list"
            >
              <img src={ shopping.srcImage }
                style={ {
                  height: '3rem', width: '3rem',
                  objectFit: 'cover', borderRadius: '10px'
                } }
              />
              <span style={ {color: 'GrayText'} }>{ shopping.title }</span>
              <strong>${ shopping.price }</strong>
              <button type="button" className="button-delete-product"
                onClick={ () => handleDeleteProductFromShoppingCart(shopping) }
              >
                <i className="bi bi-x-circle"></i>
              </button>
            </article>
          )
        }
      </div>
      <div className="box-show-total fw-bold">
        <span>Total</span>
        <span>${ totalShopping }</span>
      </div>
    </div>
  );
};

export default ShowShoppingCart;