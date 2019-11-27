import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const LogoContainer = styled.View`
    flex: 1;
`

export const InputsContainer = styled.View`
    flex: 2;
    padding: 20px;
    margin: 0 20px;
`

export const Input = styled.TextInput`
    width: 100%;
    height: 40px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #333;
    padding:0 15px;
`

export const LoginButton = styled.TouchableOpacity`
    width: 50%;
    align-self:center;
    padding: 15px;
    background: #1976d2;
    align-items: center;
    justify-content: center;

` 

export const TextButton = styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
`

export const ForgotPass = styled.TouchableOpacity`
    border: none;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: center;
`

export const ForgotText = styled.Text`
    font-size: 15px;
    color: #1976d2;
    font-weight: bold;
`

export const RegisterButton = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: center;
`
