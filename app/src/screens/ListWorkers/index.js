import React, {useState, useEffect} from 'react';

import {
  Container,
  Address,
  Card,
  Details,
  List,
  Name,
  TextButton,
  Header,
  Title,
} from './styles';
import api from '../../service/api';
import {BackButton} from '../Home/styles';

export default function ListWorkers({navigation}) {
  const work_id = navigation.getParam('work_id');
  const [workers, setWorkers] = useState([]);

  function renderItems({item}) {
    return (
      <Card
        onPress={() => navigation.navigate('Details', {worker_id: item._id})}>
        <Name>{item.name}</Name>
        <Address>
          <Details>
            Endereço: {item.street}, {item.number} - {item.neighborhood}
          </Details>
        </Address>
        <Details>Telefone: {item.phone} </Details>
      </Card>
    );
  }

  useEffect(() => {
    async function loadWorkers() {
      const response = await api.get(`/works/${work_id}`);
      const {data} = response;
      setWorkers(data.workers);
    }
    loadWorkers();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton>
          <TextButton>Voltar</TextButton>
        </BackButton>
      </Header>
      <List
        data={workers}
        keyExtractor={item => item._id}
        renderItem={renderItems}
      />
    </Container>
  );
}
