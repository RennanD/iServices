import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
  padding: 15px;
`;

export const DateView = styled.View`
    padding: 20px;
    flex-direction: row;
`

export const DataInput = styled(TextInputMask)`
    padding: 15px;
    width: 80%;
`

export const AgendButton = styled.TouchableOpacity`
    padding: 7px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    background: #1976d2;
`

export const TextButton = styled.Text`
    font-size: 14px;
    color: #fefefe;
`

export const SuccessView = styled.View`
    padding: 15px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`

export const Confirm = styled.TouchableOpacity`
    padding: 7px;
    border-radius: 5px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    width: 50%;
    align-self: center;
    background: #28a745;
`

export const Success = styled.Text`
    font-size: 22px;
    color: #28a745;
`

export const Payment = styled.Picker`
    padding: 10px;
    width: 90%;
`
