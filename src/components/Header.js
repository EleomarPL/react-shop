import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../contexts/Auth';

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
                <NavLink className="nav-link" to="/home/all"
                  activeClassName="active-header"
                >
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/clothes"
                  activeClassName="active-header"
                >
                  Clothes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home/electronics"
                  activeClassName="active-header"
                >
                  Electronics
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
      <div className="dropdown">
        <button
          className="dropdown-toggle button-user"
          type="button" id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={ {border: 'none', backgroundColor: 'transparent'} }
        >
          { email }
        </button>
        <ul
          className="dropdown-menu dropdown-menu-lg-end text-center px-3 w-100"
          aria-labelledby="dropdownMenuButton2"
          style={ {fontSize: '1.1rem'} }
        >
          <li><i className="bi bi-person-circle" style={ {fontSize: '2.5rem'} }></i></li>
          <li className="pb-2">
            <NavLink
              to={ '/home/settings' }
              exact
              className="btn btn-primary w-100"
            >
              <i className="bi bi-gear"> </i>
              Mis Ordenes
            </NavLink>
          </li>
          <li className="pb-2">
            <NavLink
              to={ '/home/history' }
              exact
              className="btn btn-secondary w-100"
            >
              <i className="bi bi-clock-history"> </i>
              Mi cuenta
            </NavLink>
          </li>
          <li><hr className="dropdown-divider" /></li>
          <li>
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={ () => {} }
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
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
          className="dropdown-menu dropdown-menu-lg-end text-center px-3"
          aria-labelledby="dropdownMenuButton"
          style={ {fontSize: '1.1rem'} }
        >
          <p>Dashboard</p>
        </ul>
      </div>
    </>
  );
};

OptionUserLogged.propTypes = {
  email: PropTypes.string.isRequired
};

export default Header;