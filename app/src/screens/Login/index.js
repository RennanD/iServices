import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);

  async function handleLogin() {
    setLoad(!load);
    try {
      const response = await api.post('/auth/login', {
        email: user.email,
        password: user.password,
      });
      console.log(response.data);
      const {user: loggedUser} = response.data;
      console.log(loggedUser);
      await AsyncStorage.setItem('logged', loggedUser._id);
      await AsyncStorage.setItem('type',loggedUser.typeUser);

      setLoad(!load);
      if (loggedUser.typeUser === 'Client') return navigate('HomeClient');
      if (loggedUser.typeUser === 'Worker') navigate('HomeWorker');
    } catch (response) {
      setLoad(false);
      setError(response.data.error);
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
          {load ? (
            <ActivityIndicator color="#fefefe" size={22} />
          ) : (
            <TextButton>Entrar</TextButton>
          )}
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
