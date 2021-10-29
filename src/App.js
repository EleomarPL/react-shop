import {BrowserRouter, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import { AuthProvider } from './contexts/Auth';
import { ShoppingCartProvider } from './contexts/ShoppingCart';
import PublicRoute from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';
import Header from './components/Header';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';

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
          <main>
            <Switch>
              <PublicRoute exact path="/">
                <Index />
              </PublicRoute>
              <PublicRoute exact path="/login">
                <Login />
              </PublicRoute>
              <PublicRoute exact path="/register">
                <Register />
              </PublicRoute>
              <PrivateRouter exact path="/home">
                <p>Home</p>
              </PrivateRouter>
            </Switch>
          </main>
          <ToastContainer position="top-right"
            autoClose={ 5000 } hideProgressBar={ false }
            newestOnTop={ false } closeOnClick
            rtl={ false } pauseOnFocusLoss
            draggable={ false } pauseOnHover
          />
        </BrowserRouter>
      </ShoppingCartProvider>
    </AuthProvider>
  );
};

export default App;