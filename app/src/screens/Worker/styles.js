import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
  justify-content: space-between;
`;

export const Conntent = styled.View`
  justify-content: space-between;
  padding: 20px;
`;
export const Header = styled.View`
  height: 40px;
  background: #fefefe;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
`;
export const Input = styled.TextInput`
  padding: 7px;
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
  padding: 0 10px;
  margin-top: 10px;
`;
export const RegisterButton = styled.TouchableOpacity`
  margin-top: 7px;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border-radius: 7px;
  background: #1976d2;
`;
export const CancelButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 7px;
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

export const UploadButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 50%;
  padding: 7px;
  border-radius: 7px;
  background: #28a745;
`;
export const TextUpload = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fefefe;
`;

export const PikerWork = styled.Picker`
  height: 50px;
  width: 100%;
`;
