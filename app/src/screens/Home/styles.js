import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fefefe;
    padding: 20px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {
        padding: 20,
    }
})``

export const Card = styled.TouchableOpacity`
    height: 50px;
    justify-content: center;
    background: #f6f6f6;
    margin: 10px 0;
    padding:30px;
    border-radius: 10px;
`

export const CardText = styled.Text`
    color: #666;
    font-size: 14px;

` 
