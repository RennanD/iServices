import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native'

import { Container,FinishButton,Header,Info,Infomations,TextButton,Title, Content } from './styles';
import api from '../../service/api';
import { set } from 'date-fns';
import { SuccessView, Success } from '../Attendance/styles';

export default function Complet({navigation}) {
  
  const [attendance, setAttendance] = useState()
  const [load, setLoad] = useState(false)
  const attendance_id = navigation.getParam('attendance_id')

  const [success, setSuccess] = useState('')

  useEffect(() => {
    async function loadAttendance() {
      
      
      try {
        const response = await api.get(`/attendances/${attendance_id}/show`)
    
       

      setAttendance(response.data)
      } catch (error) {
        console.log(error);
        
      }

    }
    loadAttendance()
  },[])

  async function handleComplet() {
    setLoad(true)
    await api.put(`/attendances/${attendance_id}`, {
      completed: true
    })
    setSuccess('Finalizado com sucesso')
    setLoad(false)
  }

  return (
    <Container>
      {attendance ? (
        <Content>
        <Header>
          <Title> {attendance.desc} </Title>
        </Header>
        <Infomations>
          <Info> Agendado por { attendance.user } </Info>
          <Info> Agendado no dia {attendance.day} às {attendance.schedule} </Info>
        </Infomations>
        <FinishButton onPress = {handleComplet} >
          {!load ? <TextButton>Concluir atendimento</TextButton> : <ActivityIndicator color ="#fefefe" size ={22} />}
        </FinishButton>
        <SuccessView>
          <Success> {success} </Success>
        </SuccessView>
      </Content>
      ) : (
        <Content />
      )}
    </Container>
  );
}
