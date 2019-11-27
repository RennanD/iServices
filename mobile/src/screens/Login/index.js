import React from 'react';

import { Container, LogoContainer,ForgotText,ForgotPass,Input,InputsContainer,LoginButton,RegisterButton,TextButton } from './styles';

export default function Login() {
  return (
    <Container>
        <LogoContainer>

        </LogoContainer>
        <InputsContainer>
            <Input />
            <Input />

            <LoginButton>
                <TextButton></TextButton>
            </LoginButton>

            <ForgotPass>
                <ForgotText></ForgotText>
            </ForgotPass>

            <RegisterButton>
                <TextButton></TextButton>
            </RegisterButton>
        </InputsContainer>
    </Container>
  );
}
