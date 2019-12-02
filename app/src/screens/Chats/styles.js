import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const Card = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  margin: 10px 0;
  padding: 30px;
  border-radius: 10px;
`;

export const CardText = styled.Text`
  color: #999;
  font-size: 14px;
`;
