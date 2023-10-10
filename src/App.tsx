// import { useState } from 'react';
import './App.css';
import InputFiled from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading"> Edgar's Taskify </span>
      <InputFiled />
    </div>
  );
};

export default App;
