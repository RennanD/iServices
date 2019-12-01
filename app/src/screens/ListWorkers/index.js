import React, {useState, useEffect} from 'react';

import {Container, Address, Card, Details, List, Name} from './styles';
import api from '../../service/api';

export default function ListWorkers({navigation}) {
  const work_id = navigation.getParam('work_id');
  const [workers, setWorkers] = useState([]);

  function renderItems({item}) {
    return (
      <Card>
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
      <List
        data={workers}
        keyExtractor={item => item._id}
        renderItem={renderItems}
      />
    </Container>
  );
}
