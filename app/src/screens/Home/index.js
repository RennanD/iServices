import React from 'react';
import { Container,List, Card, CardText } from './styles';
import { Header, Title } from '../Register/styles';


export default function Home() {
  
  const servicos = [
    {
      id: 1,
      name: "Assisência Técnica"
    },
    {
      id: 2,
      name: "Bába"
    },
    {
      id: 3,
      name: "Assisência Técnica"
    },
    {
      id: 4,
      name: "Bába"
    },
    {
      id: 5,
      name: "Assisência Técnica"
    },
    {
      id: 6,
      name: "Bába"
    },
    {
      id: 7,
      name: "Assisência Técnica"
    },
    {
      id: 8,
      name: "Bába"
    },
    {
      id: 9,
      name: "Assisência Técnica"
    },
    {
      id: 10,
      name: "Bába"
    }
  ]

  function renderItem({item}){
    return (
      <Card>
        <CardText>{item.name}</CardText>
      </Card>
    )
  }

  return (
    <Container>

      <Header>
        <Title>Tipo de serviço</Title>
      </Header>

      <List 
        data = {servicos}
        keyExtractor = { item => item.id }
        renderItem = {renderItem}
      />

    </Container>
  );
}
