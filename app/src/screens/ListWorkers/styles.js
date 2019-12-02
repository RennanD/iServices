import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const Card = styled.TouchableOpacity`
  padding: 15px;
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
export const ChatButton = styled.TouchableOpacity`
  margin: 15px;
  padding: 15px;
  width: 50%;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: #28a745;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  color: #fefefe;
  font-weight: bold;
`;
