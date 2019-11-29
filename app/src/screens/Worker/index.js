import React from 'react';

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

export default function Worker() {
  return (
    <Container behavior="padding">
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Conntent>
        <Input />
        <Input />
        <Input />

        <RowInput>
          <MeetInput />
          <MeetInput />
        </RowInput>

        <Input />

        <RowInput>
          <MeetInput />
          <MeetInput />
        </RowInput>

        <ButtonView>
          <RegisterButton>
            <TextButton>Cadastrar</TextButton>
          </RegisterButton>
          <CancelButton>
            <TextButton>Cancelar</TextButton>
          </CancelButton>
        </ButtonView>
      </Conntent>
    </Container>
  );
}
