import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from '../../components/button';
import Cards from '../../components/cards';
import MainContainer from '../../components/container/MainContainer';
import { TitleHeader } from '../../components/container/MainContainer.styles';
import TextInput from '../../components/textInput';
import {
  resetForm, setErrorMessage, setFormInValid, setIsLogin,
} from '../../reducers/loginSlice';
import { setUser } from '../../reducers/userSlice';

const ACCEPTED_USERNAME = 'upworkTest';
const ACCEPTED_PASSWORD = '2022';
function Login() {
  const { formInValid, errorMessage, isLogin } = useSelector((state) => state.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(resetForm());
    if (username !== ACCEPTED_USERNAME || password !== ACCEPTED_PASSWORD) {
      dispatch(setFormInValid(true));
      dispatch(setErrorMessage('Wrong password or username, please try again'));
      return;
    }

    dispatch(setUser({ username }));
    dispatch(setIsLogin(true));
  };

  const handleUsername = (e) => {
    dispatch(resetForm());
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    dispatch(resetForm());
    setPassword(e.target.value);
  };
  return (
    <MainContainer>
      <Cards>
        <TitleHeader>
          Sign in
        </TitleHeader>
        <TextInput value={username} onChange={handleUsername} placeholder="Username" type="text" />
        <TextInput value={password} onChange={handlePassword} placeholder="Password" type="password" error={formInValid && errorMessage} />
        <Button disabled={!username || !password} onClick={handleLogin} title="Sign in" style={{ marginTop: '50px' }} />
      </Cards>
    </MainContainer>

  );
}

export default Login;
