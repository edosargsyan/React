import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import Message from './Components/Sidebar/message/mesage';
import Main from './Components/Sidebar/Nav/Main/main';

import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App(){
  return (
    <div className="App">
       <Header/>
       <Sidebar/>

    </div>

  );
}
export default App;



