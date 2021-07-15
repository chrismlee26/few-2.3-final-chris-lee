import React, { useState } from 'react';
import CharDisplay from './CharDisplay';
import { useDispatch } from 'react-redux'

import { inputChar } from './actions/index'
import SaveCharList from './SaveCharsList';


function StarWars() {
  const [id, setId] = useState('');

  const dispatch = useDispatch()

  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault()
          dispatch( inputChar(id) )
        }}
      >
        <input 
          value={id}
          type='number'
          onChange={e => setId(e.target.value)}
        />
        <button type='submit'>Search!</button>
      </form>
      <CharDisplay />
    </div>
  )
}

export default StarWars;
