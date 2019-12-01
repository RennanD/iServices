import React, {useState, useEffect} from 'react';
import {Container, List, Card, CardText} from './styles';
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
    return (
      <Card onPress={() => navigate('ListWorker', {work_id: item._id})}>
        <CardText>{item.name}</CardText>
      </Card>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Tipo de serviço</Title>
      </Header>

      <List
        data={works}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
}
