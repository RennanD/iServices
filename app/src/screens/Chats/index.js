import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {Container, Card, CardText, List} from './styles';
import api from '../../service/api';

export default function Chats({navigation}) {
  const [chats, setChats] = useState([]);
  const {navigate} = navigation;

  useEffect(() => {
    async function loadChats() {
      const logged = await AsyncStorage.getItem('logged');
      const response = await api.get(`/chats/${logged}/user`);

      setChats(response.data);
    }
    loadChats();
  }, []);

  function renderItems({item}) {
    return (
      <Card onPress={() => navigate('ChatDetail', {chat_id: item._id})}>
        <CardText>Clique para ver o chat</CardText>
      </Card>
    );
  }

  return (
    <Container>
      <List
        data={chats}
        keyExtractor={item => item._id}
        renderItem={renderItems}
      />
    </Container>
  );
}
