import { useContext } from 'react';

import { notifySuccess } from '../const/notifications';
import ShoppingCart from '../contexts/ShoppingCart';

const useShoppingCart = () => {
  const {shoppingCart, setShoppingCart} = useContext(ShoppingCart);

  const addProductToCart = ({id, srcImage, title, price}) => {
    const updateShoppingCart = [
      ...shoppingCart,
      {id, srcImage, title, price}
    ];
    setShoppingCart(updateShoppingCart);
    window.localStorage.setItem('shoppingCart', JSON.stringify(updateShoppingCart));

    notifySuccess('Agregado al carrito');
  };
  const deleteProductFromCart = (id, index) => {
    const updateShoppingCart = shoppingCart.filter((product, thisIndex) =>
      product.id !== id || thisIndex !== index
    );

    setShoppingCart(updateShoppingCart);
    window.localStorage.setItem('shoppingCart', JSON.stringify(updateShoppingCart));

    notifySuccess('Producto Eliminado');
  };

  return {
    addProductToCart, deleteProductFromCart
  };
};

export default useShoppingCart;