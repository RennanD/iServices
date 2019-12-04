import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const Content = styled.View`
    flex: 1;
`

export const Header = styled.View`
    height: 50px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    border-style: solid;
`

export const Title = styled.Text`
    font-size: 18px;
    color: #333;
`

export const Infomations = styled.View`
    margin-top: 20px;
    padding: 20px 30px;
`

export const Info = styled.Text`
    font-size: 15px;
    color:#666;
    text-align: justify;

`

export const FinishButton = styled.TouchableOpacity`
    margin-top: 10px;
    width: 50%;
    align-self: center;
    background: #28a745;
    padding: 10px;
    align-items: center;
    justify-content: center;
`

export const TextButton = styled.Text`
    color: #fefefe;
    font-size: 15px;
    font-weight: bold;
`
