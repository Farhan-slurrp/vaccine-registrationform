import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <Container>
      <img style={{ width: "120px", height: "90px" }} src={logo} alt="" />
      <h3>Ministry of Health of Malaysia</h3>
      <Title>Covid-19 Vaccine Registration Form</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  padding-top: 0.9em;
  padding-bottom: 0.8em;

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1em;
    text-align: center;
  }
`;

const Title = styled.div`
  background-color: rgb(0 0 255 / 10%);
  width: 70%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 0.2em;
  padding: 0.7em;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
