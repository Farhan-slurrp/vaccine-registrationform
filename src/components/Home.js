import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Form from "./Form";

const Home = () => {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 220px auto;
`;
