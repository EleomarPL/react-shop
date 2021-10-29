import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../contexts/Auth';
import ShowShoppingCart from './views/ShowShoppingCart';
import OptionUserDropdown from './views/OptionUserDropdown';

const Header = () => {
  const {userData} = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={ require('../img/logo.svg').default } />
        </NavLink>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { userData !== null
            ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home"
                  exact
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home?Clothes"
                  exact
                >
                  Clothes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home?Electronics"
                  exact
                >
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home?Furniture"
                  exact
                >
                  Furnitures
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home?Toys"
                  exact
                >
                  Toys
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home?Others"
                  exact
                >
                  Others
                </NavLink>
              </li>
            </ul>
            : <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/"
                  activeClassName="active-header" exact
                >
                  Inicio
                </NavLink>
              </li>
            </ul>
          }
          { userData === null
            ? <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/register"
                  activeClassName="active-header"
                >
                  Registrarse
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login"
                  activeClassName="active-header"
                >
                  Login
                </NavLink>
              </li>
            </ul>
            : <OptionUserLogged email={ 'eleomarpedrolorenzo@gmail.com' } />
          }
        </div>
      </div>
    </nav>
  );
};

const OptionUserLogged = ({email}) => {
  return (
    <>
      <OptionUserDropdown email={ email } />
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button" id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={ {border: 'none', backgroundColor: 'transparent'} }
        >
          <i style={ {fontSize: '1.5rem'} } className="bi bi-cart-fill"></i>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-lg-end text-center w-auto"
          aria-labelledby="dropdownMenuButton"
          style={ {fontSize: '1.1rem'} }
        >
          <ShowShoppingCart />
        </ul>
      </div>
    </>
  );
};

OptionUserLogged.propTypes = {
  email: PropTypes.string.isRequired
};

export default Header;