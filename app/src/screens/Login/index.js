import React, {useState, useEffect} from 'react';

import {
  Container,
  LogoContainer,
  ForgotText,
  ForgotPass,
  Input,
  InputsContainer,
  LoginButton,
  RegisterButton,
  TextButton,
  Error,
} from './styles';
import api from '../../service/api';

export default function Login({navigation}) {
  const {navigate} = navigation;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 4000);
  }, [error]);

  async function handleLogin() {
    try {
      await api.post('/auth/login', {
        email: user.email,
        password: user.password,
      });
      navigate('Home');
    } catch (response) {
      setError('Erro');
    }
  }

  return (
    <Container behavior="padding">
      <LogoContainer />
      <InputsContainer>
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          value={user.email}
          onChangeText={email => setUser({...user, email})}
        />
        <Input
          placeholder="Senha"
          autoCapitalize="none"
          value={user.password}
          onChangeText={password => setUser({...user, password})}
          secureTextEntry
        />
        {!!error && <Error>{error}</Error>}
        <LoginButton onPress={handleLogin}>
          <TextButton>Entrar</TextButton>
        </LoginButton>

        <ForgotPass>
          <ForgotText>Esqueci minha senha.</ForgotText>
        </ForgotPass>

        <RegisterButton onPress={() => navigate('RegisterNav')}>
          <TextButton>Cadastrar-se</TextButton>
        </RegisterButton>
      </InputsContainer>
    </Container>
  );
}
