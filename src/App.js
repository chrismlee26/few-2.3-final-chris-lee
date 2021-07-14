import React from 'react'
import './App.css';
import { createStoreHook, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


import Home from './Home'
import StarWars2 from './StarWars2'


function App() {
  return (
    <div className="App">
      <Home />
      <StarWars2 />
    </div>
  );
}

export default App;
