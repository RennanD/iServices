import React, { useState } from 'react';

import { Container, AgendButton, DateView, DataInput, SuccessView, Success, TextButton, Payment, Confirm } from './styles';
import api from '../../service/api';

export default function Attendance() {
  
  const [day, setDay] = useState()
  const [ schedule, setTime ] = useState()
  const [ payment, setPayment ] = useState()
  const [success, setSuccess] = useState()

  async function handleFinish() {
    await api.post('/attendance',{
      day,
      schedule,
      payment
    })

    setSuccess('Realizado com sucesso!')
  }

  return (
    <Container>
      <DateView>
        <DataInput 
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY'
          }}
          value={day}
          onChangeText={text => {
            setDay(text)
          }}
          placeholder = "digite a data de atendimento"
        />
      </DateView>
      <DateView>
        <DataInput 
          type={'datetime'}
          options={{
            format: 'HH:mm'
          }}
          value={schedule}
          onChangeText={text => {
            setTime(text)
          }}
          placeholder = "digite o horário de atendimento"
        />
      </DateView>
      <Payment
        selectedValue={payment}
        onValueChange={(itemValue) =>
        setPayment(itemValue)
      }>
        <Payment.Item 
          key= "select"
          label= "Selecione um pagamento"
          value= "Selecione um pagamento"
        />
        <Payment.Item 
          key= "money"
          label= "Dinheiro"
          value= "Dinheiro"
        />
        <Payment.Item 
          key= "card"
          label= "Cartão"
          value= "Cartão"
        />
      </Payment>
      <Confirm onPress = {handleFinish}>
        <TextButton>Confirmar</TextButton>
      </Confirm>

      {!!success && <SuccessView><Success> {success} </Success></SuccessView> }
    </Container>
  );
}
