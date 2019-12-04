import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  AgendButton,
  DateView,
  DataInput,
  SuccessView,
  Success,
  TextButton,
  Payment,
  Confirm,
} from './styles';
import api from '../../service/api';
import {Input} from '../Login/styles';

export default function Attendance({navigation}) {
  const worker_id = navigation.getParam('worker_id');

  const [day, setDay] = useState();
  const [schedule, setTime] = useState();
  const [payment, setPayment] = useState();
  const [desc, setDesc] = useState();
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState();

  async function handleFinish() {
    const logged = await AsyncStorage.getItem('logged');

    await api.post('/attendance', {
      worker_id,
      logged,
      desc,
      day,
      schedule,
      payment,
      completed,
    });

    setSuccess('Agendado com sucesso!');
  }

  return (
    <Container>
      <Input
        placeholder="Descrição obrigátoria"
        value={desc}
        onChangeText={text => setDesc(text)}
      />
      <DateView>
        <DataInput
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={day}
          onChangeText={text => {
            setDay(text);
          }}
          placeholder="digite a data de atendimento"
        />
      </DateView>
      <DateView>
        <DataInput
          type={'datetime'}
          options={{
            format: 'HH:mm',
          }}
          value={schedule}
          onChangeText={text => {
            setTime(text);
          }}
          placeholder="digite o horário de atendimento"
        />
      </DateView>
      <Payment
        selectedValue={payment}
        onValueChange={itemValue => setPayment(itemValue)}>
        <Payment.Item
          key="select"
          label="Selecione uma forma pagamento"
          value="Selecione uma forma pagamento"
        />
        <Payment.Item key="money" label="Dinheiro" value="Dinheiro" />
        <Payment.Item key="card" label="Cartão" value="Cartão" />
      </Payment>
      <Confirm onPress={handleFinish}>
        <TextButton>Confirmar</TextButton>
      </Confirm>

      {!!success && (
        <SuccessView>
          <Success> {success} </Success>
        </SuccessView>
      )}
    </Container>
  );
}
