import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

export const Card = styled.TouchableOpacity`
  padding: 20px 30px;
  margin-top: 20px;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  border-style: solid;
`;

export const CardText = styled.Text`
  color: #333;
  font-size: 18px;
`;
export const BackButton = styled.TouchableOpacity`
  padding: 7px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
