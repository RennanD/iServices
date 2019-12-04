import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  Header,
  Title,
  PersonalInfo,
  TextInfo,
  Professional,
} from './styles';
import api from '../../service/api';
import {ChatButton, TextButton} from '../ListWorkers/styles';
import {BackButton} from '../Home/styles';

export default function Details({navigation}) {
  const worker_id = navigation.getParam('worker_id');
  const {navigate} = navigation;
  const [worker, setWorker] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function loadWorker() {
      const logged = await AsyncStorage.getItem('logged');

      const response = await api.get(`/profile/${worker_id}`);

      setWorker(response.data);
    }
    loadWorker();
  }, []);

  async function handleInitChat() {
    const logged = await AsyncStorage.getItem('logged');
    setLoad(true);
    try {
      const response = await api.post('/chats', {
        worker_id,
        user_id: logged,
      });
      const {data} = response;
      setLoad(false);
      navigate('ChatDetail', {chat_id: data._id});
    } catch (error) {
      console.log(error);
    }
  }

  function handleInitAttendance() {
    navigate('Attendance', {worker_id});
  }

  return (
    <Container>
      {worker ? (
        <View>
          <Header>
            <Title>{worker.name}</Title>
          </Header>
          <PersonalInfo>
            <TextInfo> {worker.description} </TextInfo>
            <TextInfo>Contato: {worker.phone}, </TextInfo>
            <TextInfo>
              {' '}
              Endereço: {worker.street}, {worker.number}, {worker.neighborhood}{' '}
            </TextInfo>
          </PersonalInfo>
          <Professional>
            <TextInfo>
              Clientes atendidos: {worker.attendances.length}{' '}
            </TextInfo>
          </Professional>
          <ChatButton onPress={handleInitChat}>
            {!load ? (
              <TextButton>Iniciar Chat</TextButton>
            ) : (
              <ActivityIndicator color="#fefefe" size={22} />
            )}
          </ChatButton>
          <ChatButton onPress={handleInitAttendance}>
            {!load ? (
              <TextButton>Agender atendimeto</TextButton>
            ) : (
              <ActivityIndicator color="#fefefe" size={22} />
            )}
          </ChatButton>
        </View>
      ) : (
        <View />
      )}
    </Container>
  );
}
