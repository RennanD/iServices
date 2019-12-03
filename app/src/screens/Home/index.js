import React, {useState, useEffect} from 'react';
import {Container, List, Card, CardText, BackButton} from './styles';
import AsyncStorage from '@react-native-community/async-storage'
import {Header, Title} from '../Register/styles';
import api from '../../service/api';

export default function Home({navigation}) {
  const {navigate} = navigation;

  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function loadWorks() {

      const response = await api.get('/works');

      setWorks(response.data);
    }
    loadWorks();
  }, []);

  function renderItem({item}) {
    if(item.name !== "Selecione uma categoria"){
      return (
        <Card onPress={() => navigate('ListWorker', {work_id: item._id})}>
          <CardText>{item.name}</CardText>
        </Card>
      );
    }
  }

  return (
    <Container>
      <List
        data={works}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
}
