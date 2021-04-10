import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import history from "../utils/history";

const Form = () => {
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/success");
  };

  useEffect(() => {
    setDate("");
  }, []);

  return (
    <Container>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <Name>
          <div className="name-input">
            <label htmlFor="firstname">
              First Name<sup className="star">*</sup>
            </label>
            <Input type="text" id="firstname" required />
          </div>
          <div className="name-input">
            <label htmlFor="lastname">
              Last Name<sup className="star">*</sup>
            </label>
            <Input type="text" id="lastname" required />
          </div>
        </Name>
        <DateGender>
          <div className="date-container">
            <label htmlFor="date">
              Date of Birth<sup className="star">*</sup>
            </label>
            <DatePicker
              id="date"
              selected={date}
              onChange={(date) => setDate(date)}
              placeholderText="MM/DD/YYYY"
              required
            />
          </div>
          <div className="gender-container">
            <label htmlFor="date">
              Gender<sup className="star">*</sup>
            </label>
            <select id="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </DateGender>
        <EmailPhone>
          <div className="emailphone-input">
            <label htmlFor="email">
              Email<sup className="star">*</sup>
            </label>
            <Input type="email" id="email" required />
          </div>
          <div className="emailphone-input">
            <label htmlFor="phone">
              Phone Number<sup className="star">*</sup>
            </label>
            <Input type="number" minLength="8" id="phone" required />
          </div>
        </EmailPhone>
        <Address>
          <label htmlFor="address">
            Address<sup className="star">*</sup>
          </label>
          <Input type="text" id="address" required />
        </Address>
        <CityState>
          <div className="citystate-input">
            <label htmlFor="city">
              City<sup className="star">*</sup>
            </label>
            <Input type="text" id="city" required />
          </div>
          <div className="citystate-input">
            <label htmlFor="state">
              State/Province<sup className="star">*</sup>
            </label>
            <Input type="text" id="state" required />
          </div>
        </CityState>
        <Button type="submit">REGISTER</Button>
      </FormContainer>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  width: 100%;
  padding-top: 1em;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.form`
  width: 70%;
  padding: 0.7em;
  margin-left: 2.3em;
  display: flex;
  postion: relative;
  flex-direction: column;
  align-items: center;
  label {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 0.9em;
    display: block;
    color: #333;
    .star {
      color: #f00;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 0em;
  }
`;

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .name-input {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5em;
    .name-input {
      width: 85vw;
    }
  }
`;

const DateGender = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
  #date {
    width: 31.2vw;
    height: 2.2em;
    padding-left: 0.2em;
    margin-top: 0.3em;
    font-size: 0.9em;
    border: 1px solid rgb(0 0 0 / 35%);
    :focus {
      outline: none !important;
      border-color: #719ece;
      box-shadow: 0 0 4px #719ece;
    }
    @media (max-width: 768px) {
      width: 33vw;
    }
  }
  .gender-container {
    margin-left: 3vw;
    select {
      width: 31.6vw;
      height: 2.2em;
      padding-left: 0.2em;
      margin-top: 0.3em;
      font-size: 0.9em;
      border: 1px solid rgb(0 0 0 / 35%);
      :focus {
        outline: none !important;
        border-color: #719ece;
        box-shadow: 0 0 4px #719ece;
      }
      @media (max-width: 768px) {
        width: 40vw;
      }
    }
  }
`;

const EmailPhone = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  .emailphone-input {
    width: 50%;
    input[type="number"] {
      -moz-appearance: textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5em;
    .emailphone-input {
      width: 85vw;
    }
  }
`;

const Address = styled.div`
  margin-top: 1.5em;
  width: 100%;
  Input {
    width: 95%;
  }
`;

const CityState = styled.div`
  margin-top: 1.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  .citystate-input {
    width: 50%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5em;
    .citystate-input {
      width: 85vw;
    }
  }
`;

const Input = styled.input`
  width: 90%;
  height: 2.2em;
  padding-left: 0.2em;
  margin-top: 0.3em;
  font-size: 0.9em;
  border: 1px solid rgb(0 0 0 / 35%);
  :focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 4px #719ece;
  }
`;

const Button = styled.button`
  width: 80%;
  postion: absolute;
  margin-top: 3em;
  margin-right: 3.8vw;
  margin-bottom: 1.5em;
  padding: 0.6em 0em;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Poppins", sans-serif;
  background: rgb(6, 140, 42);
  border-radius: 0.3em;
  border: none;
`;
