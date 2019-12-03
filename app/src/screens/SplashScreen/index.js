import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import { Container, Red, Black } from './styles';


export default function SplashScreen({navigation}) {


    useEffect(()=>{

        async function splash(){
            const logged = await AsyncStorage.getItem('logged')
            const type = await AsyncStorage.getItem('type')
            
            setTimeout(() => {
                if(!logged) navigation.navigate('Login')

                if(logged && type === 'Client') navigation.navigate('HomeClient')
                if(logged && type === 'Worker') navigation.navigate('HomeWorker')
            }, 3000);
            
            
            
        }
        splash()
    },[])
  
    return (
        <Container>
            <Red>i</Red>
            <Black>Services</Black>
        </Container>
    );
}
