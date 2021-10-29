import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import useLogin from '../../hooks/useLogin';

const OptionUserDropdown = ({email}) => {
  const {logout} = useLogin();

  return (
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
            onClick={ logout }
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

OptionUserDropdown.propTypes = {
  email: PropTypes.string.isRequired
};

export default OptionUserDropdown;