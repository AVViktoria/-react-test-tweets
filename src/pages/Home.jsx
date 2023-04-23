import React from 'react';
import { Container } from '../components/SharedLayout/SharedLayout.styled';
import styled from "styled-components";

const  Home = ()=> {
  return (
    <Container>
      <Caption>Hello friends!</Caption>
      <Text>
        This is an application where you can follow interesting people
      </Text>
    </Container>
  );
}

export default Home;

export const Caption = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;

`;