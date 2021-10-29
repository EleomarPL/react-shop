import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = createContext({});

export const ShoppingCartProvider = ({ children }) => {

  const [shoppingCart, setShoppingCart] =
    useState(JSON.parse(window.localStorage.getItem('shoppingCart')) || []);
  return (
    <ShoppingCart.Provider value={ { shoppingCart, setShoppingCart } }>
      { children }
    </ShoppingCart.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShoppingCart;
