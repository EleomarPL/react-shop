import { useState } from 'react';

import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({username, password});
  };

  return (
    <section className="d-flex justify-content-center">
      <div className="px-4 container-login">
        <strong className="d-flex justify-content-center" style={ {fontSize: '2rem'} }>Iniciar Sesión</strong>
        <div className="input-group flex-column mb-2 mt-2">
          <label htmlFor="user" id="addon-wrapping">Usuario</label>
          <input type="text" className="form-control w-100"
            placeholder="Username: username" id="user"
            value={ username } onChange={ (evt) => setUsername(evt.target.value) }
          />
        </div>
        <div className="input-group flex-column mb-2">
          <label htmlFor="password" id="addon-wrapping">Contraseña</label>
          <input type="password" className="form-control w-100"
            placeholder="Password: password" id="password"
            value={ password } onChange={ (evt) => setPassword(evt.target.value) }
          />
        </div>
        <div className="d-flex justify-content-center mb-2">
          <button type="button" className="btn btn-primary media-button-login"
            style={ {fontSize: '1.3rem'} } onClick={ handleLogin }
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;