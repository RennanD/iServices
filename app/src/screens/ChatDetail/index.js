import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { formatDistance } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

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
  DateMsg
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
    
    const messegeObject = {author, newMessege, date: new Date()};
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
        <DateMsg> há { formatDistance(new Date(item.date), new Date(), {locate: pt} ) }</DateMsg>
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
