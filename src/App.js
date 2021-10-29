import {BrowserRouter, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Suspense, lazy} from 'react';

import { AuthProvider } from './contexts/Auth';
import { ShoppingCartProvider } from './contexts/ShoppingCart';
import PublicRoute from './components/router/PublicRouter';
import PrivateRouter from './components/router/PrivateRouter';
import SpinnerLoading from './components/common/SpinnerLoading';
import Header from './components/Header';

const Index = lazy(() => import('./pages/Index'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Home = lazy(() => import('./pages/Home'));

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
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Index />
                </Suspense>
              </PublicRoute>
              <PublicRoute exact path="/login">
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Login />
                </Suspense>
              </PublicRoute>
              <PublicRoute exact path="/register">
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Register />
                </Suspense>
              </PublicRoute>
              <PrivateRouter exact path="/home">
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Home />
                </Suspense>
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