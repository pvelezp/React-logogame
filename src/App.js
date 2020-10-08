import React,{useState} from 'react';
import './App.css';
import Login from './Login';
import Game from './Game';

function App() {

  const [name, setName] =  useState(null)
  console.log(name)

  const handleName = (input) => {
    setName({
      name: input,
      id: Date.now()
  })
  }

  return (
    <div className="app">
     {name ? (
       <Game
       name={name}
       />
     ): (
      <Login
      handleName={handleName}
      />
     )}

    </div>
  );
}

export default App;
