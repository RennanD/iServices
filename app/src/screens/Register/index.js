import React, {useState} from 'react';
import { ActivityIndicator } from 'react-native'

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
} from './styles';
import api from '../../service/api';

export default function Register({navigation}) {

  const { navigate } = navigation
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
    typeUser: 'Client'
  })
  const  [advance, setAdvance] = useState(false) 
  const [load, setLoad] = useState(false)
  
  async function handleRegister() {
    setLoad(!load)

    try {
      console.log(user);
      await api.post('/auth/register', user)

      setLoad(!load)
      navigate('Home')
    } catch (error) { 
      console.log(error);
      setLoad(false)
    }

  }

  return (
    <Container>
      <Header>
        <Title>Cliente</Title>
      </Header>

      {!advance ? (
        <Conntent>
          <Input 
            placeholder = "Nome"
            value = {user.name}
            onChangeText = {name => setUser({...user, name})}
          />
          <Input 
            placeholder = "E-mail"
            value = {user.email}
            onChangeText = {email => setUser({...user, email})}
          />
          <Input 
            placeholder = "Telefone"
            value = {user.phone}
            onChangeText = {phone => setUser({...user, phone})}
          />
          <Input 
            placeholder = "Cpf"
            value = {user.cpf}
            onChangeText = {cpf => setUser({...user, cpf})}
          />

          <RowInput>
            <MeetInput 
              placeholder = "Senha"
              secureTextEntry
              value = {user.password}
              onChangeText = {password => setUser({...user, password})}
            />
            <MeetInput 
              placeholder = "Confirmar"
              secureTextEntry
              value = {user.passConfim}
              onChangeText = {passConfirm => setUser({...user, passConfirm})}
            />
          </RowInput>
          <ButtonView>
            <RegisterButton onPress = {() => setAdvance(true)} >
              <TextButton>Avançar</TextButton>
            </RegisterButton>
            <CancelButton onPress = {() => navigate('Login')}>
              <TextButton>Cancelar</TextButton>
            </CancelButton>
          </ButtonView>
          
        </Conntent>
      ) : (
        <Conntent>
        <Input 
          placeholder = "CEP"
          value = {user.zipcode}
          onChangeText = {zipcode => setUser({...user, zipcode})}
        />

        <RowInput>
          <MeetInput 
            placeholder = "Cidade"
            value = {user.city}
            onChangeText = {city => setUser({...user, city})}
          />
          <MeetInput 
            placeholder = "Bairro"
            value = {user.neighborhood}
            onChangeText = {neighborhood => setUser({...user, neighborhood})}
          />
        </RowInput>

        <RowInput>
          <MeetInput 
            placeholder = "Rua"
            value = {user.street}
            onChangeText = {street => setUser({...user, street})}
          />
          <MeetInput 
            placeholder = "Número"
            value = {user.number}
            onChangeText = {number => setUser({...user, number})}
          />
        </RowInput>
          <ButtonView>
            <RegisterButton onPress = {handleRegister} >
              {load ? <ActivityIndicator color = "#fefefe" size = {22} /> : <TextButton>Cadastrar</TextButton>}
            </RegisterButton>
            <CancelButton onPress = {() => navigate('Login')}>
              <TextButton>Cancelar</TextButton>
            </CancelButton>
          </ButtonView>
        </Conntent>
      )
      }
    </Container>
  );
}
