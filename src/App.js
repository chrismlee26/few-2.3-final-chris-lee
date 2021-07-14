import React from 'react'
import './App.css';
import { createStoreHook, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


import Home from './Home'
import StarWars from './StarWars'

function App() {
  return (
    <div className="App">
      <Home />
      <StarWars />
    </div>
  );
}

export default App;
