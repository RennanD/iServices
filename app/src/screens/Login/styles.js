import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const LogoContainer = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputsContainer = styled.View`
  flex: 1;
  padding: 30px 20px;
  margin: 0 20px;
  justify-content: space-around;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: 100%;
  height: 40px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #333;
  padding: 0 15px;
  margin-bottom: 20px;
  font-size: 18px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 60%;
  align-self: center;
  padding: 10px;
  background: #1976d2;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ForgotPass = styled.TouchableOpacity`
  border: none;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const Error = styled.Text`
  font-size: 14px;
  color: #dc3545;
  margin: 10px;
  text-align: center;
`;

export const ForgotText = styled.Text`
  font-size: 15px;
  color: #1976d2;
  font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: #1976d2;
  border-radius: 5px;
`;
