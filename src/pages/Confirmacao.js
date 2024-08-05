import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Confirmacao = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <Container>
      <h1>Confirmação de Pedido</h1>
      <p>Nome: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Pedido concluído com sucesso!</p>
    </Container>
  );
};

export default Confirmacao;
