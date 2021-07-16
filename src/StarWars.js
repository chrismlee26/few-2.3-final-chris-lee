import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { inputChar } from './actions/index';

import CharDisplay from './CharDisplay';
import SaveCharList from './SaveCharsList';


function StarWars() {
  const [id, setId] = useState('');

  const dispatch = useDispatch()

  return (
    <div>
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
          <button type='submit'>SEARCH!</button>
        </form>
        <CharDisplay />
      </div>
      {/* conditionally render this  */}
      <SaveCharList />
    </div>
  )
}

export default StarWars;
