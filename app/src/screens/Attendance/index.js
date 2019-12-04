import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { ActivityIndicator } from 'react-native'

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
import {Input, Error} from '../Login/styles';

export default function Attendance({navigation}) {
  const worker_id = navigation.getParam('worker_id');

  const [day, setDay] = useState();
  const [schedule, setTime] = useState();
  const [payment, setPayment] = useState();
  const [desc, setDesc] = useState();
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState();
  const [load, setLoad] = useState(false)
  const [error, setError] = useState()

  async function handleFinish() {
    const logged = await AsyncStorage.getItem('logged');
    setLoad(true)
    try {
      console.log(worker_id, logged);
    

    await api.post('/attendances', {
      worker_id,
      logged,
      desc,
      day,
      schedule,
      payment,
      completed,
    });
    setLoad(false)
    setSuccess('Agendado com sucesso!');
    } catch (response) {
      setLoad(false)
      setError(response.data.error)
      
    }
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
        {!load ? <TextButton>Confirmar</TextButton> : <ActivityIndicator color = "#fefefe" size = {22} />}
      </Confirm>

      {!!error && (
        <SuccessView>
          <Error>{error}</Error>
        </SuccessView>
      )}

      {!!success && (
        <SuccessView>
          <Success> {success} </Success>
        </SuccessView>
      )}
    </Container>
  );
}
