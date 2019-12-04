import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Content,
  Card,
  Complet,
  Desc,
  DetailCard,
  List,
  Pending,
  Title,
} from './styles';
import api from '../../service/api';

export default function AttendanceWorker({navigation}) {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    async function loadAttendances() {
      try {
        const logged = await AsyncStorage.getItem('logged');
       ;

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
          <DetailCard onPress = {() => navigation.navigate('Complet',{attendance_id: item._id})} >
            <Title> {item.desc} </Title>
            <Desc>
              Agendado para o dia {item.day} às {item.schedule}{' '}
            </Desc>
            <Pending>Agendado</Pending>
          </DetailCard>
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
