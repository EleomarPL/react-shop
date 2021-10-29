import { useContext } from 'react';
import { notifyInfo } from '../const/notifications';
import AuthContext from '../contexts/Auth';

const useLogin = () => {
  const {setUserData} = useContext(AuthContext);

  const login = ({username, password}) => {
    if (username === 'username' && password === 'password') {
      setUserData({username, password});
      window.localStorage.setItem('datauser', JSON.stringify({
        username, password
      }));
    } else
      notifyInfo('Usuario y/o contraseña no validos');
  };

  return {
    login
  };
};

export default useLogin;