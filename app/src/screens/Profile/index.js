import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import { Container,Header,Username,AddressView,Info,AddressInfo,PersonalInfo, LogoutButton, LogoutText, Content } from './styles';
import api from '../../service/api';

export default function Profile({navigation}) {

    const [user, setUser] = useState() 

    useEffect(() => {
        async function loadUser() {

            const logged = await AsyncStorage.getItem("logged")

            const response = await api.get(`/profile/${logged}`)

            setUser(response.data)

        }
        loadUser()
    },[])

    async function handleLogout() {
        await AsyncStorage.clear()

        navigation.navigate('Login')

    }

  return (
    <Container>

        { user ? (
            <Content>
                <Header>
                    <Username> {user.name} </Username>
                </Header>
                <PersonalInfo>
                    <Info>E-mail: {user.email} </Info>
                    <Info>Telefone: {user.phone} </Info>
                    <Info>CPF: {user.cpf} </Info>
                </PersonalInfo>
                <AddressView>
                    <AddressInfo>Endereço: {user.street},{user.number} - {user.neighborhood} </AddressInfo>
                    <AddressInfo>CEP: {user.zipcode} </AddressInfo>
                </AddressView>
                <LogoutButton onPress = {handleLogout} >
                    <LogoutText>Sair</LogoutText>
                </LogoutButton>
            </Content>
        ) : (
            <Content /> 
        )}
    </Container>
  );
}
