import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Header,
  Title,
  RowInput,
  Input,
  ButtonView,
  RegisterButton,
  CancelButton,
  TextButton,
  MeetInput,
  Conntent,
  CPFInput,
  PhoneInput,
  ZipCode,
  Info,
} from './styles';
import api from '../../service/api';
import {Error} from '../Login/styles';

export default function Register({navigation}) {
  const {navigate} = navigation;
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
    passConfirm: '',
    zipcode: '',
    city: '',
    neighborhood: '',
    number: '',
    street: '',
    typeUser: 'Client',
  });
  const [advance, setAdvance] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);

  async function handleRegister() {
    setLoad(!load);

    try {
      console.log(user);
      const response = await api.post('/auth/register', user);

      await AsyncStorage.setItem('logged', response.data.user._id);
      await AsyncStorage.setItem('type', response.data.user.typeUser);

      setLoad(!load);
      navigate('HomeClient');
    } catch (response) {
      setLoad(false);
      setError(response.data.error);
    }
  }

  return (
    <Container>
      <Header />
      {!advance ? (
        <Conntent>
          
          <Title>Cadastro de cliente</Title>
          <Info>Todos os campos são obrigatórios</Info>
          <Input
            placeholder="Nome"
            value={user.name}
            onChangeText={name => setUser({...user, name})}
          />
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            value={user.email}
            onChangeText={email => setUser({...user, email})}
          />
          <PhoneInput
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            placeholder="Telefone"
            value={user.phone}
            onChangeText={phone => setUser({...user, phone})}
          />
          <CPFInput
            type={'cpf'}
            placeholder="Cpf"
            value={user.cpf}
            onChangeText={cpf => setUser({...user, cpf})}
          />

          <RowInput>
            <MeetInput
              placeholder="Senha"
              secureTextEntry
              autoCapitalize="none"
              value={user.password}
              onChangeText={password => setUser({...user, password})}
            />
            <MeetInput
              placeholder="Confirmar"
              secureTextEntry
              autoCapitalize="none"
              value={user.passConfirm}
              onChangeText={passConfirm => setUser({...user, passConfirm})}
            />
          </RowInput>
          <ButtonView>
            <RegisterButton onPress={() => setAdvance(true)}>
              <TextButton>Avançar</TextButton>
            </RegisterButton>
            <CancelButton onPress={() => navigate('Login')}>
              <TextButton>Cancelar</TextButton>
            </CancelButton>
          </ButtonView>
        </Conntent>
      ) : (
        <Conntent>
          <ZipCode
            type={'zip-code'}
            placeholder="CEP"
            value={user.zipcode}
            onChangeText={zipcode => setUser({...user, zipcode})}
          />

          <RowInput>
            <MeetInput
              placeholder="Cidade"
              value={user.city}
              onChangeText={city => setUser({...user, city})}
            />
            <MeetInput
              placeholder="Bairro"
              value={user.neighborhood}
              onChangeText={neighborhood => setUser({...user, neighborhood})}
            />
          </RowInput>

          <RowInput>
            <MeetInput
              placeholder="Rua"
              value={user.street}
              onChangeText={street => setUser({...user, street})}
            />
            <MeetInput
              placeholder="Número"
              value={user.number}
              onChangeText={number => setUser({...user, number})}
            />
          </RowInput>
          <ButtonView>
            {!!error && <Error>{error}</Error>}

            <RegisterButton onPress={handleRegister}>
              {load ? (
                <ActivityIndicator color="#fefefe" size={22} />
              ) : (
                <TextButton>Cadastrar</TextButton>
              )}
            </RegisterButton>
            <RegisterButton onPress={() => setAdvance(false)}>
              <TextButton>Voltar</TextButton>
            </RegisterButton>
            <CancelButton onPress={() => navigate('Login')}>
              <TextButton>Cancelar</TextButton>
            </CancelButton>
          </ButtonView>
        </Conntent>
      )}
    </Container>
  );
}
