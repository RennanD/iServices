import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fefefe;
  justify-content: space-around;
`;

export const Conntent = styled.KeyboardAvoidingView`
  justify-content: space-around;
  padding: 50px 20px;
`;
export const Header = styled.View`
  height: 40px;
  background: #fefefe;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 22px;
`;
export const Input = styled.TextInput`
  padding: 15px;
  border-style: solid;
  border-color: #ddd;
  border-bottom-width: 2px;
`;

export const MeetInput = styled.TextInput`
  padding: 15px;
  width: 45%;
  border-style: solid;
  border-color: #ddd;
  border-bottom-width: 2px;
`;

export const RowInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonView = styled.View`
  padding: 10px;
  margin-top: 30px;
`;
export const RegisterButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 7px;
  background: #1976d2;
`;
export const CancelButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 15px;
  border-radius: 7px;
  background: #dc3545;
  align-items: center;
  justify-content: center;
`;
export const TextButton = styled.Text`
  color: #fefefe;
  font-weight: bold;
  font-size: 20px;
`;
