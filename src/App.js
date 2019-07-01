import React from 'react';
import './App.css';
import Main from './Components/Main'
import Header from './Components/Header'
import Pannel from './Components/Pannel'
import './reset.css'

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Header />
        <Pannel />
        <Main />
      </div>
    </div>
  );
}

export default App;
