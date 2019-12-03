import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const Content = styled.View`
    flex: 1;
`

export const Header = styled.View`
    height: 100px;
    align-items: center;
    justify-content: center;
`

export const Username = styled.Text`
    font-size: 23px;
    color: #222;
    font-weight: bold;
`

export const PersonalInfo = styled.View`
    height: 100px;
    justify-content: center;
    padding: 20px;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    border-style: solid;
`

export const Info = styled.Text`
    font-size: 15px;
    color: #666;
`

export const AddressView = styled.View`
    height: 100px;
    justify-content: center;
    padding: 20px;

`

export const AddressInfo = styled.Text`
    font-size: 15px;
    color: #666;

`

export const LogoutButton = styled.TouchableOpacity`
    width: 50%;
    align-self: center;
    padding: 7px;
    align-items: center;
    justify-content: center;
    background: #dc3545;
    border-radius: 7px;
    margin-top: 50px;
`

export const LogoutText = styled.Text`
    color: #fefefe;
    font-size: 18px;
`
