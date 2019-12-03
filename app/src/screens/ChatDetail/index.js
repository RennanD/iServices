import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import socket from 'socket.io-client';

import api from '../../service/api';
import {
  Container,
  List,
  SendView,
  SendInput,
  SendButton,
  TextButton,
  MessegeContainer,
  Author,
  Messege,
  Header,
  FinishButton,
  FinishText,
} from './styles';

export default function ChatDetail({navigation}) {
  const [messeges, setMesseges] = useState([]);
  const [author, setAuthor] = useState();
  const [activeChat, setActiveChat] = useState();
  const [newMessege, setMessege] = useState();
  const [realtime, setRealTime] = useState(false);

  const chat_id = navigation.getParam('chat_id');

  useEffect(() => {
    async function loadUser() {
      setRealTime(!realtime);
      const io = socket('http://10.0.3.2:3001');
      const logged = await AsyncStorage.getItem('logged');
      const response = await api.get(`/profile/${logged}`);
      const load = await api.get(`/chats/${chat_id}`);

      setActiveChat(load.data);
      setAuthor(response.data.name);
      setMesseges(load.data.messeges);
      io.emit('connectChat', activeChat);
    }
    loadUser();
  }, []);

  useEffect(() => {
    function real() {
      setTimeout(function() {
        setRealTime(!realtime);
      }, 1000);
    }
    real();
    async function newLoad() {
      const load = await api.get(`/chats/${chat_id}`);
      setMesseges(load.data.messeges);
    }
    newLoad();
  }, [realtime]);

  async function handleSendMessege() {
    const io = socket('http://10.0.3.2:3001');
    const messegeObject = {author, newMessege, date: Date.now()};
    await api.post(`/chats/${chat_id}/messeges`, {
      messege: messegeObject,
    });
    setMessege('');
    io.emit('sendMessege');
  }

  function renderItens({item}) {
    return (
      <MessegeContainer>
        <Author> {item.author} </Author>
        <Messege> {item.newMessege} </Messege>
        <Messege> {item.date} </Messege>
      </MessegeContainer>
    );
  }

  return (
    <Container>
      <List
        data={messeges}
        keyExtractor={item => item.messege}
        renderItem={renderItens}
        inverted
      />

      <SendView>
        <SendInput
          placeholder="Digite Aqui"
          value={newMessege}
          onChangeText={msg => setMessege(msg)}
        />
        <SendButton onPress={handleSendMessege}>
          <TextButton>Enviar</TextButton>
        </SendButton>
      </SendView>
    </Container>
  );
}
