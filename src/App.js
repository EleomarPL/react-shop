import {BrowserRouter, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Suspense, lazy} from 'react';
import Helmet from 'react-helmet';

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
                  <Helmet>
                    <title>Inicio | YardSale</title>
                    <meta name="description" content="Sitio web venta de garaje manipulando rutas, aplicando operaciones con variables estáticas (volatiles)." />
                  </Helmet>
                  <Index />
                </Suspense>
              </PublicRoute>
              <PublicRoute exact path="/login">
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Helmet>
                    <title>Iniciar Sesión | YardSale</title>
                    <meta name="description" content="Inicia sesión para poder ver el tablero para consumir una API que devuelve datos aleatorios simulando productos." />
                  </Helmet>
                  <Login />
                </Suspense>
              </PublicRoute>
              <PublicRoute exact path="/register">
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Helmet>
                    <title>Registrarse | YardSale</title>
                    <meta name="description" content="Regístrate para comprobar el funcionamiento del formulario, estos datos solo se validan mas no se guardan." />
                  </Helmet>
                  <Register />
                </Suspense>
              </PublicRoute>
              <PrivateRouter exact path="/home">
                <Suspense fallback={ <SpinnerLoading /> }>
                  <Helmet>
                    <title>Yard Sale</title>
                    <meta name="description" content="Sitio web venta de garaje mostrando productos aleatorios filtrando también por categorías y poder agregar productos al carrito." />
                  </Helmet>
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