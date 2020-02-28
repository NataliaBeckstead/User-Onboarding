import React from 'react';
import './App.css';
import Form from "./components/Form";
import styled from "styled-components";

const HeaderHodor = styled.div `
  padding: 3rem;
  padding-left: 7rem;
  margin: 0 5%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Title = styled.h1 `
  color: rgb(30, 30, 30);
`;

function App() {
  return (
    <div className="App">
      <HeaderHodor>
        <Title>On Board!</Title>
        <p>Tired of coming in airport few hours earlier for registration and waiste your time for waiting? <br></br> 
        It's in the past! We are value your time. Register online from now on!
        </p>
        <Form />
      </HeaderHodor>
      
    </div>
  );
}

export default App;
