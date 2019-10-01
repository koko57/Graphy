import React from 'react';
import './App.css';
import styled from 'styled-components';
import { CafeList } from './containers/CafeList';
import { CafeForm } from './containers/CafeForm';

const STitle = styled.h1`
  font-size: 24px;
  color: darkgrey;
  margin: 20px auto 10px;
`;

const App = () => {
  return (
    <div className="App">
        <STitle>Cafes</STitle>
        <CafeForm />
        <CafeList />
    </div>
  );
};

export default App;
