import React from 'react';
import './App.css';
import {Cards} from "./components/cards.component";

function App() {
  return (
      <>
          <Cards>
              <h5 className="card-title">Заголовок №1</h5>
              <p className="card-text">Текст №1</p>
          </Cards>
          <Cards>
              <img src={'https://gif-avatars.com/img/150x150/pika.gif'} alt=""/>
              <h5 className="card-title">Заголовок №2</h5>
              <p className="card-text">Текст №2</p>
          </Cards>
      </>
  );
}

export default App;
