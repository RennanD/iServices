import React, {useState} from 'react';

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
  UploadButton
} from './styles';

export default function Worker({navigation}) {

  const { navigate } = navigation
  const  [advance, setAdvance] = useState(false) 

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      {!advance ? (
        <Conntent>
          <Input 
            placeholder = "Nome"
          />
          <Input 
            placeholder = "E-mail"
          />
          <Input 
            placeholder = "Cpf"
          />

          <RowInput>
            <MeetInput 
              placeholder = "Senha"
            />
            <MeetInput 
              placeholder = "Confirmar"
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
        />

        <RowInput>
          <MeetInput 
            placeholder = "Cidade"
          />
          <MeetInput 
            placeholder = "Bairro"
          />
        </RowInput>

        <RowInput>
          <MeetInput 
            placeholder = "Rua"
          />
          <MeetInput 
            placeholder = "Número"
          />
        </RowInput>
        <Input />
        <UploadButton>
          <TextButton>Enviar documentos</TextButton>
        </UploadButton>
          <ButtonView>
            <RegisterButton>
              <TextButton>Cadastrar</TextButton>
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
