import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Content,
  Card,
  Complet,
  Desc,
  List,
  Pending,
  Title,
} from './styles';
import api from '../../service/api';

export default function AttendanceClient({navigation}) {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    async function loadAttendances() {
      try {
        const logged = await AsyncStorage.getItem('logged');
        

        const response = await api.get(`/attendances/${logged}`);
        

        setAttendances(response.data.attendances);
      } catch (err) {
        console.log(err);
      }
    }

    loadAttendances();
  });

  function renderItems({item}) {
    if (!item.completed) {
      return (
        <Content>
          <Card >
            <Title> {item.desc} </Title>
            <Desc>
              Agendado para o dia {item.day} às {item.schedule}{' '}
            </Desc>
            <Desc> Prestador de serviço: {item.worker} </Desc>
            <Pending>Agendado</Pending>
          </Card>
        </Content>
      );
    }
    if (item.completed) {
      return (
        <Content>
          <Card>
            <Title> {item.desc} </Title>
            <Desc>
              Finalizado no dia {item.day} às {item.schedule}{' '}
            </Desc>
            <Desc> Realizado por {item.worker} </Desc>
            <Complet>Finalizado</Complet>
          </Card>
        </Content>
      );
    }
  }

  return (
    <Container>
      <List
        data={attendances}
        keyExtractor={item => item._id}
        renderItem={renderItems}
      />
    </Container>
  );
}
