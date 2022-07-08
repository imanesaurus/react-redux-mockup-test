import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { HomeLayout } from './layout/HomeLayout';
import { LoginLayout } from './layout/LoginLayout';

function App() {
  const { isLogin } = useSelector((state) => state.user);

  return (
    <Fragment>

      {
        isLogin ? (
          <HomeLayout />
        ) : (
          <LoginLayout />
        )
      }
    </Fragment>
  );
}

export default App;
