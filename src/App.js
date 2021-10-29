import {BrowserRouter, Switch} from 'react-router-dom';

import { AuthProvider } from './contexts/Auth';
import { ShoppingCartProvider } from './contexts/ShoppingCart';
import PublicRoute from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';
import Header from './components/Header';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';

const App = () => {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <PublicRoute exact path="/">
              <p>Introduction</p>
            </PublicRoute>
            <PublicRoute exact path="/login">
              <p>Login</p>
            </PublicRoute>
            <PublicRoute exact path="/register">
              <p>Register</p>
            </PublicRoute>
            <PrivateRouter exact path="/home">
              <p>Home</p>
            </PrivateRouter>
          </Switch>
        </BrowserRouter>
      </ShoppingCartProvider>
    </AuthProvider>
  );
};

export default App;