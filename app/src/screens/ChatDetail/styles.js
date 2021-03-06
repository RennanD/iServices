import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fefefe;
`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Content = styled.ScrollView`
  padding: 15px;
  bottom: 0;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 15,
  },
})`
  margin-bottom: 20px;
`;

export const MessegeContainer = styled.View`
  height: 50px;
  margin-bottom: 20px;
`;

export const MessegeAuthor = styled.View`
  height: 50px;
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const Author = styled.Text`
  font-size: 20px;
  color: #222;
`;

export const Messege = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const DateMsg = styled.Text`
  font-size: 13px;
  color: #666;
`;

export const SendView = styled.View`
  height: 100px;
  padding: 15px;
  align-items: center;
  flex-direction: row;
`;

export const SendInput = styled.TextInput`
  width: 80%;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #ddd;
  padding: 10px;
`;

export const SendButton = styled.TouchableHighlight`
  padding: 7px;
  background: #28a745;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  color: #fefefe;
  font-size: 14px;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  padding: 7px;
  align-items: center;
  justify-content: center;
  background: #28a745;
  width: 50%;
  align-self: center;
  margin-bottom: 5px;
  border-radius: 7px;

`

export const FinishText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`
