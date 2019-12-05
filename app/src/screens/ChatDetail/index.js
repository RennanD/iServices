import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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
  DateMsg,
  MessegeAuthor
} from './styles';

export default function ChatDetail({navigation}) {

  const worker_id = navigation.getParam("worker_id")

  const [messeges, setMesseges] = useState([]);
  const [author, setAuthor] = useState();
  const [activeChat, setActiveChat] = useState();
  const [newMessege, setMessege] = useState();
  const [realtime, setRealTime] = useState(false);
  const [user, setUSer] = useState()
  const [type, setType] =  useState()

  const chat_id = navigation.getParam('chat_id');

  useEffect(() => {
    async function loadUser() {
      setRealTime(!realtime);
      const logged = await AsyncStorage.getItem('logged');
      const response = await api.get(`/profile/${logged}`);
      const load = await api.get(`/chats/${chat_id}`);

      setUSer(logged)
      setActiveChat(load.data);
      setType(response.data.typeUser);
      setAuthor(response.data.name);
      setMesseges(load.data.messeges);
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

  function handleInitAttendance() {
    navigation.navigate('Attendance', {worker_id});
  }

  function renderItens({item}) {

    

    if(item.author !== author)
    return (
      <MessegeContainer>
        <Author> {item.author} </Author>
        <Messege> {item.newMessege} </Messege>
        <DateMsg> há { formatDistance(new Date(item.date), new Date(), {locale: ptBR} ) }</DateMsg>
      </MessegeContainer>
    );

    if(item.author === author)
    return (
      <MessegeAuthor>
        <Messege> {item.newMessege} </Messege>
        <DateMsg> há { formatDistance(new Date(item.date), new Date(), {locale: ptBR} ) }</DateMsg>
      </MessegeAuthor>
    );
  }

  return (
    <Container>
      <List
        inverted = {false}
        data={messeges}
        keyExtractor={item => item.messege}
        renderItem={renderItens}
        
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
      { type === "Client" && (
        <FinishButton onPress = {handleInitAttendance} >
          <FinishText>Angendar</FinishText>
        </FinishButton>
      )}
    </Container>
  );
}
