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
  padding: 15px;
  background: #f5f5f5;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const Address = styled.View`
  flex-flow: row;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #333;
`;

export const Details = styled.Text`
  font-size: 14px;
  color: #999;
`;
