import { AuthProvider } from './contexts/Auth';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto';
import 'react-toastify/dist/ReactToastify.css';

import './styles/index.css';
import { ShoppingCartProvider } from './contexts/ShoppingCart';

const App = () => {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        
      </ShoppingCartProvider>
    </AuthProvider>
  );
};

export default App;