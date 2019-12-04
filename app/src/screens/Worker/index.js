import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../service/api';
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
  UploadButton,
  TextUpload,
  PikerWork,
} from './styles';

import {CPFInput, PhoneInput, ZipCode, Info} from '../Register/styles';
import {Error} from '../Login/styles';

export default function Worker({navigation}) {
  const {navigate} = navigation;
  const [advance, setAdvance] = useState(false);
  const [workAt, setWorkAt] = useState();
  const [works, setWorks] = useState([]);
  const [error, setError] = useState();
  const [workSelect, setWorkSelect] = useState('Selecione uma categoria');
  const [load, setLoad] = useState(false);
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
    typeUser: 'Worker',
    description: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);

  useEffect(() => {
    async function loadWorks() {
      try {
        const response = await api.get('/works');

        const {data} = response;

        setWorks(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadWorks();
  }, []);

  async function handleRegister() {
    setLoad(!load);

    try {
      const response = await api.post('/auth/register', user);

      await api.post(`/works/${workAt}/user`, {
        user_id: response.data.user._id,
      });
      await AsyncStorage.setItem('logged', response.data.user._id);
      await AsyncStorage.setItem('type', response.data.user.typeUser);
      setLoad(!load);
      navigate('HomeWorker');
    } catch (response) {
      setLoad(false);

      setError(response.data.error);
    }
  }

  function handleChangePiker(item, label) {
    setWorkSelect(item);
    setWorkAt(item);
  }

  return (
    <Container>
      <Header></Header>

      {!advance ? (
        <Conntent>
          <Title>Cadastro de Prestador de Serviços</Title>
          <Info>Todos os campos são obrigatórios</Info>

          <Input
            placeholder="Nome"
            value={user.name}
            onChangeText={name => setUser({...user, name})}
          />
          <Input
            placeholder="E-mail"
            value={user.email}
            autoCapitalize="none"
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
          <Input
            placeholder="Descrição"
            value={user.description}
            onChangeText={description => setUser({...user, description})}
          />
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
          <PikerWork
            selectedValue={workSelect}
            onValueChange={(item, itemValue) =>
              handleChangePiker(item, itemValue)
            }>
            {works &&
              works.map(work => (
                <PikerWork.Item
                  key={work._id}
                  label={work.name}
                  value={work._id}
                />
              ))}
          </PikerWork>

          <ButtonView>
            {!!error && <Error> {error} </Error>}

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
