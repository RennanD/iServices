import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { format } from 'date-fns'


import {Container, Card, CardText, List, NameText} from './styles';
import api from '../../service/api';

export default function Chats({navigation}) {
  const [chats, setChats] = useState([]);
  const {navigate} = navigation;
  const [userLogged, setLogged] = useState()
  const [realtime, setRealTime] = useState(false);

  useEffect(() => {
    function real() {
      setTimeout(function() {
        setRealTime(!realtime);
      }, 1000);
    }
    real();
    async function newLoad() {
      const logged = await AsyncStorage.getItem('logged');
      const response = await api.get(`/chats/${logged}/user`);
      setLogged(logged)
      setChats(response.data);
    }
    newLoad();
  }, [realtime]);

  useEffect(() => {
    async function loadChats() {
      
      const logged = await AsyncStorage.getItem('logged');
      const response = await api.get(`/chats/${logged}/user`);
      setLogged(logged)
      setChats(response.data);
    }
    loadChats();
  }, []);

   function renderItems({item}) {
    
    const target = item.users.find(t => t._id !== userLogged)
    
    return (
      <Card onPress={() => navigate('ChatDetail', {chat_id: item._id, worker_id: target._id})}>
        
        <NameText> {target.name} </NameText>
        <CardText> Chat iniciado em:  {format(new Date(item.updatedAt), ' HH:mm dd/MM/yyyy ' )} </CardText>
        
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
