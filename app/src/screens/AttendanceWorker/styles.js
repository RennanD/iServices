import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const Content = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const DetailCard = styled.TouchableOpacity`
  padding: 20px;
  margin-top: 10px;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  border-style: solid;
`;

export const Card = styled.View`
  padding: 20px;
  margin-top: 10px;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  border-style: solid;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
`;

export const Desc = styled.Text`
  font-size: 15px;
  color: #666;
  text-align: justify;
`;

export const Complet = styled.Text`
  font-size: 14px;
  color: #28a745;
`;

export const Pending = styled.Text`
  font-size: 14px;
  color: #ffc107;
`;
