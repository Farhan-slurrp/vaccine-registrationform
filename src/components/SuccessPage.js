import React from "react";
import styled from "styled-components";

const SuccessPage = () => {
  return (
    <Container>
      <img
        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
        alt="success-tick-img"
      />
      <h1>Thank You!</h1>
      <p id="msg">
        Registration completed successfully. We will contact you soon.
      </p>
      <p className="info">
        For more info, visit our official website https://www.moh.gov.my/
      </p>
    </Container>
  );
};

export default SuccessPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1em;
  img {
    width: 10em;
    height: 13em;
    @media (max-width: 597px) {
      width: 7em;
      height: 10em;
    }
  }
  h1 {
    text-align: center;
    margin-top: -0.3em;
    font-family: "Montserrat", sans-serif;
    font-size: 2.5em;
    color: #333;
  }
  #msg {
    text-align: center;
    margin-top: 1em;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    color: #333;
    @media (max-width: 597px) {
      padding: 0 0.8em;
    }
  }
  .info {
    background-color: rgb(0 255 0 / 15%);
    width: 40vw;
    text-align: center;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.7em;
    @media (max-width: 1151px) {
      width: 50vw;
    }
    @media (max-width: 914px) {
      width: 60vw;
    }
    @media (max-width: 762px) {
      margin-top: 3em;
      width: 80vw;
    }
  }
`;
