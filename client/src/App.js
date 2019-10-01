import React from 'react';
import './App.css';
import { CafeList } from "./containers/CafeList";
import { CafeForm } from "./containers/CafeForm";


function App() {
  return (
    <div className="App">
        <CafeForm />
        <CafeList />
    </div>
  );
}

export default App;
